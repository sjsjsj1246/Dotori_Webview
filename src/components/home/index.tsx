import { FC } from 'react';
import { BottomTab } from '@components/common/bottomTab';
import { Swiper } from '@components/common/swiper';
import { Header } from '@components/common/header';
import GalleryItem from './GalleryItem';

const galleryItems = [
  {
    id: 1,
    image:
      'https://img6.yna.co.kr/etc/inner/KR/2019/06/25/AKR20190625091000051_07_i_P4.jpg',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80',
  },
  {
    id: 3,
    image: 'https://t1.daumcdn.net/cfile/tistory/992654335D260E6D0B',
  },
];

const Home: FC = () => {
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
          backgroundColor: '#FAFAFA',
        }}
      >
        <Swiper
          style={{
            width: '95%',
            height: '95%',
            borderRadius: '15px',
            filter: 'drop-shadow(3px 4px 10px rgba(0, 0, 0, 0.25))',
          }}
          indicator={() => null}
        >
          {galleryItems.map((item) => (
            <Swiper.Item key={item.id}>
              <GalleryItem image={item.image} />
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <BottomTab />
    </div>
  );
};

export default Home;
