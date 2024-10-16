import { MantineProvider } from '@mantine/core'

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
