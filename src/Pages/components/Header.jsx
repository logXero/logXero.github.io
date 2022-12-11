import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Banner, Logo } from "../assets/images/headerImages";
import MenuIcon from "../assets/svg/Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className='relative flex items-center  w-full h-24 lg:h-32 ease-in-out duration-100 bg-inherit border-b xl:px-32 px-10'>
      <div className=' h-16 w-20 lg:w-56 flex items-center ease-in-out duration-100'>
        <img
          src={Banner}
          alt=''
          className='h-12 object-cover hidden lg:block'
        />
        <img src={Logo} alt='' className='h-full object-cover lg:hidden' />
      </div>
      <NavList toggle={toggle} />
      <button
        className=' ml-auto z-50 sm:hidden space-y-1.5'
        onClick={toggleNav}>
        <div
          className={`${
            toggle ? "rotate-45 translate-y-1 duration-300" : "duration-300"
          }   w-8 h-0.5 bg-black`}></div>
        <div
          className={`${
            toggle ? " hidden" : "block delay-300 duration-300"
          } w-6 h-0.5 bg-black`}></div>
        <div
          className={`${
            toggle ? "-rotate-45 -translate-y-1 duration-300" : "duration-300"
          }  w-8 h-0.5 bg-black`}></div>
      </button>
    </nav>
  );
};

export default Header;

const NavList = ({ toggle }) => {
  const mobileClass =
    "absolute  bg-white/60 backdrop-blur-lg w-screen h-screen font-light text-2xl flex flex-col justify-center items-start gap-8 p-20  z-50 ";
  const defaultClass =
    "hidden sm:flex gap-8 lg:gap-16 items-center ml-8 lg:ml-16 w-[calc(100%-5rem)] lg:w-[calc(100%-14rem)]  ";

  return (
    <ul
      className={`${
        toggle ? `${mobileClass} enterfromleft top-0 right-0` : defaultClass
      } `}>
      <li className=''>
        <NavLink to={"/features"}>Features</NavLink>
      </li>{" "}
      <li className=''>
        <NavLink to={"/features"}>Testimonials</NavLink>
      </li>{" "}
      <li className=''>
        <NavLink to={"/features"}>Pricing</NavLink>
      </li>
      <li className='sm:ml-auto'>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li
        className={`${
          toggle ? "" : " text-center"
        } h-14  flex items-center px-4 lg:px-8 -translate-x-4 rounded-full bg-gray-300`}>
        <NavLink className='w-full' to={"/register"}>
          Get Started <span className='hidden lg:inline'>Today</span>
        </NavLink>
      </li>
    </ul>
  );
};
