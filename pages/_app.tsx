import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { StyledThemeProvider } from '@definitions/styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import GlobalStyle from '../src/styles/globalStyles.js';

const WrappedApp: any = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
};

export default WrappedApp;
