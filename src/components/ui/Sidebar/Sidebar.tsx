import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NotificationDropdown from '@components/Dropdowns/NotificationDropdown';
import UserDropdown from '@components/Dropdowns/UserDropdown';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState('hidden');
  const router = useRouter();
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
          <Link href="/" legacyBehavior>
            <a
              href="#pablo"
              className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-slate-600 md:block md:pb-2"
            >
              Notus NextJS
            </a>
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
                  <Link href="/" legacyBehavior>
                    <a
                      href="#pablo"
                      className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-slate-600 md:block md:pb-2"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/admin/dashboard" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/dashboard') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-tv mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/dashboard') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/settings') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-tools mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/settings') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    Help You Grow
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/tables') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-table mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/tables') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    You help grow
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/maps') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-map-marked mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/maps') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    Maps
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/maps" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/maps') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-map-marked mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/maps') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    Statistics
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/maps" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/maps') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-map-marked mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/maps') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    Messages
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/maps" legacyBehavior>
                  <a
                    href="#pablo"
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/maps') !== -1
                        ? 'text-sky-500 hover:text-sky-600'
                        : 'text-slate-700 hover:text-slate-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-map-marked mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/maps') !== -1
                          ? 'opacity-75'
                          : 'text-slate-300')
                      }
                    ></i>{' '}
                    Notifications
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/auth/login" legacyBehavior>
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
                  >
                    <i className="fas fa-fingerprint mr-2 text-sm text-slate-400"></i>{' '}
                    Theme
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register" legacyBehavior>
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
                  >
                    <i className="fas fa-clipboard-list mr-2 text-sm text-slate-300"></i>{' '}
                    Emoji
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register" legacyBehavior>
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
                  >
                    <i className="fas fa-clipboard-list mr-2 text-sm text-slate-300"></i>{' '}
                    Footer Links
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
