'use client'

import Link from 'next/link'
import { useId, useRef, useState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { actionStyles } from '@/components/action-link'
import type { UiStrings } from '@/content/ui'
import { trackEvent } from '@/lib/analytics'
import { format } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Field = 'name' | 'email' | 'phone' | 'date' | 'time' | 'guests' | 'consent'
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'submitting' | 'success' | 'mailto' | 'error'

/**
 * Static-hosting friendly: set NEXT_PUBLIC_RESERVATION_ENDPOINT to any form
 * backend that accepts JSON POSTs (Formspree, Basin, a Cloudflare Worker…).
 * Without it, the form opens a pre-filled email to the restaurant.
 */
const endpoint = process.env.NEXT_PUBLIC_RESERVATION_ENDPOINT

const times = Array.from({ length: 21 }, (_, i) => {
  const minutes = 12 * 60 + i * 30
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
})

function today() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function validate(data: FormData, t: UiStrings['form']): Errors {
  const errors: Errors = {}
  const value = (key: string) => String(data.get(key) ?? '').trim()
  if (value('name').length < 2) errors.name = t.errors.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) errors.email = t.errors.email
  if (!/^\+?[\d\s()/-]{6,}$/.test(value('phone'))) errors.phone = t.errors.phone
  if (!value('date') || value('date') < today()) errors.date = t.errors.date
  if (!value('time')) errors.time = t.errors.time
  if (!value('guests')) errors.guests = t.errors.guests
  if (!data.get('consent')) errors.consent = t.errors.consent
  return errors
}

const order: Field[] = ['name', 'email', 'phone', 'date', 'time', 'guests', 'consent']

