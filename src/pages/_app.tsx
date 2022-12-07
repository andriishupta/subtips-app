import { type AppType } from 'next/app';

import '../styles/globals.css';

import { trpc } from '@utils/trpc';

import {
  loadInjectedContext,
  TLatestContextError,
  TInjectedContext,
  TSubsocialContext,
  Web3ContextProvider,
  TUserContext,
} from '@web3/context';
import { useEffect, useState } from 'react';
import { createSubsocialApi } from '@web3/subsocial';
import { SUBTIPS_DEFAULT_ACCOUNT_KEY } from '@utils/storage';

const MyApp: AppType = ({ Component, pageProps }) => {
  const [subsocialContext, setSubsocialContext] = useState<TSubsocialContext & TLatestContextError>(
    {
      subsocialApi: undefined,
      error: undefined,
    }
  );
  const [injectedContext, setInjectedContext] = useState<TInjectedContext & TLatestContextError>({
    isReady: false,
    accounts: undefined,
    defaultAccount: undefined,
    error: undefined,
  });
  const [userContext, setUserContext] = useState<TUserContext>({
    activeUserInStorage: false,
    activeUser: undefined,
  });

  useEffect(() => {
    try {
      if (localStorage.getItem(SUBTIPS_DEFAULT_ACCOUNT_KEY)) {
        JSON.parse(localStorage.getItem(SUBTIPS_DEFAULT_ACCOUNT_KEY)!);
        setUserContext({ activeUserInStorage: true });
      }
    } catch (e) {
      console.info('Error with parsing activeDefaultUser from localStorage');
      localStorage.removeItem(SUBTIPS_DEFAULT_ACCOUNT_KEY);
    }

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

  useEffect(() => {
    if (subsocialContext.subsocialApi && userContext.activeUserInStorage) {
      loadInjectedContext()
        .then((injectedContextOrError) => {
          setInjectedContext(injectedContextOrError as TInjectedContext); // todo could be "error" - change type intersection
          const defaultAccount =
            'defaultAccount' in injectedContextOrError && !!injectedContextOrError.defaultAccount
              ? injectedContextOrError.defaultAccount
              : undefined;

          if (defaultAccount) {
            setUserContext({
              activeUser: { address: defaultAccount.address },
              activeUserInStorage: true,
            });
          } else {
            localStorage.removeItem(SUBTIPS_DEFAULT_ACCOUNT_KEY)
            setUserContext({
              activeUser: undefined,
              activeUserInStorage: false,
            });
          }
        })
        .catch((e) => {
          console.error('Error with initial Injected context load:', e);
          setSubsocialContext({ error: e });
        });
    }
  }, [subsocialContext.subsocialApi, userContext.activeUserInStorage]);

  return (
    <Web3ContextProvider
      initialConfig={{ ...subsocialContext, ...injectedContext, ...userContext }}
    >
      <Component {...pageProps} />
    </Web3ContextProvider>
  );
};

export default MyApp;
