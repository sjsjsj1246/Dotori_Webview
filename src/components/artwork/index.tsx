import { BottomTab, NestedHeader } from '@components/common';
import { FC } from 'react';
import styled from 'styled-components';
import {
  HeartOutlined,
  TagFilled,
  TagOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { HeartFill } from 'antd-mobile-icons';

type ArtworkProps = {
  id: number;
};

type Artwork = {
  title: string;
  artist: string;
  description: string;
  content: string;
  like: number;
  price: number;
  size: string;
  bookmark: number;
  comment: number;
  isLiked: boolean;
  isBookmarked: boolean;
};

const artwork: Artwork = {
  title: 'Artist Title',
  artist: 'by Artist name',
  description: '',
  content:
    'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiq ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquiq ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquiq ex ea commodo consequat.',
  like: 2700,
  price: 1000000,
  size: 'oil on canvas | 00.0 x 00.0 (cm)',
  bookmark: 4800,
  comment: 1200,
  isLiked: false,
  isBookmarked: false,
};

const Artwork: FC<ArtworkProps> = ({ id }) => {
  return (
    <Wrapper>
      <NestedHeader />
      <MainSection>
        <ArtworkBox>
          <ArtworkBoxImage src="/img/artwork.png" />
        </ArtworkBox>
        <InfoBox>
          <InfoLeft>
            <Title>{artwork.title}</Title>
            <Artist>{artwork.artist}</Artist>
            <ButtonList>
              <ButtonListItem>
                {artwork.isLiked ? (
                  <HeartFill style={{ color: 'red' }} />
                ) : (
                  <HeartOutlined />
                )}
                <p className="label">{artwork.like}</p>
              </ButtonListItem>
              <ButtonListItem>
                {artwork.isBookmarked ? <TagFilled /> : <TagOutlined />}
                <p className="label">{artwork.bookmark}</p>
              </ButtonListItem>
              <ButtonListItem>
                <MessageOutlined />
                <p className="label">{artwork.comment}</p>
              </ButtonListItem>
            </ButtonList>
          </InfoLeft>
          <InfoRight>
            <Price>{artwork.price}</Price>
            <Size>{artwork.size}</Size>
          </InfoRight>
        </InfoBox>
        <Descripiton>{artwork.content}</Descripiton>
      </MainSection>
      <BottomTab />
    </Wrapper>
  );
};

export default Artwork;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  flex: 1;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(191, 181, 175, 1) 100%
  );
  overflow-y: scroll;
`;

const ArtworkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const ArtworkBoxImage = styled.img`
  width: 9.75rem;
  height: 13.4375rem;
  box-shadow: inset 1px 0px 0.5px rgba(250, 250, 250, 0.25);
  filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.25));
`;

const InfoBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;

const InfoLeft = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Artist = styled.h2`
  font-size: 1rem;
`;

const ButtonList = styled.div`
  margin-top: 0.25rem;
  display: flex;
`;

const ButtonListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 0.625rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  p {
    margin-top: 0.375rem;
    text-align: center;
    font-size: 0.5rem;
  }
`;

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`;

const Price = styled.p`
  font-size: 1rem;
`;

const Size = styled.p`
  margin-top: 1.125rem;
  margin-bottom: 0.875rem;
  font-size: 0.75rem;
`;

const Descripiton = styled.p`
  margin-top: 2rem;
`;
