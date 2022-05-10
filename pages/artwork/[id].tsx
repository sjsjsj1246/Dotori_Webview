import Artwork from '@components/artwork';
import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';

const ArtworkScreen: FC = () => {
  const { query }: any = useRouter();
  return <Artwork id={parseInt(query.id)} />;
};

export default ArtworkScreen;
