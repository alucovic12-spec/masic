import { site } from '@/content/site'
import { LOCALE_COOKIE, LOCALE_STORAGE_KEY, defaultLocale, locales } from '@/lib/i18n'

/**
 * Works on any static host: picks the saved language, then the browser
 * language, then Croatian. Without JavaScript the meta refresh sends visitors to /hr.
 */
const script = `(function(){try{var l=${JSON.stringify(locales)},s=null;try{s=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)})}catch(e){}if(!s){var m=document.cookie.match(/(?:^|; )${LOCALE_COOKIE}=([^;]+)/);s=m&&m[1]}if(l.indexOf(s)<0){var n=(navigator.languages||[navigator.language||'']).map(function(x){return String(x).slice(0,2).toLowerCase()});s=n.indexOf('hr')>-1||n.indexOf('bs')>-1||n.indexOf('sr')>-1?'hr':n[0]==='en'?'en':${JSON.stringify(defaultLocale)}}location.replace('/'+s+location.search+location.hash)}catch(e){location.replace('/${defaultLocale}')}})()`

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`2;url=/${defaultLocale}`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 text-center">
        <p className="font-display text-3xl">{site.name}</p>
        <nav aria-label="Jezik / Language" className="flex gap-6 text-sm tracking-[0.2em]">
          <a href="/hr" hrefLang="hr" className="underline underline-offset-4">
            HRVATSKI
          </a>
          <a href="/en" hrefLang="en" className="underline underline-offset-4">
            ENGLISH
          </a>
        </nav>
      </main>
    </>
  )
}
