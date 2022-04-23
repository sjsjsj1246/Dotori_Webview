import { TabBar } from 'antd-mobile';
import {
  TabBarItemProps,
  TabBarProps,
} from 'antd-mobile/es/components/tab-bar';
import { TabBarItem } from 'antd-mobile/es/components/tab-bar/tab-bar';
import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

const StyledBottomTab = styled(TabBar)``;

const StyledBottomTabItem = styled(TabBarItem)``;

export const BottomTab: React.FC<TabBarProps> & {
  Item: React.FC<TabBarItemProps>;
} = ({ ...rest }) => {
  return <StyledBottomTab {...rest} data-testid="bottom-tab" />;
};

BottomTab.Item = StyledBottomTabItem;
