
import React from 'react';

const NavItem = () => {
  const nav = [
    { title: 'Collections', to: '' },
    { title: 'Men', to: '' },
    { title: 'Women', to: '' },
    { title: 'About', to: '' },
    { title: 'Contact', to: '' },
  ];

  return (
    <>
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {nav.map((e, index) => {
          return (
            <li key={index}>
              <a
                href="#"
                className="block font-bold md:font-normal text-gray-800 py-2 mx-1 hover:border-b-4 hover:border-b-primary-900 md:text-secondary-800 md:bg-transparent"
                aria-current="page"
              >
                {e.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItem;