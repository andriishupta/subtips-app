import Link from 'next/link';
import { useState } from 'react';
import { SignInButton } from '@components/SignInButton/SignInButton';
import { useWeb3 } from '@web3/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SubTipsStatus from '@components/Helpers/SubTipsStatus';
import { github, polkaverse, twitter } from '@utils/links';
import SearchMock from "@components/Helpers/SearchMock";

export default function Navbar() {
  const { activeUser, activeUserInStorage } = useWeb3();

  return (
    <>
      <nav className="navbar-expand-lg absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link
              href="/"
              className="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
            >
              <SubTipsStatus />
            </Link>
            <div className="block lg:hidden">
              {activeUser ? (
                <button
                  className="cursor-pointer rounded px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
                  type="button"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </button>
              ) : activeUserInStorage ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <SignInButton />
              )}
            </div>
          </div>
          <div
            className="hidden flex-grow items-center bg-white lg:flex lg:flex lg:bg-opacity-0 lg:shadow-none"
            id="example-navbar-warning"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
              <li className="flex items-center"> <SearchMock/> </li>
              {activeUser ? (
                <li className="flex items-center">
                  <Link
                    href="/dashboard"
                    className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  >
                    <span className="ml-2 inline-block">Dashboard</span>
                  </Link>
                </li>
              ) : (
                <li className="flex items-center">
                  {activeUserInStorage ? (
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  ) : (
                    <SignInButton />
                  )}
                </li>
              )}

              <li className="flex items-center text-white"> | </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  href={polkaverse}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faRocket} />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  href={twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
