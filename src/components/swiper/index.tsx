import { SwiperProps } from 'antd-mobile/es/components/swiper';
import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

const StyledSwiper = styled()``;

export const Swiper: React.FC<SwiperProps> = ({ ...rest }) => {
  return <StyledSwiper {...rest} data-testid="swiper" />;
};
