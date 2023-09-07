import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { lingui } from '@lingui/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-swc-test',
  build: {
    target: 'esnext',
  },
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-transform-imports',
          {
            'test-react': {
              transform: 'react',
              preventFullImport: true,
              skipDefaultConversion: true,
            },
          },
        ],
        ['@lingui/swc-plugin', {}],
      ],
    }),
    lingui(),
  ],
})
