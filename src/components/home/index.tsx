import { FC, useState } from 'react';
import { BottomTab } from '@components/common/bottomTab';
import { Swiper } from '@components/common/swiper';
import { Header } from '@components/common/header';
import GalleryItem from './GalleryItem';
import styled from 'styled-components';

const Home: FC = () => {
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      image:
        'https://img6.yna.co.kr/etc/inner/KR/2019/06/25/AKR20190625091000051_07_i_P4.jpg',
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80',
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 3,
      image: 'https://t1.daumcdn.net/cfile/tistory/992654335D260E6D0B',
      isLiked: false,
      isBookmarked: false,
    },
  ]);

  const onToggleLike = (id: number) => {
    setGalleryItems(
      galleryItems.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item,
      ),
    );
  };

  const onToggleBookmark = (id: number) => {
    setGalleryItems(
      galleryItems.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item,
      ),
    );
  };

  return (
    <Wrapper>
      <Header />
      <MainSection>
        <StyledSwiper
          indicator={() => null}
          trackOffset={5}
          stuckAtBoundary={false}
          loop
        >
          {galleryItems.map((item) => (
            <Swiper.Item key={item.id}>
              <GalleryItem
                id={item.id}
                image={item.image}
                isLiked={item.isLiked}
                isBookmarked={item.isBookmarked}
                onToggleLike={onToggleLike}
                onToggleBookmark={onToggleBookmark}
              />
            </Swiper.Item>
          ))}
        </StyledSwiper>
      </MainSection>
      <BottomTab />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
