import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

async function loadCatalog(rawLocale: string): Promise<void> {
  const res = await import(`./locales/en.po`)
  const { messages } = res
  i18n.loadAndActivate({ locale: 'en', messages })
}

await loadCatalog('en')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>
)
