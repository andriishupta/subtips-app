import { type AppType } from 'next/app';

import '../styles/globals.css';

import { trpc } from '@utils/trpc';

import { Web3ContextProvider } from '@web3/context';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Web3ContextProvider>
      <Component {...pageProps} />
    </Web3ContextProvider>
  );
};

export default trpc.withTRPC(MyApp);
