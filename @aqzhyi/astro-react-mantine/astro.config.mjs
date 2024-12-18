import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  srcDir: './demo',
  server: {
    port: 2330,
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
})
