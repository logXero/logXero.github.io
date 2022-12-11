import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };
  console.log(toggle);
  return (
    <div className='relative w-screen h-screen'>
      <div
        className={` fixed ${
          toggle ? "w-full sm:w-80 " : "w-0 sm:w-24"
        } ease-linear duration-300 bg-gray-150  h-full `}>
        <Sidebar />
      </div>

      <div
        className={`absolute h-full w-full sm:w-[calc(100%-6rem)]  ${
          toggle ? "sm:left-80" : " sm:left-24"
        } ease-linear duration-300`}>
        <Navbar toggle={handleToggle} />
        <div className={`mt-16 h-[calc(100%-4rem)] w-full `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

/* Using React Memo to prevent Unnecessary re-renders */
export default React.memo(Main);
