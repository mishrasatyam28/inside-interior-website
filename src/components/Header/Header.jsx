import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";

const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Work",
    link: "/work",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to={"/"}>
            <img src="./Inside.png" className="size-24" alt="" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8 ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `text-base font-medium text-black ${
                      isActive
                        ? "text-black bg-[#0fa3b1] rounded-md p-3"
                        : "hover:bg-[#e9edc9] p-3  hover:text-black hover:duration-500 rounded-md"
                    }`
                  }
                >
                  <span className="">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block"></div>
        <div className="lg:hidden">
          <CgMenuLeftAlt
            color="black"
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-3 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-zinc-300 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img src="./Inside.png" className="size-16" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <IoIosClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-black">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
