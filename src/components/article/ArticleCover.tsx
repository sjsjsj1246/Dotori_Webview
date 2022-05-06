import { HeartOutlined, TagFilled, TagOutlined } from '@ant-design/icons';
import { HeartFill } from 'antd-mobile-icons';
import { FC } from 'react';
import styled from 'styled-components';

type ArticleCoverProps = {
  title: string;
  artist: string;
  description: string;
  subDescription: string;
  like: number;
  bookmark: number;
  isLiked: boolean;
  isBookmarked: boolean;
  contentRef: any;
};

const ArticleCover: FC<ArticleCoverProps> = ({
  title,
  artist,
  description,
  subDescription,
  like,
  bookmark,
  isLiked,
  isBookmarked,
  contentRef,
}) => {
  return (
    <Wrapper>
      <Cover>
        <CoverTitle>Article Title : {title}</CoverTitle>
        <CoverArtist>by {artist}</CoverArtist>
        <CoverDescription>"{description}"</CoverDescription>
        <CoverSubDescription>"{subDescription}"</CoverSubDescription>
        <CoverButtonList>
          <CoverButtonItem>
            {isLiked ? (
              <HeartFill style={{ color: 'red' }} />
            ) : (
              <HeartOutlined />
            )}
            <p className="label">{like}</p>
          </CoverButtonItem>
          <CoverButtonItem>
            {isBookmarked ? <TagFilled /> : <TagOutlined />}
            <p className="label">{bookmark}</p>
          </CoverButtonItem>
        </CoverButtonList>
        <CoverMoreLink
          onClick={() => {
            console.log('hi');
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          read more
        </CoverMoreLink>
      </Cover>
    </Wrapper>
  );
};

export default ArticleCover;

const Wrapper = styled.div`
  height: 100%;
  background-image: url(/img/article.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Cover = styled.div`
  width: 50%;
  height: 60%;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(250, 250, 250, 0.85);
  display: flex;
  flex-direction: column;
`;

const CoverTitle = styled.h1`
  font-family: bold;
  font-size: 1.5rem;
`;

const CoverArtist = styled.p`
  text-align: right;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const CoverDescription = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
  flex: 1;
  font-weight: bold;
`;

const CoverSubDescription = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
  flex: 2;
`;

const CoverButtonList = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CoverButtonItem = styled.div`
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

const CoverMoreLink = styled.p`
  cursor: pointer;
  text-align: right;
  text-decoration: underline;
  margin-top: 0.5rem;
`;
