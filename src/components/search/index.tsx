import React from 'react';
import { BottomTab } from '@components/common/bottomTab';
import { Header } from '@components/common/header';
import { SearchBar } from 'antd-mobile';
import styled from 'styled-components';

const Search: React.FC = () => {
  return (
    <Wrapper>
      <Header>헤더</Header>
      <SearchBarWrapper>
        <SearchBar placeholder="검색" />
      </SearchBarWrapper>
      <div style={{ flex: 1 }}>검색</div>
      <BottomTab />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SearchBarWrapper = styled.div`
  padding: 1.125rem 2.8125rem;
`;
