import {
  HeartOutlined,
  MessageOutlined,
  TagFilled,
  TagOutlined,
} from '@ant-design/icons';
import { Avatar, Button } from '@components/common';
import { HeartFill } from 'antd-mobile-icons';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

type GalleryItemProps = {
  id: number;
  image: string;
  isLiked: boolean;
  isBookmarked: boolean;
  onToggleLike: (id: number) => void;
  onToggleBookmark: (id: number) => void;
};

const GalleryItem: FC<GalleryItemProps> = ({
  id,
  image,
  isLiked,
  isBookmarked,
  onToggleLike,
  onToggleBookmark,
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Background image={image}>
        <CardBottom>
          <Title>
            <TitleLeft>
              <p className="title">Artwork Title</p>
              <p className="name">by Artist Name</p>
            </TitleLeft>
            <TitleAvatar
              src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              onClick={() => router.push('/artist/1')}
            />
          </Title>
          <Description>“a brief introduction about the artwork”</Description>
          <Info>
            <p>oil on canvas</p>
            <p>00.0 x 00.0(cm)</p>
            <p>₩1,000,000</p>
          </Info>
          <ButtonWrapper>
            <Icon onClick={() => onToggleLike(id)}>
              {isLiked ? (
                <HeartFill style={{ color: 'red' }} />
              ) : (
                <HeartOutlined />
              )}
              <p className="label">2.7k</p>
            </Icon>
            <Icon onClick={() => onToggleBookmark(id)}>
              {isBookmarked ? <TagFilled /> : <TagOutlined />}
              <p className="label">4.8k</p>
            </Icon>
            <Icon onClick={() => router.push('/artwork/1')}>
              <MessageOutlined />
              <p className="label">1.2k</p>
            </Icon>
            <Button onClick={() => router.push('/artwork/1')}>
              Purchase/Inquiry
            </Button>
          </ButtonWrapper>
        </CardBottom>
      </Background>
    </Wrapper>
  );
};

export default GalleryItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Background = styled.div`
  width: 90%;
  height: 95%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  filter: drop-shadow(3px 4px 10px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: flex-end;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 300px;
  padding-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  color: #fafafa;
  text-align: center;
  border-radius: 0 0 15px 15px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6685049019607843) 21%,
    rgba(0, 0, 0, 0) 100%
  );
  p {
    margin: 0;
    font-family: medium;
    letter-spacing: -0.01rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;

const TitleLeft = styled.div`
  .title {
    font-size: 1rem;
  }
  .name {
    font-size: 0.625rem;
  }
`;

const TitleAvatar = styled(Avatar)`
  border: 1px solid #fafafa;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-left: 1rem;
`;

const Description = styled.p`
  margin-top: 0.5rem !important;
  font-size: 0.625rem;
`;

const Info = styled.div`
  margin-top: 0.3125rem;
  display: flex;

  p {
    font-size: 0.625rem;
  }

  p + p {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border-left: 1px solid #fafafa;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  Button {
    font-family: bold;
    margin-left: 1.6875rem;
    font-size: 0.75rem;
    padding: 0.3125rem 0.625rem;
    background: #353535;
    border: none;
  }
`;

const Icon = styled.div`
  & + & {
    margin-left: 1.875rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: all 0.5s ease;
  }

  .label {
    margin-top: 0.25rem !important;
    font-size: 0.5rem;
  }
`;
