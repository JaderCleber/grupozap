import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '.'

storiesOf('Card', module)
  .add('default', () => (
    <Card album="Album test" artist="Artist test" image="../../../assets/no-image.png" />
  ))