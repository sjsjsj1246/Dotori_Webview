import React from 'react';
import { BottomTab } from '@components/bottomTab';
import { Swiper } from '@components/swiper';
import { Header } from '@components/header';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: color,
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
      <Header />
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Swiper
          style={{
            width: '90%',
            height: '90%',
            borderRadius: '10px',
            boxShadow: '1px 1px 10px #c5c5c5',
          }}
          indicator={() => null}
        >
          {items}
        </Swiper>
      </div>
      <BottomTab />
    </div>
  );
};

export default Home;
