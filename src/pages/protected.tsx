import * as React from 'react';
import { NextSeo } from 'next-seo';
import { Heading, useColorModeValue as mode, VStack } from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';
import withAuth from '@/components/hoc/withAuth';

const ProtectedPage = () => {
  return (
    <Layout>
      <NextSeo title='Protected' />

      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
        >
          <Heading as='h1' color={mode('gray.900', 'orange.300')}>
            This page contain secret information!
          </Heading>
        </VStack>
      </Container>
    </Layout>
  );
};

export default withAuth(ProtectedPage);
