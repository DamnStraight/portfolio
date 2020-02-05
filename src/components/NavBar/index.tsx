import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center p-6 absolute font-roboto font-bold">
      {/* <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white hover:border-white justify-end">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="w-full block flex-grow flex space-between justify-center lg:justify-end uppercase">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white mr-12"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white mr-12"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
        >
          Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
