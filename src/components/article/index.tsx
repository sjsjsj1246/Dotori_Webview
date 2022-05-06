import { BottomTab, NestedHeader } from '@components/common';
import { FC, useRef } from 'react';
import styled from 'styled-components';
import ArticleContent from './ArticleContent';
import ArticleCover from './ArticleCover';

type ArticleProps = {
  id: number;
};

const Article: FC<ArticleProps> = ({ id }) => {
  const contentRef = useRef<any>(null);

  return (
    <Wrapper>
      <MainSection>
        <NestedHeader />
        <ArticleCover
          title="abcdefg"
          artist="Lee"
          description="언제부터 예술에 답이 정해져 있었던가요?"
          subDescription="잘 모르면 어때요? 즐기다 보면 알아가게 되는거 아닌가요?"
          like={2.7}
          bookmark={4.8}
          isBookmarked={false}
          isLiked={false}
          contentRef={contentRef}
        />
        <ArticleContent
          fowardRef={contentRef}
          title="abcdefghijklmnopqrstu"
          artist="Lee"
          description="언제부터 예술에 답이 정해져 있었던가요?"
          like={2.7}
          bookmark={4.8}
          isBookmarked={false}
          isLiked={false}
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </MainSection>
      <BottomTab />
    </Wrapper>
  );
};

export default Article;

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

  overflow-y: scroll;
`;
