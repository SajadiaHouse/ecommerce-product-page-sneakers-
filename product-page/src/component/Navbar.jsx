import React, { useState } from 'react';
import Cart from './Cart';
import NavItem from './NavItem';

const Navbar = ({ cart, setcart }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  }
  return (
    <>
      <nav className="bg-white border-secondary-700 md:h-16 md:border-b-2 md:mt-6">
        <div className="max-w-screen-xl flex flex-wrap flex-row">
          <button
            className="inline-flex items-center self-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show={drawerVisible}
            aria-controls="drawer-example"
            onClick={toggleDrawer}
          >
            <img src="./images/icon-menu.svg" alt="" />
          </button>
          <a href="/" className="flex items-center">
            <img src="./images/logo.svg" className="h-4 mr-6" alt="Sneaker Logo" />
          </a>
          <div className={`items-center hidden justify-between w-full md:flex md:w-auto`}>
            <NavItem />
          </div>
          <div
            id="drawer-example"
            className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform md:hidden ${drawerVisible ? '' : '-translate-x-full'
              } bg-white w-80 dark:bg-gray-800`}
            tabIndex="-1"
            aria-labelledby="drawer-label"
          >
            <NavItem />
            <button
              type="button"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
              onClick={toggleDrawer}
            >
             <img src="./images/icon-close.svg" alt="" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="flex items-center ml-auto">
            <div className="group relative align-middle text-center blok  hover:font-semibold">
              <img className="w-5 h-5 mr-5" src="./images/icon-cart.svg" alt="user photo" />
              {cart.length > 0 ? (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-0 dark:border-gray-900">
                  {cart.length}
                </div>
              ) : (
                ''
              )}
              <div className="bg-white shadow-2xl p-6 w-[300px] rounded-xl top-5 -right-14 h-auto absolute invisible group-hover:visible z-50">
                <Cart cart={cart} setcart={setcart} />
              </div>
            </div>
            <div className="ml-3 h-12 w-12 hover:border border-spacing-2 rounded-full hover:border-primary-900">
              <img src="./images/image-avatar.png" alt="" className="object-fill" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;