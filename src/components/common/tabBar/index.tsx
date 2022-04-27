import React from 'react';
import { TabBar as AntdTabBar } from 'antd-mobile';
import {
  TabBarItemProps,
  TabBarProps,
} from 'antd-mobile/es/components/tab-bar';
import styled from 'styled-components';

const StyledTabBar = styled(AntdTabBar)`
  .adm-tab-bar-item-active {
    color: black;
  }
  .adm-badge-wrap {
    position: fixed;
  }
`;

export const TabBar: React.FC<TabBarProps> & {
  Item: React.FC<TabBarItemProps>;
} = ({ ...rest }) => {
  return <StyledTabBar {...rest} data-testid="tabBar" />;
};

TabBar.Item = AntdTabBar.Item;
