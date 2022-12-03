import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import type { SubsocialApi } from '@subsocial/api';
import { createSubsocialApi } from "@web3/subsocial";

export type Web3ContextType = {
  isReady: boolean;
  accounts?: InjectedAccountWithMeta[];
  defaultAccount?: InjectedAccountWithMeta;
  subsocialApi?: SubsocialApi;
  error?: Error;
};

export type Web3ContextWithConfigType = Web3ContextType & {
  setWeb3Context: (newContext: Web3ContextType) => void;
};

export const emptyWeb3ContextValue: Web3ContextType = {
  isReady: false,
  accounts: undefined,
  defaultAccount: undefined,
  subsocialApi: undefined,
  error: undefined,
};

export const Web3Context = createContext<Web3ContextWithConfigType>(undefined as unknown as Web3ContextWithConfigType);

export const Web3ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentContext, setCurrentContext] = useState<Web3ContextType>(
    emptyWeb3ContextValue
  );

  return (
    <Web3Context.Provider value={{...currentContext, setWeb3Context: setCurrentContext }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);

export const loadWeb3Context = async (): Promise<Web3ContextType> => {
  const { web3Enable, web3Accounts } = await import("@polkadot/extension-dapp")
  const web3ContextValue: Web3ContextType = {
    ...emptyWeb3ContextValue
  }

  // todo ENV variable or CONST
  return web3Enable('subtips')
    .then((injectedExtensions) => {
      if (!injectedExtensions.length) {
        return Promise.reject(new Error('NO_INJECTED_EXTENSIONS'));
      }

      return web3Accounts();
    })
    .then((accounts) => {
      if (!accounts.length) {
        return Promise.reject(new Error('NO_ACCOUNTS'));
      }

      // todo - subscribe to accs
      web3ContextValue.accounts = accounts
      web3ContextValue.defaultAccount = accounts[0]

      return createSubsocialApi();
    })
    .then((apiWithIpfsAuth) => ({
      ...web3ContextValue,
      isReady: true,
      subsocialApi: apiWithIpfsAuth,
    }))
    .catch((e) => {
      console.error('Error with web3 setup:', e)
      return {
        ...web3ContextValue,
        isReady: false,
        error: e
      }
    });
}
