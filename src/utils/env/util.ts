export type ModeType = 'development' | 'production' | 'test'

export interface ImportMetaEnv {
  BASE_URL?: string
  CI?: string
  NODE_ENV: 'development' | 'test' | 'production'
  ORIGIN?: string
  VITE_CI?: string
  VITE_AlCHEMY_DATA_ENDPOINT: string
  VITE_AUTH_CLIENT_ID: string
  VITE_AUTH_KEYCLOAK_CLIENTID: string
  VITE_AUTH_KEYCLOAK_REALM: string
  VITE_AUTH_KEYCLOAK_SERVER: string
  VITE_AUTH_LOGOUT_REDIRECT_URI: string
  VITE_BUILD_BRANCH?: string
  VITE_BUILD_VERSION?: string
  VITE_BUILD_SHA?: string
  VITE_BUILD_PR_NUM?: string
  VITE_CAEN_LOCKING_ENDPOINT: string
  VITE_COVERAGE?: string
  VITE_DATA_DICTIONARY_URL: string
  VITE_DEBUG_FS_MASK: string
  VITE_DISABLE_WALKME?: string
  VITE_EMAIL_TENDERING_ENDPOINT: string
  VITE_EMULATE_DOMAIN: string
  VITE_FLAT_FILE_API_END_POINT: string
  VITE_FLAT_FILE_LICENSE_KEY: string
  VITE_GRAPHQL_URL: string
  VITE_LTL_PRICING_MATRIX_ENDPOINT: string
  VITE_MAPBOX_JWT?: string
  VITE_MASTERBID_ENDPOINT: string
  VITE_MINION_API_URL: string
  VITE_MOCK_GEONAMES?: string
  VITE_POLL_INTERVAL_MS?: string
  VITE_REGIONS_DATA_ENDPOINT: string
  VITE_REST_URL: string
  VITE_SUBSCRIPTION_ENDPOINT: string
  VITE_UPLOADS_URL: string
  VITE_USE_DEBUG_HELPER?: string
  VITE_USE_LD?: string
  VITE_USE_SENTRY: string
}
