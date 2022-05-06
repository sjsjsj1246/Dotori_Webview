import { HeartOutlined, TagFilled, TagOutlined } from '@ant-design/icons';
import { HeartFill } from 'antd-mobile-icons';
import { FC } from 'react';
import styled from 'styled-components';

type ArticleContentProps = {
  title: string;
  artist: string;
  description: string;
  content: string;
  like: number;
  bookmark: number;
  isLiked: boolean;
  isBookmarked: boolean;
  fowardRef: any;
};

const ArticleContent: FC<ArticleContentProps> = ({
  title,
  artist,
  description,
  content,
  like,
  bookmark,
  isLiked,
  isBookmarked,
  fowardRef,
}) => {
  return (
    <Wrapper ref={fowardRef}>
      <Title>Article Title : {title}</Title>
      <TitleBottom>
        <ButtonList>
          <ButtonItem>
            {isLiked ? (
              <HeartFill style={{ color: 'red' }} />
            ) : (
              <HeartOutlined />
            )}
            <p className="label">{like}</p>
          </ButtonItem>
          <ButtonItem>
            {isBookmarked ? <TagFilled /> : <TagOutlined />}
            <p className="label">{bookmark}</p>
          </ButtonItem>
        </ButtonList>
        <Artist>by {artist}</Artist>
      </TitleBottom>
      <Description>{description}</Description>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default ArticleContent;

const Wrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: bold;
  font-size: 1.5rem;
  letter-spacing: -0.05rem;
`;

const TitleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const ButtonList = styled.div`
  display: flex;
`;

const ButtonItem = styled.div`
  & + & {
    margin-left: 0.625rem;
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  p {
    text-align: center;
    font-size: 0.5rem;
  }
`;

const Artist = styled.p`
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 1rem;
`;

//@TODO 추후 html이나 markdown 형식으로 처리
const Content = styled.p``;
