import hrContent from '@/content/editor/home.hr.json'
import enContent from '@/content/editor/home.en.json'
import type { Locale } from '@/lib/i18n'

type EditorContent = { html: string; css: string; version: number; locale: Locale }

export function EditorPage({ locale }: { locale: Locale }) {
  const content = (locale === 'hr' ? hrContent : enContent) as EditorContent
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: content.css }} />
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </>
  )
}
