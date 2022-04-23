import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button } from './index';
import { Space } from 'antd-mobile';
import styled from 'styled-components';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const Background = styled(Space)`
  padding: 20px;
  transition: all 0.2s ease;
  background: ${(props) => props.theme.colors.cardsBg};
`;

export const Variant = () => (
  <Background direction="vertical">
    <Space wrap>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="none">None</Button>
    </Space>

    <Space wrap align="center">
      <Button size="mini">Mini</Button>
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </Space>
  </Background>
);

export const Custom = () => {
  const label = text('label', 'Submit');
  const variant = select('variant', ['solid', 'outline', 'none'], 'solid');
  const size = select('size', ['mini', 'small', 'middle', 'large'], 'middle');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);

  return (
    <Button variant={variant} size={size} disabled={disabled} loading={loading}>
      {label}
    </Button>
  );
};
