import Artist from '@components/artist';
import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';

const ArtistScreen: FC = () => {
  const { query }: any = useRouter();
  return <Artist id={parseInt(query.id)} />;
};

export default ArtistScreen;
