import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button } from './index';
import { Space } from 'antd-mobile';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Variant = () => (
  <Space direction="vertical">
    <Button block color="primary" size="large">
      Block Button
    </Button>

    <Space wrap>
      <Button color="primary" fill="solid">
        Solid
      </Button>
      <Button color="primary" fill="outline">
        Outline
      </Button>
      <Button color="primary" fill="none">
        None
      </Button>
    </Space>

    <Space wrap align="center">
      <Button size="mini" color="primary">
        Mini
      </Button>
      <Button size="small" color="primary">
        Small
      </Button>
      <Button size="middle" color="primary">
        Middle
      </Button>
      <Button size="large" color="primary">
        Large
      </Button>
    </Space>
  </Space>
);

export const Custom = () => {
  const label = text('label', 'Submit');
  const fill = select('fill', ['solid', 'outline', 'none'], 'solid');
  const size = select('size', ['mini', 'small', 'middle', 'large'], 'middle');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);

  return (
    <Button fill={fill} size={size} disabled={disabled} loading={loading}>
      {label}
    </Button>
  );
};
