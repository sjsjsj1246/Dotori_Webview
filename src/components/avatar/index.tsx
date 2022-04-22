import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Avatar as AntdAvatar } from 'antd-mobile';
import { AvatarProps } from 'antd-mobile/es/components/avatar';

const StyledAvatar = styled(AntdAvatar)`
  ${color}
  border-color: ${(props) => props.theme.colors.toggleBorder};
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.cardsBg};
`;

export const Avatar: React.FC<AvatarProps & ColorProps> = ({ ...rest }) => {
  return <StyledAvatar {...rest} data-testid="btn" />;
};
