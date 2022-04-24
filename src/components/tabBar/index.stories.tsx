import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { TabBar } from './';
import { Badge, Space } from 'antd-mobile';

export default {
  title: 'TabBar',
  component: TabBar,
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
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} />
          ))}
        </TabBar>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} title={item.title} />
          ))}
        </TabBar>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <TabBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </Space>

      <Space style={{ backgroundColor: '#FFFFFF' }}>
        <TabBar safeArea>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </Space>
    </Space>
  );
};
