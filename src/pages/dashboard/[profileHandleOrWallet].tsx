import AdminNavbar from '@components/Dashboard/Navbar';
import Sidebar from '@components/ui/Sidebar/Sidebar';
import GeneralStats from '@components/Statistics/GeneralStats';

// layout for page
export default function ProfileHandleOrWallet({ profileHandle }: any) {
  return (
    <>
      <Sidebar />
      <div className="bg-blueGray-100 relative md:ml-64">
        <AdminNavbar />
        {/* Header */}
        <GeneralStats />
        <div className="-m-24 mx-auto w-full px-4 md:px-10">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// todo move components
const Profile = () => {
  return (
    <>
      <div className="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center px-4">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/andriishupta.png"
                  className="absolute -m-16 -ml-20 h-auto max-w-150-px rounded-full border-none align-middle shadow-xl lg:-ml-16"
                />
              </div>
            </div>
            <div className="mt-20 w-full px-4 text-center">
              <div className="flex justify-center py-4 pt-8 lg:pt-4">
                <div className="mr-4 p-3 text-center">
                  <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                    22
                  </span>
                  <span className="text-blueGray-400 text-sm">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                    10
                  </span>
                  <span className="text-blueGray-400 text-sm">Photos</span>
                </div>
                <div className="p-3 text-center lg:mr-4">
                  <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                    89
                  </span>
                  <span className="text-blueGray-400 text-sm">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-blueGray-700 mb-2 mb-2 text-xl font-semibold leading-normal">
              Jenna Stones
            </h3>
            <div className="text-blueGray-400 mt-0 mb-2 text-sm font-bold uppercase leading-normal">
              <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>{' '}
              Los Angeles, California
            </div>
            <div className="text-blueGray-600 mb-2 mt-10">
              <i className="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="text-blueGray-600 mb-2">
              <i className="fas fa-university text-blueGray-400 mr-2 text-lg"></i>
              University of Computer Science
            </div>
          </div>
          <div className="border-blueGray-200 mt-10 border-t py-10 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-9/12">
                <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <a
                  href="#pablo"
                  className="text-lightBlue-500 font-normal"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Settings = () => {
  return (
    <>
      <div className="bg-blueGray-100 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between text-center">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 mr-1 rounded px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            <h6 className="text-blueGray-400 mt-3 mb-6 text-sm font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="lucky.jesse"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="jesse@example.com"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="Lucky"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="Jesse"
                  />
                </div>
              </div>
            </div>

            <hr className="border-b-1 border-blueGray-300 mt-6" />

            <h6 className="text-blueGray-400 mt-3 mb-6 text-sm font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="lg:w-12/12 w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="New York"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>

            <hr className="border-b-1 border-blueGray-300 mt-6" />

            <h6 className="text-blueGray-400 mt-3 mb-6 text-sm font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="lg:w-12/12 w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    rows={4}
                    defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export function getServerSideProps() {
  return {
    props: {
      profileHandle: 'andriishupta.lens',
    },
  };
}
