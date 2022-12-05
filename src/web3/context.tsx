import {
  createContext,
  FC,
  PropsWithChildren,
  useContext, useEffect,
  useState
} from "react";
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import type { SubsocialApi } from '@subsocial/api';

export type TInjectedContext = {
  isReady: boolean;
  accounts?: InjectedAccountWithMeta[];
  defaultAccount?: InjectedAccountWithMeta;
};

export type TUserContext = {
  activeUser?: any; // todo get Subsocial user
};

export type TSubsocialContext = {
  subsocialApi?: SubsocialApi;
};

export type TContextError = {
  error?: Error | unknown;
};

export type TWeb3Context = TInjectedContext &
  TUserContext &
  TSubsocialContext &
  TContextError;

export type TWeb3ContextWithConfig = TWeb3Context & {
  patchWeb3Context: (newContext: Partial<TWeb3Context>) => void;
  clearWeb3Context: () => void;
};

export const emptyWeb3Context: TWeb3Context = {
  isReady: false,
  accounts: undefined,
  defaultAccount: undefined,
  subsocialApi: undefined,
  error: undefined,
};

export const Web3Context = createContext<TWeb3ContextWithConfig>(
  undefined as unknown as TWeb3ContextWithConfig
);

export const useWeb3 = () => useContext(Web3Context);

export const Web3ContextProvider: FC<
  PropsWithChildren & { initialConfig: Partial<TWeb3Context> }
> = ({ children, initialConfig }) => {
  const [currentContext, setCurrentContext] = useState<TWeb3Context>({
    ...emptyWeb3Context,
  });

  useEffect(() => {
    if (initialConfig) {
      setCurrentContext((prevContext) => ({ ...prevContext, ...initialConfig }))
    }
  }, [initialConfig])

  const patchWeb3Context = (nextContext: Partial<TWeb3Context>) =>
    setCurrentContext((prevContext) => ({ ...prevContext, ...nextContext }));

  const clearWeb3Context = () => setCurrentContext({ ...emptyWeb3Context });

  return (
    <Web3Context.Provider
      value={{ ...currentContext, patchWeb3Context, clearWeb3Context }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const loadInjectedContext = async (): Promise<
  TInjectedContext | TContextError
> => {
  try {
    const { web3Enable, web3Accounts } = await import(
      '@polkadot/extension-dapp'
    );
    const injectedExtensions = await web3Enable('subtips'); // todo ENV variable or CONST

    if (!injectedExtensions.length) {
      throw new Error('NO_INJECTED_EXTENSIONS');
    }

    const accounts = await web3Accounts();
    if (!accounts.length) {
      throw new Error('NO_ACCOUNTS');
    }

    return {
      isReady: true,
      accounts: accounts,
      defaultAccount: accounts[0],
    };
  } catch (e) {
    console.error('Error with injected context setup:', e);
    return {
      error: e,
    };
  }
};
