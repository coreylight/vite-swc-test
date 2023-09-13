import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { lingui } from '@lingui/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import istanbul from 'vite-plugin-istanbul'
import path from 'path'

function ViteTransformedListPlugin() {
  return {
    name: 'vite-transformed-list-plugin',
    // Hook into the transform step
    transform(code, id) {
      console.log('transform', id.replace(/(.*frontend\/)/, ''))
    },
  }
}

const toPath = (_path): string => path.join(process.cwd(), _path)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-swc-test',
  build: {
    outDir: '../dist',
    sourcemap: !process.env.NO_SOURCEMAPS,
    target: 'esnext',
  },
  root: 'src',
  publicDir: '../public',
  logLevel: 'info',
  resolve: {
    alias: {
      'react-mapbox-gl': 'react-mapbox-gl/lib',
      '@env': toPath('src/utils/env/vite'),
    },
  },
  plugins: [
    ViteTransformedListPlugin(),
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
    vanillaExtractPlugin() as any,
    istanbul(),
  ],
  define: {
    'process.env': {
      EMOTION_ENABLE_LABELS: JSON.parse(
        process.env.EMOTION_ENABLE_LABELS || 'false'
      ),
      EMOTION_WARN_UNSAFE_SELECTOR: JSON.parse(
        process.env.EMOTION_WARN_UNSAFE_SELECTOR || 'false'
      ),
      NODE_ENV:
        typeof process.env.NODE_ENV === 'string'
          ? process.env.NODE_ENV
          : 'production',
    },
  },
})
