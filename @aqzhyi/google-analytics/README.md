# @aqzhyi/google-analytics

> Google Analytics (GA4) library

## Install

```
pnpm i @aqzhyi/google-analytics
```

## Usage (Astro)

### `<GoogleAnalytics />`

> Insert the Google Tag Manager (GTM) script into the HTML using the Google Analytics ID you have configured (e.g., `'G-G90JYXXXXX'`).

1. `pages/_layout/BasicLayout.astro`

   ```astro
   ---
   import { GoogleAnalytics } from '@aqzhyi/google-analytics'
   ---

   <!doctype html>
   <html>
     <head>
       <GoogleAnalytics id='G-G90JYXXXXX' />
     </head>
     <body>
       <slot />
     </body>
   </html>
   ```

1. `pages/index.astro`

   ```
   ---
   import BasicLayout from "./_layout/BasicLayout.astro"
   ---

   <BasicLayout>
     Page 1
   </BasicLayout>
   ```

> Preview

![](https://raw.githubusercontent.com/Aqzhyi/mono/refs/heads/main/%40aqzhyi/google-analytics/public/works.png)

### `<GoogleAnalytics debug />`

```astro
<GoogleAnalytics
  id=''
  debug={true}
/>
```

> Preview

![](https://raw.githubusercontent.com/Aqzhyi/mono/refs/heads/main/%40aqzhyi/google-analytics/public/debug-if-no-input.png)
