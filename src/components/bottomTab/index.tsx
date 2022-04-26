import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { TabBar } from '..';
import {
  HomeFilled,
  HomeOutlined,
  InboxOutlined,
  PictureFilled,
  PictureOutlined,
  PlusCircleFilled,
  ShoppingFilled,
  ShoppingOutlined,
} from '@ant-design/icons';
import { TabBarItemProps } from 'antd-mobile/es/components/tab-bar';
import { useRouter } from 'next/router';

const tabs = [
  {
    key: '/',
    icon: (active: boolean) => (active ? <HomeFilled /> : <HomeOutlined />),
  },
  {
    key: '/search',
    icon: (active: boolean) =>
      active ? <PictureFilled /> : <PictureOutlined />,
  },
  {
    key: 'plus',
    icon: <PlusCircleFilled />,
  },
  {
    key: '/shop',
    icon: (active: boolean) =>
      active ? <ShoppingFilled /> : <ShoppingOutlined />,
  },
  {
    key: '/dm',
    icon: <InboxOutlined />,
  },
];

export const BottomTab: React.FC = () => {
  const router = useRouter();

  return (
    <TabBar
      activeKey={router.pathname}
      data-testid="bottomTab"
      onChange={(path) => router.push(path)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} />
      ))}
    </TabBar>
  );
};
