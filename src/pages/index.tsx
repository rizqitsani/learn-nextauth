import * as React from 'react';
import NextLink from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import {
  Button,
  Heading,
  Link,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
        >
          <Heading as='h1' color={mode('gray.900', 'orange.300')}>
            {session ? `Hello, ${session?.user?.name}` : 'Hello!'}
          </Heading>
          {session ? (
            <NextLink href='/protected' passHref>
              <Link>Go to protected page</Link>
            </NextLink>
          ) : (
            <VStack>
              <Button colorScheme='orange' onClick={() => signIn()}>
                Sign In
              </Button>
            </VStack>
          )}
        </VStack>
      </Container>
    </Layout>
  );
};

export default HomePage;
