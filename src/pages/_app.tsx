import { type AppType } from 'next/app';

import '../styles/globals.css';

import { trpc } from '@utils/trpc';

import {
  TContextError,
  TSubsocialContext,
  Web3ContextProvider,
} from '@web3/context';
import { useEffect, useState } from 'react';
import { createSubsocialApi } from '@web3/subsocial';

const MyApp: AppType = ({ Component, pageProps }) => {
  const [subsocialContext, setSubsocialContext] = useState<
    TSubsocialContext & TContextError
  >({ subsocialApi: undefined, error: undefined });

  useEffect(() => {
    createSubsocialApi()
      .then((apiWithIpfsAuth) => {
        console.log('Subsocial connected!');
        setSubsocialContext({ subsocialApi: apiWithIpfsAuth });
      })
      .catch((e) => {
        console.error('Error with connection to Subsocial:', e);
        setSubsocialContext({ error: e });
      });
  }, []);

  return (
    <Web3ContextProvider initialConfig={subsocialContext}>
      <Component {...pageProps} />
    </Web3ContextProvider>
  );
};

export default trpc.withTRPC(MyApp);
