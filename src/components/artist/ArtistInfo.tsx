import { Button } from '@components/common';
import { FC } from 'react';
import styled from 'styled-components';

type ArtistInfoProps = {
  name: string;
  nickname: string;
  artworksNumber: number;
  followersNumber: number;
  followingNumber: number;
  introduction: string;
};

const ArtistInfo: FC<ArtistInfoProps> = ({
  name,
  nickname,
  artworksNumber,
  followersNumber,
  followingNumber,
  introduction,
}) => {
  return (
    <Wrapper>
      <Head>
        <HeadTitle>{name}</HeadTitle>
        <HeadNickname>{nickname}</HeadNickname>
      </Head>
      <Numbers>
        <NumberItem>
          <NumberItemText>{artworksNumber}</NumberItemText>
          <NumberItemLabel>Artworks</NumberItemLabel>
        </NumberItem>
        <NumberItem>
          <NumberItemText>{followersNumber}</NumberItemText>
          <NumberItemLabel>Followers</NumberItemLabel>
        </NumberItem>
        <NumberItem>
          <NumberItemText>{followingNumber}</NumberItemText>
          <NumberItemLabel>Following</NumberItemLabel>
        </NumberItem>
      </Numbers>
      <Introduction>{introduction}</Introduction>
      <ButtonList>
        <StyledButton>팔로우</StyledButton>
        <StyledButton>후원하기</StyledButton>
      </ButtonList>
    </Wrapper>
  );
};

export default ArtistInfo;

const Wrapper = styled.div`
  height: 12.5rem;
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
  display: flex;
`;
const HeadTitle = styled.p`
  flex: 3;
  font-size: 1.75rem;
`;
const HeadNickname = styled.p`
  flex: 2;
  text-align: center;
  font-size: 0.75rem;
`;

const Numbers = styled.div`
  display: flex;
`;
const NumberItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 0.8125rem;
`;
const NumberItemText = styled.p`
  font-family: bold;
  font-size: 0.75rem;
`;
const NumberItemLabel = styled.p`
  margin-top: 0.25rem;
  font-size: 0.5rem;
  letter-spacing: -0.005em;
`;

const Introduction = styled.p`
  margin-top: 1.25rem;
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  flex: 1;
  margin-top: 1.25rem;
  padding: 0.125rem;
  font-size: 0.75rem;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  background-blend-mode: overlay;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

  & + & {
    margin-left: 0.625rem;
  }
`;