export function ReservationForm({
  labels: t,
  privacyHref,
  email,
  phone,
  locale,
}: {
  labels: UiStrings['form']
  privacyHref: string
  email: string
  phone: { display: string; href: string }
  locale: string
}) {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const fieldId = (name: string) => `${id}-${name}`

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (String(data.get('company') ?? '')) return

    const nextErrors = validate(data, t)
    setErrors(nextErrors)
    const firstInvalid = order.find((f) => nextErrors[f])
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus()
      return
    }

    const payload = Object.fromEntries(['name', 'email', 'phone', 'date', 'time', 'guests', 'message'].map((k) => [k, String(data.get(k) ?? '').trim()]))
    setStatus('submitting')

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...payload, locale }),
        })
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        setStatus('success')
      } else {
        const body = [
          `${t.name}: ${payload.name}`,
          `${t.email}: ${payload.email}`,
          `${t.phone}: ${payload.phone}`,
          `${t.date}: ${payload.date}`,
          `${t.time}: ${payload.time}`,
          `${t.guests}: ${payload.guests}`,
          payload.message ? `${t.message}: ${payload.message}` : '',
        ]
          .filter(Boolean)
          .join('\n')
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${t.mailSubject} — ${payload.date} ${payload.time}`)}&body=${encodeURIComponent(body)}`
        setStatus('mailto')
      }
      trackEvent('reservation_request', { guests: payload.guests })
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  if (status === 'success' || status === 'mailto') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="flex flex-col items-start gap-4 border-t-2 border-olive bg-ivory-deep p-8 outline-none">
        <CheckCircle2 className="size-8 text-olive" aria-hidden="true" />
        <h3 className="font-display text-3xl">{status === 'success' ? t.successTitle : t.mailtoTitle}</h3>
        <p className="max-w-md leading-relaxed text-foreground/80">
          {status === 'success' ? (
            t.successBody
          ) : (
            <>
              {t.mailtoBody}{' '}
              <a href={`mailto:${email}`} className="underline underline-offset-4">
                {email}
              </a>
              .
            </>
          )}
        </p>
        <button type="button" onClick={() => setStatus('idle')} className={actionStyles('outline-dark', 'mt-2')}>
          {t.another}
        </button>
      </div>
    )
  }

  const errorCount = Object.keys(errors).length
  const inputClass = (field: Field) =>
    cn(
      'mt-2 block min-h-12 w-full border-0 border-b bg-transparent px-0 py-2 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-charcoal focus-visible:outline-none',
      errors[field] ? 'border-destructive' : 'border-charcoal/30',
    )

  const label = (field: string, text: string, required = true) => (
    <label htmlFor={fieldId(field)} className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
      {text}
      {required && (
        <>
          <span aria-hidden="true" className="text-terracotta">
            {' '}
            *
          </span>
          <span className="sr-only"> ({t.required})</span>
        </>
      )}
    </label>
  )

  const error = (field: Field) =>
    errors[field] ? (
      <p id={`${fieldId(field)}-error`} className="mt-2 text-sm text-destructive">
        {errors[field]}
      </p>
    ) : null

  const aria = (field: Field) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${fieldId(field)}-error` : undefined,
  })

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      {status === 'error' && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="flex gap-3 border-l-2 border-destructive bg-destructive/5 p-4 text-sm outline-none">
          <AlertCircle className="size-5 shrink-0 text-destructive" aria-hidden="true" />
          <p>
            <strong className="font-medium">{t.errorTitle}</strong> {t.errorBody}{' '}
            <a href={phone.href} className="underline underline-offset-4">
              {phone.display}
            </a>
            .
          </p>
        </div>
      )}
      {errorCount > 0 && (
        <p role="alert" className="text-sm text-destructive">
          {t.errorSummary}
        </p>
      )}

      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          {label('name', t.name)}
          <input id={fieldId('name')} name="name" type="text" autoComplete="name" className={inputClass('name')} {...aria('name')} />
          {error('name')}
        </div>
        <div>
          {label('email', t.email)}
          <input id={fieldId('email')} name="email" type="email" autoComplete="email" inputMode="email" className={inputClass('email')} {...aria('email')} />
          {error('email')}
        </div>
        <div>
          {label('phone', t.phone)}
          <input id={fieldId('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputClass('phone')} {...aria('phone')} />
          {error('phone')}
        </div>
        <div>
          {label('date', t.date)}
          <input id={fieldId('date')} name="date" type="date" min={today()} className={inputClass('date')} {...aria('date')} />
          {error('date')}
        </div>
        <div>
          {label('time', t.time)}
          <select id={fieldId('time')} name="time" defaultValue="" className={inputClass('time')} {...aria('time')}>
            <option value="" disabled>
              {t.timePlaceholder}
            </option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {error('time')}
        </div>
        <div className="sm:col-span-2">
          {label('guests', t.guests)}
          <select id={fieldId('guests')} name="guests" defaultValue="2" className={inputClass('guests')} {...aria('guests')}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n === 1 ? t.guestsOne : format(n <= 4 ? t.guestsFew : t.guestsOption, { count: n })}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.guestsMore}:{' '}
            <a href={phone.href} className="underline underline-offset-4">
              {phone.display}
            </a>
          </p>
          {error('guests')}
        </div>
        <div className="sm:col-span-2">
          {label('message', t.message, false)}
          <textarea id={fieldId('message')} name="message" rows={3} placeholder={t.messageHint} className={cn(inputClass('name'), 'border-charcoal/30 resize-y')} />
        </div>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={fieldId('consent')}
            name="consent"
            type="checkbox"
            className="mt-1 size-5 shrink-0 accent-terracotta"
            {...aria('consent')}
          />
          <label htmlFor={fieldId('consent')} className="text-sm leading-relaxed text-foreground/80">
            {t.consentBefore}{' '}
            <Link href={privacyHref} className="underline underline-offset-4">
              {t.consentLink}
            </Link>{' '}
            {t.consentAfter}
          </label>
        </div>
        {error('consent')}
      </div>

      <button type="submit" disabled={status === 'submitting'} className={actionStyles('primary', 'self-start')}>
        {status === 'submitting' ? t.submitting : t.submit}
      </button>
    </form>
  )
}
