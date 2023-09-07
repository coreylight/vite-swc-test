import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-swc-test',
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
      ],
    }),
  ],
})
