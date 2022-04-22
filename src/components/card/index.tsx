import { CardProps } from 'antd-mobile/es/components/card';
import { Card as AntdCard } from 'antd-mobile';
import styled from 'styled-components';
import React from 'react';
import { color } from 'styled-system';

const StyledCard = styled(AntdCard)`
  ${color}
  border-color: ${(props) => props.theme.colors.toggleBorder};
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.cardsBg};
`;

export const Card: React.FC<CardProps & typeof StyledCard> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <StyledCard title={title} {...rest}>
      {children}
    </StyledCard>
  );
};
