/* eslint-disable no-restricted-globals */
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
// import { messages } from './locales/en';
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { StrictMode } from 'react'

async function loadCatalog(rawLocale: string): Promise<void> {
  let locale = rawLocale.replace(/-.*/, '')
  if (locale === 'confirm') {
    locale = 'cs'
  }
  // REVERT
  locale = 'sp'
  const res = await import(`./locales/${locale}.po`)
  const { messages } = res
  i18n.loadAndActivate({ locale, messages })
}

// This is to make fragment rendering work...jsxFactory issues with tsconfig
// ts-ignore
window.React = {
  Fragment,
}

const rootEl = document.getElementById('root')

;(async (): Promise<void> => {
  // const LDProvider = await initLD();
  await loadCatalog('sp')
  ReactDOM.render(
    <StrictMode>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </StrictMode>,
    rootEl
  )
})()
