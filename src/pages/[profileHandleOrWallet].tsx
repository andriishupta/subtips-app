import Navbar from '@components/Navbars/Navbar';
import Footer from '@components/Footers/Footer';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useWeb3 } from '@web3/context';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ProfileHandleOrWallet({
  name,
  about,
  friends,
  posts,
}: {
  name: string;
  about: string;
  friends: string;
  posts: string;
}) {
  // todo typings
  const { activeUser } = useWeb3();
  const { query } = useRouter();
  const { profileHandleOrWallet } = query;

  const shortAddress = `${profileHandleOrWallet!.slice(0, 3)}...${profileHandleOrWallet!.slice(
    -3
  )}`;
  const isCurrentWalletsAccount = activeUser?.address === profileHandleOrWallet;
  const polkaverseLink = `https://polkaverse.com/accounts/${profileHandleOrWallet}`;

  return (
    <>
      <Head>
        <title>{profileHandleOrWallet} | SubTips</title>
      </Head>
      <Navbar />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span id="blackOverlay" className="absolute h-full w-full bg-black opacity-50"></span>
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
        </section>

        <section className="relative bg-slate-200 py-16">
          <div className="container mx-auto px-4">
            <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/andriishupta.png"
                        className="absolute -m-16 -ml-20 h-auto max-w-150-px rounded-full border-none align-middle shadow-xl lg:-ml-16"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right">
                    <div className="mt-32 py-6 px-3 sm:mt-0">
                      <Link
                        href={polkaverseLink}
                        className="mb-1 rounded bg-slate-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-600 sm:mr-2"
                      >
                        <FontAwesomeIcon icon={faRocket} />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:order-1 lg:w-4/12">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      <div className="mr-4 p-3 text-center">
                        <span className="block text-xl font-bold uppercase tracking-wide text-slate-600">
                          { friends }
                        </span>
                        <span className="text-sm text-slate-400">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="block text-xl font-bold uppercase tracking-wide text-slate-600">
                          { posts }
                        </span>
                        <span className="text-sm text-slate-400">Posts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="mb-2 mb-2 text-4xl font-semibold leading-normal text-slate-700">
                    {name} {isCurrentWalletsAccount ? '- Your Profile' : ''}
                  </h3>
                </div>
                <div className="mt-10 border-t border-slate-200 py-10 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700">{about}</p>
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

export async function getServerSideProps(context: any) {
  // const profileAddress = context.params.profileHandleOrWallet;
  // const serverSideApi = await createSubsocialApi();
  // const profile = await api.base.findProfileSpace(profileAddress);

  /**
   * Mocking data such as I don't have subsocial account on SoonSocial
   */

  const profile = {
    content: {
      name: 'Andrii Shupta',
      about: '🧑‍💻 Lead Full Stack Developer',
    },
  };

  return {
    props: {
      name: profile?.content?.name,
      about: profile?.content?.about,
      friends: 420,
      posts: 69,
    },
  };
}
