import '@/styles/globals.scss';
import '@/styles/variables.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
