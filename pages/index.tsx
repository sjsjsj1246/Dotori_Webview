import { TabBar } from '@components/tabBar';
import { Button } from '@components/button';
import React from 'react';
import { BottomTab } from '@components/bottomTab';
import { Swiper } from '@components/swiper';
import { Toast } from 'antd-mobile';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      style={{ height: '900%', background: color }}
      onClick={() => {
        Toast.show(`${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <div>헤더</div>
      <div style={{ flex: 1 }}>
        <Swiper style={{ height: '100%' }}>{items}</Swiper>
      </div>
      <BottomTab />
    </div>
  );
};

export default Home;
