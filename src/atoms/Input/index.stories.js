import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('with value', () => (
    <Input value={'Search for ...'} />
  ))
  .add('disabled', () => (
    <Input disabled />
  ))
  .add('type checkbox', () => (
    <Input type="checkbox" />
  ))
  .add('type radio', () => (
    <Input type="radio" />
  ))