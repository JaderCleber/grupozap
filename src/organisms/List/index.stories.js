import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '.'

const cards = [{
  album: 'Album 1',
  artist: 'Artist 1',
  image: 'image.png'
},
{
  album: 'Album 2',
  artist: 'Artist 2',
  image: 'image2.png'
}]

storiesOf('List', module)
  .add('default', () => (
    <List cards={cards} />
  ))
  .add('no cards', () => (
    <List cards={[]} />
  ))