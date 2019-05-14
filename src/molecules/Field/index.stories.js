import React from 'react'
import { storiesOf } from '@storybook/react'
import Field from '.'

storiesOf('Field', module)
  .add('default', () => (
    <Field name="field" />
  ))
  .add('with label', () => (
    <Field name="field" label="Label" />
  ))
  .add('invalid', () => (
    <Field name="field" label="Label" invalid />
  ))
  .add('invalid with error message', () => (
    <Field name="field" label="Label" error="Invalid" invalid />
  ))