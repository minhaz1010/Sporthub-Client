import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "All Products", href: "/products" },
    { name: "Manage Products", href: "/manage" },
    { name: "About Us", href: "/about" },
    { name: "Cart", href: "/cart" },
  ];

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <nav className="bg-[#2FCBEE] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Logo"
            />
            <span className="ml-2 text-xl font-bold text-[#010E13]">
              Sportshub
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#010E13] font-semibold"
                    : "text-[#010E13] hover:text-[#1e3a4a] transition-colors duration-200"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
            <div className="relative hidden lg:block">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search (Ctrl+K)"
                className="w-64 px-4 py-2 text-[#010E13] bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#010E13]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-3 text-[#010E13]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-[#010E13] hover:text-[#1e3a4a] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#010E13] lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive
                  ? "text-white bg-[#010E13]"
                  : "text-[#010E13] hover:text-[#1e3a4a] hover:bg-gray-100"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="px-2 pt-2 pb-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-[#010E13] bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#010E13]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;