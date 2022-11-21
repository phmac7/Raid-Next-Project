import '@/styles/globals.scss';
import '@/styles/variables.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default MyApp;
