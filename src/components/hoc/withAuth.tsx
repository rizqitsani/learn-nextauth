import * as React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Spinner, Text, VStack } from '@chakra-ui/react';

export default function withAuth<T>(Component: React.ComponentType<T>) {
  const ComponentWithAuth = (props: T) => {
    const { data: session, status } = useSession();
    const isLoading = status === 'loading';
    const isUser = !!session?.user;

    React.useEffect(() => {
      if (isLoading) return;
      if (!isUser) signIn();
    }, [isLoading, isUser]);

    if (isUser) {
      return <Component {...props} />;
    }

    return (
      <VStack justify='center' minHeight='100vh'>
        <Spinner colorScheme='orange' />
        <Text fontWeight='semibold'>Loading</Text>
      </VStack>
    );
  };

  return ComponentWithAuth;
}
