import React, { useEffect } from "react";
import {
  animateHamBtnClose,
  animateHamBtnOpen,
  animateMobMenuOpen,
  animateMobMenuClose,
  animateHeader,
} from "../features/animation";
import { useState } from "react";
const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const toggleMobMenu = () => {
    if (isMobMenuOpen) {
      animateMobMenuClose();
      animateHamBtnOpen();
      setIsMobMenuOpen(false);
      document.body.classList.remove("overflow-hidden");
    } else if (!isMobMenuOpen) {
      animateHamBtnClose();
      animateMobMenuOpen();
      setIsMobMenuOpen(true);
      document.body.classList.add("overflow-hidden");
    }
  };
  useEffect(() => {
    animateHeader();
  }, []);
  return (
    <header className="bg-hero-img-mob md:bg-hero-img-desk pb-72 pt-8">
      <div className="wrapper ">
        <div className="flex items-center justify-between">
          <div className="logo-header relative z-20">
            <img className="" src="images/logo.svg" alt="" />
          </div>
          <nav>
            <button
              onClick={toggleMobMenu}
              className={`ham-btn block md:hidden relative z-20`}
            >
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
            </button>
            <div
              className={`mob-menu h-0 fixed z-10 flex inset-0 bg-black overflow-hidden
               md:relative md:!h-full md:bg-transparent md:overflow-visible`}
            >
              <ul className="wrapper md:w-full md:max-w-none md:flex-row flex flex-col gap-4 md:gap-6  justify-center">
                <li className="nav-link-li">
                  <a className="nav-link  " href="#">
                    About
                  </a>
                </li>
                <li className="nav-link-li">
                  <a className="nav-link " href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-link-li">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </li>
                <li className="nav-link-li">
                  <a className="nav-link " href="#">
                    Products
                  </a>
                </li>
                <li className="nav-link-li">
                  <a className="nav-link " href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <h1
          className="immersive-exp text-white text-4xl sm:text-6xl
         font-extralight uppercase mt-44 border-2 p-6 max-w-lg"
        >
          Immersive experiences that deliver
        </h1>
      </div>
    </header>
  );
};

export default Header;
