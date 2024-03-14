import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const NavLinks = [
    { name: "Home" },
    { name: "Features" },
    { name: "Community" },
    { name: "Blog" },
    { name: "Pricing" },
  ];

  const [mobile, setmobile] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-400 hover:text-gray-200 border-[1px] "
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setmobile(!mobile);
                }}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={`${
                      mobile
                        ? "M6 18L18 6M6 6l12 12"
                        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }`}
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <a className="text-[24px]">
                  P<span className="text-[orange]">cl</span>
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block m">
                <div className="flex space-x-4">
                  {NavLinks.map((item) => (
                    <a
                      href="#"
                      className="text-[12px] text-[#4D4D4D] px-3 font-semibold py-3 rounded-md hover:bg-[#e2e2e2]"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button className="py-3 px-[20px] rounded-md flex text-[12px] font-semibold items-center bg-[#4CAF4F] text-white">
                    Register Now <FaArrowRight className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${mobile ? "" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {NavLinks.map((item) => (
              <a
                href="#"
                className="text-[12px] text-[#4D4D4D] block px-3 py-3 font-semibold rounded-md hover:bg-[#e2e2e2]"
              >
                {item.name}
              </a>
            ))}
            <button className="py-3 px-[20px] rounded-md flex text-[12px] font-semibold items-center bg-[#4CAF4F] text-white">
              Register Now <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
