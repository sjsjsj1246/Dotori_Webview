import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { TabBar } from 'antd-mobile';
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
    key: '',
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

const StyledTabBar = styled(TabBar)`
  .adm-tab-bar-item-active {
    color: #353535;
  }
  .adm-tab-bar-item:nth-child(3) {
    .adm-badge-wrap {
      position: fixed;
      bottom: 35px;
    }

    svg {
      width: 50px;
      height: 50px;
      color: #353535;
    }
  }

  svg {
    position: relative;
    top: -5px;
    width: 25px;
    height: 25px;
  }
`;

export const BottomTab: React.FC = () => {
  const router = useRouter();

  return (
    <StyledTabBar
      activeKey={router.pathname}
      data-testid="bottomTab"
      onChange={(path) => router.push(path)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} />
      ))}
    </StyledTabBar>
  );
};
