# @aqzhyi/astro-react-mantine

> While it may somewhat contradict Astro's original purpose, you remain committed to utilizing mantine.dev within Astro.

The primary reason why Astro cannot be used in conjunction with mantine.dev is that Astro does not share the React Context, which results in the MantineProvider being unusable and consequently causes the page to crash.

for example:

When your Astro components are arranged in such a manner,

```astro
<BasicLayout>
  <MantineProvider
    defaultColorScheme='dark'
    client:only='react'
  >
    <Content client:load />
  </MantineProvider>
</BasicLayout>
```

You will receive an error message:

ERROR: `@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app`

---

## Current Solution

Utilize a specific React component as the root component to provide the shared capabilities of ReactContext, and render it as the sole root component island in Astro with `client:load`.

> Pseudocode

```tsx
//
// Create a React component that integrates MantineProvider as the root component for an Astro island component
export const createAstroComponent = (config: { component: React.ComponentType<React.PropsWithChildren> }) => {
  function MantineContextContainer() {
    return (
      <MantineProvider defaultColorScheme='dark'>
        <config.component />
      </MantineProvider>
    )
  }

  return MantineContextContainer
}

//
// Create your Mantine interactive component layout and export it for Astro.
export const DemoContainer = createAstroComponent((props: React.PropsWithChildren) => {
  return (props: React.PropsWithChildren) => {
    const [title, setTitle] = useState('')
    const [items, setItems] = useState<string[]>(['111', '222', '333', '444', '555', '666'])

    return (
      <SimpleGrid>
        <TextInput
          value={title}
          onChange={(current) => {
            setTitle(current.target.value)
          }}
          label='Add a task to the to-do list'
        />
        <Button
          color='orange'
          onClick={() => {
            setItems((prev) => ([...prev, title]))
            setTitle(() => '')
          }}
        >
          Add
        </Button>
      </SimpleGrid>
    )
  })
}
```

---

Additionally, please remember to provide `<ColorSchemeScript>` and `mantine.css` at the Astro Layout level. (when version >= 7)

> ./pages/Layout.astro

```diff
---
+ import { MantineHead } from '@aqzhyi/astro-react-mantine'
---

<!doctype html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>DEMO</title>

+   <MantineHead />
  </head>
  <body id='__body'>
    <slot />
  </body>
</html>
```

---

and it's works

> ./pages/index.astro

```astro
---
import BasicLayout from './_layout/BasicLayout.astro'
import { MantineContext } from './_react/MantineContext'
import { Content } from './index.Content'
---

<BasicLayout>
  <Content client:load />
</BasicLayout>
```

---
