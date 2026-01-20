import { defineConfig } from 'vite'

const emptyShim = '/src/shims/empty.js'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['fs','path','os','crypto','stream','util'],
    },
  },
  resolve: {
    alias: {
      fs: emptyShim,
      path: emptyShim,
      os: emptyShim,
      crypto: emptyShim,
      stream: emptyShim,
      util: emptyShim,
    },
  },
})