import React, { FC, useRef, useState } from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { List, Space, Toast, Popup } from 'antd-mobile';
import { Button } from '..';
import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { Swiper } from '.';

export default {
  title: 'Swiper',
  component: Swiper,
  decorators: [withKnobs],
};

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      style={{
        height: '120px',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        userSelect: 'none',
        background: color,
      }}
      onClick={() => {
        Toast.show(`${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

const verticalItems = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      style={{
        height: '100%',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        userSelect: 'none',
        background: color,
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

export const Variant = () => {
  const ref = useRef<SwiperRef>(null);

  return (
    <>
      <Space direction="vertical" block>
        <Swiper
          style={{
            '--border-radius': '8px',
          }}
          defaultIndex={3}
        >
          {items}
        </Swiper>
      </Space>

      <Space direction="vertical" block>
        <p>with button</p>
        <Swiper allowTouchMove={false} forwardRef={ref} loop>
          {items}
        </Swiper>
        <Space>
          <Button
            onClick={() => {
              ref.current?.swipePrev();
            }}
          >
            {'<'}
          </Button>
          <Button
            onClick={() => {
              ref.current?.swipeNext();
            }}
          >
            {'>'}
          </Button>
        </Space>

        <Space direction="vertical" block>
          <p>Slides which are not full-width</p>
          <Swiper slideSize={70} trackOffset={15} loop stuckAtBoundary={false}>
            {items}
          </Swiper>
        </Space>

        <Space direction="vertical" block>
          <p>No indicators</p>
          <Swiper indicator={() => null}>{items}</Swiper>
        </Space>

        <Space direction="vertical" block>
          <p>Vertical</p>
          <Swiper direction="vertical" style={{ '--height': '200px' }}>
            {verticalItems}
          </Swiper>
        </Space>
      </Space>
    </>
  );
};

const WithPopup: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        팝업
      </Button>
      <Popup position="bottom" visible={visible} destroyOnClose>
        <Swiper loop={false}>
          <Swiper.Item>
            <div
              style={{
                height: '100vh',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '48px',
                userSelect: 'none',
                background: '#ace0ff',
              }}
            >
              1
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div
              style={{
                height: '100vh',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '48px',
                userSelect: 'none',
                background: '#bcffbd',
              }}
            >
              1
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div
              style={{
                height: '100vh',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '48px',
                userSelect: 'none',
                background: '#ffffff',
              }}
            >
              <Button
                onClick={() => {
                  setVisible(false);
                }}
              >
                닫기
              </Button>
            </div>
          </Swiper.Item>
        </Swiper>
      </Popup>
    </>
  );
};

export const FullPage = () => {
  return (
    <Space direction="vertical" block>
      <WithPopup />
    </Space>
  );
};
