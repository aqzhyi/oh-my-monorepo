import { Button, Notification, SimpleGrid, TextInput } from '@mantine/core'
import { useState } from 'react'
import { createAstroComponent } from '~/libs/utils'
import css from './index.Content.module.css'

export const Content = createAstroComponent({
  component: () => {
    const [title, setTitle] = useState('')
    const [items, setItems] = useState<string[]>(['111', '222', '333', '444', '555', '666'])

    return (
      <SimpleGrid
        className={css.root || ''}
        cols={1}
      >
        <TextInput
          value={title}
          onChange={(current) => {
            setTitle(current.target.value)
          }}
          label='Add Some String To List'
        />
        <Button
          color='orange'
          onClick={() => {
            setItems((prev) => {
              return [...prev, title]
            })

            setTitle(() => '')
          }}
        >
          Add
        </Button>
        <hr />
        {items.map((item, index) => (
          <Notification
            key={String(index + 1)}
            color={index % 2 === 0 ? 'pink' : 'green'}
            onClose={() => {
              setItems((prev) => {
                return prev.toSpliced(index, 1)
              })
            }}
          >
            {item}
          </Notification>
        ))}
      </SimpleGrid>
    )
  },
})
