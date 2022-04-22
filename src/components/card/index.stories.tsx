import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Card } from './index';
import { Space, Toast } from 'antd-mobile';
import { Button } from '../button';
import { AntOutline, RightOutline } from 'antd-mobile-icons';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const Variant = () => {
  const onClick = () => {
    Toast.show('hi');
  };

  const onHeaderClick = () => {
    Toast.show('header');
  };

  const onBodyClick = () => {
    Toast.show('body');
  };

  return (
    <Space direction="vertical">
      <div style={{ width: '500px', padding: '10px', backgroundColor: 'gray' }}>
        <Card title="헤더" onClick={onClick}>
          바디
        </Card>
      </div>

      <div style={{ width: '500px', padding: '10px', backgroundColor: 'gray' }}>
        <Card title="헤더" onClick={onClick} />
      </div>

      <div style={{ width: '500px', padding: '10px', backgroundColor: 'gray' }}>
        <Card onClick={onClick}>바디</Card>
      </div>

      <div style={{ width: '500px', padding: '10px', backgroundColor: 'gray' }}>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              헤더
            </div>
          }
          extra={<RightOutline />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '16px' }}
        >
          <div>바디</div>
          <div onClick={(e) => e.stopPropagation()}>
            <Button color="primary" onClick={() => Toast.show('클릭')}>
              버튼
            </Button>
          </div>
        </Card>
      </div>

      <div style={{ width: '500px', padding: '10px', backgroundColor: 'gray' }}>
        <Card
          headerStyle={{
            color: '#1677ff',
          }}
          bod
          title="헤더"
        >
          바디
        </Card>
      </div>
    </Space>
  );
};

export const Custom = () => {
  const title = text('title', 'title');
  const content = text('content', 'Submit');

  return <Card title={title}>{content}</Card>;
};
