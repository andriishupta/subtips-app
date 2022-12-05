import Link from 'next/link';
import { useState } from 'react';
import { SignInButton } from '@components/SignInButton/SignInButton';
import { useWeb3 } from '@web3/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isReady, activeUser, subsocialApi, error } = useWeb3();
  console.log('active user from navbar:', activeUser);

  return (
    <>
      <nav className="navbar-expand-lg absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link href="/" legacyBehavior>
              <a
                className="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
                href="@components/ui/Navbars/AuthNavbar#pablo"
              >
                SubTips{' '}
                {subsocialApi ? (
                  ' 🟢'
                ) : error ? (
                  ' 🔴'
                ) : (
                  <>
                    {' '}
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  </>
                )}
              </a>
            </Link>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-white"></i>
            </button>
          </div>
          <div
            className={
              'flex-grow items-center bg-white lg:flex lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
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
                  <SignInButton />
                </li>
              )}

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faRocket} />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-auth-navbar"
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
