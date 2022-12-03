import Navbar from '@components/Navbars/Navbar';
import Footer from '@components/Footers/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { useWeb3, loadWeb3Context } from '@web3/context';
import { useState } from 'react';
import Image from 'next/image'
import clsx from 'clsx';
import { getProfileImagePlaceHolder } from "@utils/base64-image";

export default function Index() {
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
      <Navbar transparent />
      <main>
        <div className="relative flex min-h-screen-75 content-center items-center justify-center pt-16 pb-32">
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://uploads-ssl.webflow.com/626fee97e03eed4b123c6e3e/6297c8f7ac98bd62a04da315_hero-bg.png')",
            }}
          />
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
                <div className="mt-4">
                  <h1 className="text-5xl font-semibold text-white">
                    Your story starts here.
                  </h1>
                  <p className="mt-4 text-lg text-slate-200">
                    Build a strong community of supporters by leveraging power
                    of Subsocial Network!
                  </p>
                </div>

                <div className="my-16">
                  {isReady && defaultAccount ? (
                    <div className="flex align-center justify-center">
                      <Image
                        src={getProfileImagePlaceHolder(defaultAccount.address)}
                        width={48}
                        height={48}
                        alt={defaultAccount.address}
                      />
                    </div>
                  ) : (
                    <button
                      disabled={connecting}
                      className={clsx(
                        'mt-4 rounded bg-fuchsia-400 px-6 py-4 text-lg font-bold uppercase text-slate-200 shadow outline-none focus:outline-none',
                        connecting
                          ? 'cursor-not-allowed'
                          : 'hover:bg-fuchsia-500 hover:shadow-lg active:bg-fuchsia-600'
                      )}
                      onClick={() => handleConnect()}
                    >
                      {connecting ? 'Connecting...' : 'Connect'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 h-16 w-full overflow-hidden"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-slate-200"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="-mt-24 bg-slate-200 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
                      <FontAwesomeIcon icon={faChair} />
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 p-3 text-center text-white shadow-lg">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 pt-6 text-center md:w-4/12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div
            className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 h-20 w-full overflow-hidden"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="mb-24 flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Explore Subsocial</h2>
                <p className="m-4 text-lg leading-relaxed text-slate-500">
                  ... LOAD ...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Here is our hero</h2>
                <p className="m-4 text-lg leading-relaxed text-slate-500">
                  According to Andrii Shupta, Andrii Shupta is an excellent full
                  stack developer with variety of web2 and web3 skills
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full px-4 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/andriishupta.png"
                    className="mx-auto max-w-120-px rounded-full shadow-lg"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Andrii Shupta</h5>
                    <p className="mt-1 text-sm font-semibold uppercase text-slate-400">
                      🧑‍💻 Lead Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="mr-1 mb-1 h-8 w-8 rounded-full bg-sky-400 text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
