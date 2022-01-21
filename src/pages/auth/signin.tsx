import * as React from 'react';
import { NextSeo } from 'next-seo';
import { signIn, useSession } from 'next-auth/react';
import {
  Button,
  Heading,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';

import Container from '@/components/Container';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

const SignInPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.replace('/');
  }

  return (
    <Layout>
      <NextSeo title='Sign In' />

      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={12}
        >
          <Heading as='h1' color={mode('gray.900', 'orange.300')}>
            Sign In
          </Heading>
          <VStack>
            <Button
              leftIcon={<FaGithub />}
              colorScheme='gray'
              onClick={() => signIn('github')}
            >
              Continue with Github
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Layout>
  );
};

export default SignInPage;
