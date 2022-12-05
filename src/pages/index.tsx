import Navbar from '@components/Navbars/Navbar';
import Footer from '@components/Footers/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faLaptop,
  faRocket,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useWeb3 } from '@web3/context';
import { useEffect, useState } from 'react';
import { IpfsPostContent } from '@subsocial/api/types';

export default function Index() {
  const { activeUser, subsocialApi } = useWeb3();
  const [posts, setPosts] = useState<(IpfsPostContent | undefined)[]>();
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [postsError, setPostsError] = useState();

  useEffect(() => {
    subsocialApi?.base
      .findPosts({ ids: ['1', '2', '3'] })
      .then((rawPosts) => {
        const posts = rawPosts.map((rp) => rp.content).filter((item) => !!item);

        console.log('Loaded posts [1-3]: ', posts);

        setPosts(posts);
      })
      .catch((e) => {
        setPostsError(e);
        console.error('Error loading posts: ', e);
      })
      .finally(() => setLoadingPosts(false));
  }, [subsocialApi]);

  return (
    <>
      <Navbar />
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
                    {activeUser
                      ? `Welcome, ${activeUser.name}`
                      : 'Your story starts here.'}
                  </h1>
                  {!activeUser && (
                    <p className="mt-4 text-lg text-slate-200">
                      Build a strong community of supporters by leveraging power
                      of
                      <br />
                      <b>Subsocial Network!</b>
                    </p>
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

        {!activeUser && (
          <section className="-mt-24 bg-slate-200 pb-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
                  <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                    <div className="flex-auto px-4 py-5">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
                        <FontAwesomeIcon icon={faRocket} />
                      </div>
                      <h6 className="text-xl font-semibold">
                        Awesome Web3 Experience
                      </h6>
                      <p className="mt-2 mb-4 text-slate-500">
                        Polkadot is like any other L2, but L1. Also you have
                        parachains, parathreads, ...etc :)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 text-center md:w-4/12">
                  <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                    <div className="flex-auto px-4 py-5">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 p-3 text-center text-white shadow-lg">
                        <FontAwesomeIcon icon={faDumbbell} />
                      </div>
                      <h6 className="text-xl font-semibold">
                        Strong community
                      </h6>
                      <p className="mt-2 mb-4 text-slate-500">
                        Go and checkout some docs and places on Polkadot and
                        Kusama!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 pt-6 text-center md:w-4/12">
                  <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                    <div className="flex-auto px-4 py-5">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg">
                        <FontAwesomeIcon icon={faLaptop} />
                      </div>
                      <h6 className="text-xl font-semibold">
                        Best Dev Experience
                      </h6>
                      <p className="mt-2 mb-4 text-slate-500">
                        We are working on it 😬...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="relative">
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

        <section className="pt-8 pb-12">
          <div className="container mx-auto px-4">
            <div className="mb-24 flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Explore</h2>
                {postsError ? (
                  <>Error with Posts</>
                ) : loadingPosts ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    size="2xl"
                    className="mt-20 animate-spin"
                  />
                ) : (
                  <p className="m-4 text-lg leading-relaxed text-slate-500">
                    {posts?.map((post) => (
                      <>
                        <pre>{JSON.stringify(post)}</pre>
                      </>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-36">
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
                        <FontAwesomeIcon icon={faTwitter} />
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
