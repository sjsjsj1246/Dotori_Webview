import { Button } from '@components/button';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Button>버튼</Button>
    </div>
  );
};

export default Home;
