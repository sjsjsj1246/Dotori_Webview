import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Button as AntdButton } from 'antd-mobile';
import { ButtonProps } from 'antd-mobile/es/components/button';

const StyledButton = styled(AntdButton)`
  ${color}
  border-color: ${(props) => props.theme.colors.toggleBorder};
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.cardsBg};
`;

export const Button: React.FC<ButtonProps & typeof StyledButton> = ({
  ...rest
}) => {
  return <StyledButton {...rest} data-testid="btn" />;
};
