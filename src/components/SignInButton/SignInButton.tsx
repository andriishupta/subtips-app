import Image from 'next/image';
import { getProfileImagePlaceHolder } from '@utils/base64-image';
import clsx from 'clsx';
import { loadInjectedContext, useWeb3 } from '@web3/context';
import { useState } from 'react';

export const SignInButton = () => {
  const { isReady, defaultAccount, patchWeb3Context } = useWeb3();
  const [signingIn, setSigningIn] = useState(false);

  const handleSignIn = async () => {
    setSigningIn(true);
    const nextWeb3Context = await loadInjectedContext();

    // signIn with Subsocial and get user

    patchWeb3Context({
      activeUser: { name: 'Test' },
      ...nextWeb3Context
    });
    setSigningIn(false);
  };

  return (
    <>
      {isReady && defaultAccount ? (
        <div className="align-center flex justify-center">
          <Image
            src={getProfileImagePlaceHolder(defaultAccount.address)}
            width={32}
            height={32}
            alt={defaultAccount.address}
          />
        </div>
      ) : (
        <button
          disabled={signingIn}
          className={clsx(
            'rounded bg-fuchsia-400 px-4 py-2 text-xs font-bold uppercase text-slate-200 shadow outline-none focus:outline-none',
            signingIn
              ? 'cursor-not-allowed'
              : 'hover:bg-fuchsia-500 hover:shadow-lg active:bg-fuchsia-600'
          )}
          onClick={() => handleSignIn()}
        >
          {signingIn ? 'Signing in...' : 'Sign In'}
        </button>
      )}
    </>
  );
};
