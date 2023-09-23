import logo from "@/assets/images/logo.svg";
import menuIcon from "@/assets/images/icon-menu.svg";
import menuIconClosed from "@/assets/images/icon-menu-close.svg";
import { useState } from "react";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <section className="flex MOBILE-MENU lg:hidden">
            <button>
              <img
                src={menuIcon}
                alt="menu-icon"
                onClick={() => handleNavOpen()}
              />
            </button>
            <div
              className={`fixed top-0  w-2/3 flex flex-col items-start h-full gap-24 bg-[#FFFDFA] left-1/3 transition-all ${
                isNavOpen ? " translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-row justify-end w-full h-auto mt-10 px-7">
                <button>
                  <img
                    src={menuIconClosed}
                    alt="menu-icon-closed"
                    onClick={() => handleNavOpen()}
                  />
                </button>
              </div>
              <ul className="flex flex-col items-start justify-between gap-6 px-7 NAVIGATION-MOBILE-OPEN">
                <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
                  <a href="/home">Home</a>
                </li>
                <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
                  <a href="/new">New</a>
                </li>
                <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
                  <a href="/popular">Popular</a>
                </li>
                <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
                  <a href="/trending">Trending</a>
                </li>
                <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
                  <a href="/categories">Categories</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
            <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
              <a href="/home">Home</a>
            </li>
            <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
              <a href="/new">New</a>
            </li>
            <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
              <a href="/popular">Popular</a>
            </li>
            <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
              <a href="/trending">Trending</a>
            </li>
            <li className="capitalize font-inter text-[#5D5F79] hover:text-[#F15E50]">
              <a href="/categories">Categories</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
