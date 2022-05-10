import { BottomTab, NestedHeader } from '@components/common';
import { Swiper } from 'antd-mobile';
import { FC } from 'react';
import styled from 'styled-components';
import ArtistCarrer from './ArtistCarrer';
import ArtistInfo from './ArtistInfo';

type ArtistProps = {
  id: number;
};

const Artist: FC<ArtistProps> = ({ id }) => {
  return (
    <Wrapper>
      <MainSection>
        <NestedHeader />
        <StyledSwiper
          trackOffset={30}
          stuckAtBoundary={false}
          indicator={() => null}
        >
          <Swiper.Item
            style={{
              paddingRight: '.9375rem',
              paddingBottom: '.9375rem',
            }}
          >
            <ArtistInfo
              name="Lily Son"
              nickname="nickname, personal quote"
              artworksNumber={107}
              followersNumber={1300}
              followingNumber={356}
              introduction="Artist introduction,whatever words he/she wants to include"
            />
          </Swiper.Item>
          <Swiper.Item
            style={{
              paddingRight: '.9375rem',
              paddingBottom: '.9375rem',
            }}
          >
            <ArtistCarrer carrer="Artist carrer formatting" />
          </Swiper.Item>
        </StyledSwiper>
      </MainSection>
      <BottomTab />
    </Wrapper>
  );
};

export default Artist;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-image: url(/img/artist_image.png);
  overflow-y: scroll;
`;

const StyledSwiper = styled(Swiper)`
  margin-top: 29.75rem;
`;
