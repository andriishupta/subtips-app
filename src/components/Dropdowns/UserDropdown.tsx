import { useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef<HTMLAnchorElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="block text-slate-500"
        href="@components/Dropdowns/UserDropdown#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm text-white">
            <img
              alt="..."
              className="w-full rounded-full border-none align-middle shadow-lg"
              src="/img/andriishupta.png"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
      >
        <a
          href="@components/Dropdowns/UserDropdown#pablo"
          className={
            'block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="@components/Dropdowns/UserDropdown#pablo"
          className={
            'block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="@components/Dropdowns/UserDropdown#pablo"
          className={
            'block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="my-2 h-0 border border-solid border-slate-100" />
        <a
          href="@components/Dropdowns/UserDropdown#pablo"
          className={
            'block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
