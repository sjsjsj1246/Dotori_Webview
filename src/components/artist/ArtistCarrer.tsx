import { Button } from '@components/common';
import { FC } from 'react';
import styled from 'styled-components';

type ArtistCarrerProps = {
  carrer: string;
  instagram?: string;
  twitter?: string;
  kakaoTalk?: string;
};

const ArtistCarrer: FC<ArtistCarrerProps> = ({
  carrer,
  instagram,
  twitter,
  kakaoTalk,
}) => {
  return (
    <Wrapper>
      <Head>
        <HeadTitle>Carrer</HeadTitle>
      </Head>
      <Introduction>{carrer}</Introduction>
      <SocialLinks></SocialLinks>
    </Wrapper>
  );
};

export default ArtistCarrer;

const Wrapper = styled.div`
  width: 70%;
  padding: 0.625rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  background-blend-mode: overlay;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  p {
    color: #fafafa;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #fafafa;
  padding-bottom: 0.4375rem;
`;
const HeadTitle = styled.p`
  flex: 3;
  font-size: 1.75rem;
`;

const Introduction = styled.p`
  margin-top: 1.25rem;
`;

const SocialLinks = styled.div`
  display: flex;
`;
