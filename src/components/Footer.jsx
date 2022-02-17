import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-20">
      <div className="wrapper grid justify-center md:justify-start items-center md:grid-cols-12 md:gap-y-10">
        <div className="logo-header md:order-1 md:col-span-6">
          <img src="images/logo.svg" className="mx-auto md:m-0" alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:col-span-6 mt-10 items-center md:m-0 md:order-3">
          <a href="#" className="nav-link !text-white">
            About
          </a>
          <a href="#" className="nav-link !text-white">
            Careers
          </a>
          <a href="#" className="nav-link !text-white">
            Events
          </a>
          <a href="#" className="nav-link !text-white">
            Products
          </a>
          <a href="#" className="nav-link !text-white">
            Support
          </a>
        </div>
        <div className="flex items-center md:col-span-6 justify-center md:justify-end gap-6 md:m-0 mt-16 md:order-2">
          <a href="#" className="nav-link">
            <img src="images/icon-facebook.svg" alt="" />
          </a>
          <a href="#" className="nav-link">
            <img src="images/icon-twitter.svg" alt="" />
          </a>
          <a href="#" className="nav-link">
            <img src="images/icon-instagram.svg" alt="" />
          </a>
          <a href="#" className="nav-link">
            <img src="images/icon-pinterest.svg" alt="" />
          </a>
        </div>
        <p className="text-dark-gray md:text-right md:col-span-6 font-alata mt-6 text-center md:m-0 md:order-4">
          {" "}
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
