import { SwiperProps, SwiperRef } from 'antd-mobile/es/components/swiper';
import React from 'react';
import styled from 'styled-components';
import { Swiper as AntdSwiper } from 'antd-mobile';
import { layout } from 'styled-system';

const StyledSwiper = styled(AntdSwiper)`
  ${layout}
`;

export const Swiper: React.FC<
  SwiperProps & {
    forwardRef?: React.MutableRefObject<SwiperRef>;
  }
> & {
  Item: any;
} = ({ forwardRef, ...rest }) => {
  return <StyledSwiper {...rest} ref={forwardRef} data-testid="swiper" />;
};

Swiper.Item = AntdSwiper.Item;
