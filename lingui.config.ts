/* eslint-disable import/no-default-export */
import type { LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  locales: ['en', 'sp'],
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}',
      include: ['src'],
      exclude: ['**/node_modules/**', 'src/generated'],
    },
  ],
  fallbackLocales: {
    default: 'en',
  },
}

// ts-unused-exports:disable-next-line
export default config
