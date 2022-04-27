import React from 'react';
import { BottomTab } from '@components/common/bottomTab';
import { Header } from '@components/common/header';

const ShopScreen: React.FC = () => {
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

export default ShopScreen;
