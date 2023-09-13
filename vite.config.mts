import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { lingui } from '@lingui/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-swc-test',
  build: {
    outDir: '../dist',
    target: 'esnext',
  },
  root: 'src',
  publicDir: '../public',
  logLevel: 'info',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [
        // [
        //   '@swc/plugin-transform-imports',
        //   {
        //     'react': {
        //       transform: 'react',
        //       preventFullImport: true,
        //       skipDefaultConversion: true,
        //     },
        //   },
        // ],
        ['@lingui/swc-plugin', {}],
      ],
    }),
    lingui(),
    tsconfigPaths(),
  ],
})
