import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { github, linkedin, links, twitter } from '@utils/links';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-fuchsia-200 pt-8 pb-6">
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
              className="fill-current text-fuchsia-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">
                Let&apos;s keep in touch!
              </h4>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-sky-400 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <Link href={twitter} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-slate-800 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <Link href={github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-slate-500">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
                        href={links}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Other Links
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-slate-500">
                Copyright © {new Date().getFullYear()} SubTips by{' '}
                <a
                  href="https://twitter.com/andriishupta"
                  className="text-slate-500 hover:text-slate-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  Andrii Shupta
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
