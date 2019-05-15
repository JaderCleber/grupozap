import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '.'

storiesOf('Label', module)
  .add('default', () => (
    <Label>Default Label</Label>
  ))
