import React from "react";
import { useEffect, useState, useRef } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import profilepic from "../imgs/unemployable.png";

function PersonalNavBar() {
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/login");
  };

  const handlerHome = () => {
    navigate("/");
  };

  const handlerListings = () => {
    navigate("/listings");
  };

  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <p
            onClick={handlerHome}
            className="ml-2 flex items-center hover:cursor-pointer"
          >
            <img src={logo} className="mr-1 h-6 sm:h-3" alt="nike Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              ShoeDog
            </span>
          </p>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={profilepic}
                alt="profile-pic"
              />
            </button>
            {/* <!-- Dropdown menu --> */}

            <div
              className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li onClick={handlerHome}>
                <span className="block py-2 pr-4 pl-3 text-gray-300  md:p-0 md:hover:text-white hover:cursor-pointer">
                  Home
                </span>
              </li>
              <li>
                <span
                  onClick={handlerListings}
                  className="block py-2 pr-4 pl-3 text-gray-300  md:p-0 md:hover:text-white hover:cursor-pointer"
                >
                  Browse
                </span>
              </li>
              <li>
                <span className="block py-2 pr-4 pl-3 text-gray-300 text-md md:p-0 md:hover:text-white hover:cursor-pointer">
                  Alerts
                </span>
              </li>
              <li>
                <span className="block py-2 pr-4 pl-3 text-gray-300  md:p-0 md:hover:text-white hover:cursor-pointer">
                  Help
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default PersonalNavBar;
