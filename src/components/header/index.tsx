import { FC } from 'react';
import { Avatar } from '..';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header: FC = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Avatar src="" />
      <p>dotori</p>
      <Avatar
        src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        onClick={() => router.push('mypage')}
        style={{
          '--border-radius': '50%',
        }}
      />
    </Wrapper>
  );
};
