import { Paper } from '@mantine/core'

export const Card = (props: React.PropsWithChildren) => {
  return <Paper>{props.children}</Paper>
}
