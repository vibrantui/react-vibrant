import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import * as colors from '../../react-vibrant/lib/colors';

import Button from '../lib/elements/Button';
import Label from '../lib/elements/Label';

storiesOf('Button', module)
  .add('Normal', () => (
    <Button>Default Button</Button>
  ));

storiesOf('Label', module)
  .add('Normal', () => (
    <Label>Label</Label>
  ))
  .add('With Button', () => (
    <div>
      <Label>Label</Label>
      <Button>Button</Button>
    </div>
  ));
