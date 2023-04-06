import { useState } from "react";const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === false) setOpen(true);
    else setOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <img src="/images/logo.png" alt="logo" />
          <div className="pl-10 r-2 hidden lg:block">
            <div className="flex items-center gap-5">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Pages</a>
              <a href="#">News</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:block">
            <a href="#" className="theme-btn mr-2 md:px-5 md:py-4">
              CONSULTANCY <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 border-2 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            onClick={handleClick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {open ? (
        <div className="flex flex-col md:hidden items-end">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="/">
            About
          </a>
          <a className="nav-item" href="/">
            Services
          </a>
          <a className="nav-item" href="/">
            Pages
          </a>
          <a className="nav-item" href="/">
            News
          </a>
          <a className="nav-item" href="/">
            Contact
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
