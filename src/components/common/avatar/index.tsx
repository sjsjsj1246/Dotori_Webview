import React from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';
import { Avatar as AntdAvatar } from 'antd-mobile';
import { AvatarProps } from 'antd-mobile/es/components/avatar';

const StyledAvatar = styled(AntdAvatar)`
  ${layout}
`;

export const Avatar: React.FC<AvatarProps & LayoutProps> = ({ ...rest }) => {
  return <StyledAvatar {...rest} data-testid="avatar" />;
};
