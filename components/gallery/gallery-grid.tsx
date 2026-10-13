'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { UiStrings } from '@/content/ui'
import { format } from '@/lib/i18n'

export interface GalleryGridItem {
  id: string
  src: string
  width: number
  height: number
  alt: string
  caption: string
}

export function GalleryGrid({ items, labels }: { items: GalleryGridItem[]; labels: UiStrings['gallery'] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }

  const close = useCallback(() => dialogRef.current?.close(), [])

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      setIndex((current) => {
        if (current !== null) triggerRefs.current[current]?.focus()
        return null
      })
    }
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  const onKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  const current = index === null ? null : items[index]

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((item, i) => (
          <li key={item.id} className="break-inside-avoid">
            <figure>
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el
                }}
                type="button"
                onClick={() => open(i)}
                aria-label={format(labels.open, { caption: item.caption })}
                className="group relative block w-full overflow-hidden bg-charcoal/10"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="mt-3 flex items-baseline gap-3 text-sm text-muted-foreground">
                <span className="text-xs tracking-[0.2em] text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                {item.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={labels.dialogLabel}
        onKeyDown={onKeyDown}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-charcoal/95 p-0 text-ivory backdrop:bg-charcoal/80"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-3 md:px-8">
              <p className="text-sm tabular-nums text-ivory/70" aria-live="polite">
                {format(labels.counter, { current: (index ?? 0) + 1, total: items.length })}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex size-11 items-center justify-center transition-colors hover:bg-ivory/10"
              >
                <X className="size-5" aria-hidden="true" />
                <span className="sr-only">{labels.close}</span>
              </button>
            </div>
            <figure className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-4 pb-6 md:px-20">
              <div className="relative h-full w-full">
                <Image key={current.id} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              </div>
              <figcaption className="text-center text-sm text-ivory/80">{current.caption}</figcaption>
            </figure>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-charcoal/60 transition-colors hover:bg-ivory/10 md:left-6"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
              <span className="sr-only">{labels.prev}</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-charcoal/60 transition-colors hover:bg-ivory/10 md:right-6"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
              <span className="sr-only">{labels.next}</span>
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
