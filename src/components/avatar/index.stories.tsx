import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Avatar } from './index';
import { List, Space } from 'antd-mobile';

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [withKnobs],
};

const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
];

export const Variant = () => (
  <>
    <Space block wrap style={{ margin: '10px' }}>
      <Avatar src={demoAvatarImages[0]} />
      <Avatar src={demoAvatarImages[1]} />
      <Avatar src={demoAvatarImages[2]} />
      <Avatar src={demoAvatarImages[3]} />
    </Space>
    <Space block direction="vertical" style={{ margin: '10px' }}>
      <Avatar src="" />
    </Space>
    <Space block wrap style={{ margin: '10px' }}>
      <Avatar src={demoAvatarImages[0]} style={{ '--size': '32px' }} />
      <Avatar src={demoAvatarImages[0]} style={{ '--size': '48px' }} />
      <Avatar src={demoAvatarImages[0]} style={{ '--size': '64px' }} />
    </Space>
    <List style={{ margin: '10px' }}>
      <List.Item
        prefix={<Avatar src={demoAvatarImages[0]} />}
        description="Deserunt dolor ea eaque eos"
      >
        Novalee Spicer
      </List.Item>
    </List>
  </>
);

export const Custom = () => {
  const fit = select(
    'fit',
    ['contain', 'cover', 'fill', 'none', 'scale-down'],
    'cover',
  );
  const src = text('src', 'https://source.unsplash.com/800x600/?man');

  return <Avatar fit={fit} src={src} />;
};
