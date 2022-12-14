import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NotificationDropdown from '@components/Dropdowns/NotificationDropdown';
import UserDropdown from '@components/Dropdowns/UserDropdown';
import SubTipsStatus from '@components/Helpers/SubTipsStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useWeb3 } from '@web3/context';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState('hidden');
  const { activeUser } = useWeb3();
  const profileLink = activeUser?.address && `/${activeUser.address}`;

  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            href="/"
            className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-slate-600 md:block md:pb-2"
          >
            <SubTipsStatus />
          </Link>
          {/* User */}
          <ul className="flex list-none flex-wrap items-center md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="mb-4 block border-b border-solid border-slate-200 pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/"
                    className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-slate-600 md:block md:pb-2"
                  >
                    <SubTipsStatus />
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                {profileLink ? (
                  <Link href={profileLink} className="block py-3 text-xs font-bold uppercase">
                    My Profile
                  </Link>
                ) : (
                  <div className="text-slate block py-3 text-xs font-bold uppercase">
                    My Profile(Loading...)
                  </div>
                )}
              </li>

              <li className="items-center">
                <Link
                  href=""
                  className="block cursor-not-allowed py-3 text-xs font-bold uppercase text-slate-300"
                >
                  Messages
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href=""
                  className="block cursor-not-allowed py-3 text-xs font-bold uppercase text-slate-300"
                >
                  Notifications
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <div className="block cursor-not-allowed py-3 text-xs font-bold uppercase text-slate-300 text-slate-700 hover:text-slate-500">
                  <FontAwesomeIcon icon={faSun} /> / <FontAwesomeIcon icon={faMoon} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
