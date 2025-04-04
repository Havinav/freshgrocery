import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PathUtils from "../pages/PathUtils";
import Cards from "../pages/Cards";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      <nav class="bg-blue-500 border-gray-200 dark:bg-gray-900 fixed top-0 w-full">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to={PathUtils.DASH}
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://deowl.co/wp-content/uploads/2020/10/FreshGrocery-logo.jpg"
              className="h-8 rounded-lg"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FreshGrocery
            </span>
          </Link>
          <div class="flex font-bold font-2xl items-center space-x-3 rtl:space-x-reverse">
            <Link
              to={PathUtils.SEARCH}
              class=" text-white dark:text-blue-500 hover:underline"
            >
              Search
            </Link>
            <span className="text-white dark:text-blue-500 hover:underline">
              {isLoggedIn ? (
                <Link to={PathUtils.DETAILS}>Gopal</Link>
              ) : (
                <div>Login</div>
              )}
            </span>
            <Link
              title="FreshGrocery | cart"
              to={PathUtils.CART}
              type="button"
              class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaCartShopping />

              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                0
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
