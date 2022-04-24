import { SwiperProps, SwiperRef } from 'antd-mobile/es/components/swiper';
import React from 'react';
import styled from 'styled-components';
import { Swiper as AntdSwiper } from 'antd-mobile';
import { layout } from 'styled-system';

const StyledSwiper = styled(AntdSwiper)`
  ${layout}
`;

export const Swiper: React.FC<SwiperProps> & {
  Item: any;
  ref: React.MutableRefObject<SwiperRef>;
} = ({ ...rest }) => {
  return <StyledSwiper {...rest} data-testid="swiper" />;
};

Swiper.Item = AntdSwiper.Item;
