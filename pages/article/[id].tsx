import Article from '@components/article';
import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';

const ArticleScreen: FC = () => {
  const { query }: any = useRouter();
  return <Article id={parseInt(query.id)} />;
};

export default ArticleScreen;
