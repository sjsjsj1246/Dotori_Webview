import React from 'react';
import styled from 'styled-components';
import { color, variant } from 'styled-system';
import { Button as AntdButton } from 'antd-mobile';
import { ButtonProps as AntdButtonProps } from 'antd-mobile/es/components/button';

const StyledButton = styled(AntdButton)`
  ${color}
  color: ${(props) => props.theme.colors.buttonText};
  border-color: ${(props) => props.theme.colors.toggleBorder};
  background-color: ${(props) => props.theme.colors.toggleBorder};
  transition: all 0.2s ease;
  ${(props) =>
    variant({
      variants: {
        solid: {
          borderColor: props.theme.colors.toggleBorder,
          background: props.theme.colors.toggleBorder,
          color: props.theme.colors.buttonText,
        },
        outline: {
          borderColor: props.theme.colors.toggleBorder,
          background: 'none',
          color: props.theme.colors.toggleBorder,
        },
        none: {
          border: 'none',
          background: 'none',
          color: props.theme.colors.toggleBorder,
        },
      },
    })}
`;

type ButtonProps = AntdButtonProps &
  ColorProps & {
    variant?: 'solid' | 'outline' | 'none';
  };

export const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <StyledButton {...rest} data-testid="button" />;
};
