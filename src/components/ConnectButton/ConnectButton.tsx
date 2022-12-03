import Image from "next/image";
import { getProfileImagePlaceHolder } from "@utils/base64-image";
import clsx from "clsx";
import { loadWeb3Context, useWeb3 } from "@web3/context";
import { useState } from "react";

export const ConnectButton = () => {
  const { isReady, defaultAccount, setWeb3Context } = useWeb3();
  const [connecting, setConnecting] = useState(false);

  const handleConnect = async () => {
    setConnecting(true);
    const nextWeb3Context = await loadWeb3Context();
    setWeb3Context(nextWeb3Context);
    setConnecting(false);
  };

  return (
    <>
      {isReady && defaultAccount ? (
        <div className="flex align-center justify-center">
          <Image
            src={getProfileImagePlaceHolder(defaultAccount.address)}
            width={32}
            height={32}
            alt={defaultAccount.address}
          />
        </div>
      ) : (
        <button
          disabled={connecting}
          className={clsx(
            'rounded bg-fuchsia-400 px-4 py-2 text-xs font-bold uppercase text-slate-200 shadow outline-none focus:outline-none',
            connecting
              ? 'cursor-not-allowed'
              : 'hover:bg-fuchsia-500 hover:shadow-lg active:bg-fuchsia-600'
          )}
          onClick={() => handleConnect()}
        >
          {connecting ? 'Connecting...' : 'Connect'}
        </button>
      )}
    </>
  )
}