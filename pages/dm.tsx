import React from 'react';
import { Header } from '@components/common/header';
import { BottomTab } from '@components/common';

const DMScreen: React.FC = () => {
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
      <div style={{ flex: 1 }}>DM</div>
      <BottomTab />
    </div>
  );
};

export default DMScreen;
