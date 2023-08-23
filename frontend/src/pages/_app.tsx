import '../styles/globals.css';
import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Layout from '@/styles/layout';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
