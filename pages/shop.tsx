import { TabBar } from '@components/tabBar';
import { Button } from '@components/button';
import React from 'react';
import { BottomTab } from '@components/bottomTab';
import { Header } from '@components/header';

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
      <Header>헤더</Header>
      <div style={{ flex: 1 }}>Shop</div>
      <BottomTab />
    </div>
  );
};

export default Home;
