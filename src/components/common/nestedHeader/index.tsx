import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Avatar } from '../avatar';

export const NestedHeader: FC = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <ArrowLeftOutlined onClick={router.back} />
      <Profile
        src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        onClick={() => router.push('/profile')}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Profile = styled(Avatar)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
