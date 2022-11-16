import '@/styles/globals.scss';
import '@/styles/variables.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/layout/Layout';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
