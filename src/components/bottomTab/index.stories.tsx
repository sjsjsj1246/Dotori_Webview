import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { BottomTab } from './index';
import { Badge, Space } from 'antd-mobile';

export default {
  title: 'BottomTab',
  component: BottomTab,
  decorators: [withKnobs],
};

const tabs = [
  {
    key: 'home',
    title: 'home',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: 'todo',
    title: 'todo',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: 'message',
    title: 'message',
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: 'mypage',
    icon: <UserOutline />,
  },
];

export const Variant = () => {
  const [activeKey, setActiveKey] = useState('todo');

  return (
    <Space
      direction="vertical"
      style={{ padding: '10px', backgroundColor: '#efefef' }}
    >
      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <BottomTab>
          {tabs.map((item) => (
            <BottomTab.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </BottomTab>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <BottomTab>
          {tabs.map((item) => (
            <BottomTab.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </BottomTab>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <BottomTab>
          {tabs.map((item) => (
            <BottomTab.Item key={item.key} icon={item.icon} />
          ))}
        </BottomTab>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <BottomTab>
          {tabs.map((item) => (
            <BottomTab.Item key={item.key} title={item.title} />
          ))}
        </BottomTab>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <BottomTab activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map((item) => (
            <BottomTab.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </BottomTab>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <BottomTab safeArea>
          {tabs.map((item) => (
            <BottomTab.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </BottomTab>
      </Space>
    </Space>
  );
};
