import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/theme';

import DEFAULT_SEO from '../../next-seo.config.js';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        {...DEFAULT_SEO}
        canonical={`https://learn-nextauth.vercel.app${router.asPath}`}
        openGraph={{
          url: `https://learn-nextauth.vercel.app${router.asPath}`,
        }}
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
