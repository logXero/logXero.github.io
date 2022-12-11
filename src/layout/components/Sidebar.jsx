import React, { useState } from "react";
import { BsCaretDown } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import user from "../../services/userAuthentication";
import {
  AdminNavOptions,
  StaffNavOptions,
  StudentNavOptions,
} from "./navMenuItems";
import Profile from "../assets/images/profile.jpeg";

const Sidebar = () => {


  return (
    <>
      <div className={` relative`}>
        <div
          className='{` ${
            toggle ? " w-full medium:w-80" : "-translate-x-full extraLarge:translate-x-0  w-0"
          } duration-500 extraLarge:w-80 absolute h-screen bg-inherit flex flex-col justify-between z-50`}'
        >
          {/* <button
            onClick={handleToggle}
            className={` ${
              !toggle
                ? "  -right-16   border-zinc-600"
                : "right-3 border-orange-600"
            } extraLarge:hidden duration-500 absolute top-3 border-2 h-12 w-12 text-xs font-extralight bg-transparent uppercase`}
          >
            {toggle ? "Close" : "Menu"}
          </button> */}
          <div className="mt-56  overflow-x-hidden">
            <Menu />
          </div>
          <div className=" h-28 mx-14 mt-10 overflow-x-hidden">
            <div className="flex justify-start gap-3">
              <div className="h-14 w-14">
                <img
                  src={Profile}
                  className="border-2 border-orange-400 h-full w-full rounded-full object-top  object-cover "
                  alt=""
                />
              </div>
              <div className="h-14 flex flex-col justify-start items-start uppercase font-extralight">
                <p className="text-sm ">Nischal Timalsina</p>
                <p className="text-xs">ID: 12345678SAU</p>
                <button className="font-extralight    text-red-500">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`" h-screen medium:w-[calc(100%-20rem)] left-80 w-fit"} absolute extraLarge:hidden z-50`}></div>
      </div>
    </>
  );
};

export default Sidebar;

const Menu = () => {
  const role = user.role;

  let NavOptions = [];

  if (role === "ADMIN") {
    NavOptions = AdminNavOptions;
  } else if (role === "STAFF") {
    NavOptions = StaffNavOptions;
  } else if (role === "STUDENT") {
    NavOptions = StudentNavOptions;
  }
  return (
    <ul className=" ">
      {NavOptions.map((nav) => (
        <li
          key={nav.id}
          className="flex flex-col justify-between items-start py-2 px-16 font-extralight hover:font-light hover:bg-zinc-200 "
        >
          {nav.url ? (
            <NavLink
              className={({ isActive }) =>
                [
                  ` flex items-center justify-between w-full tracking-widest `,
                  isActive ? " text-orange-600 ease-linear duration-300 " : " ",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to={nav.url}
            >
              {nav.label}
            </NavLink>
          ) : (
            <Button
              array={nav}
              className="w-full flex justify-between items-center"
            >
              <p className=" tracking-widest">{nav.label}</p>
              {nav.subNav && <BsCaretDown />}
            </Button>
          )}

          <ul
            id={`${nav.label}`}
            className="hidden leading-8 h-0  duration-300 overflow-hidden "
          >
            {nav.subNav &&
              nav.subNav.map((subnav, idx) => (
                <li
                  key={idx}
                  className={` first-of-type:mt-3 last-of-type:mb-3 ml-20 px-3 font-extralight hover:font-light hover:bg-zinc-200`}
                >
                  <NavLink
                    className={({ isActive }) =>
                      [
                        `  tracking-widest `,
                        isActive
                          ? " text-orange-600 ease-linear duration-300 "
                          : " ",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                    to={subnav.url}
                  >
                    {subnav.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const Button = ({ array, children, className }) => {
  const element = document.querySelector(`#${array.label}`);

  const showDrop = () => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden", "h-0");
      element.classList.add("h-full");
    } else {
      element.classList.add("hidden", "h-0");
    }
  };
  return (
    <button className={className} onClick={showDrop}>
      {children}
    </button>
  );
};

// const Sidebar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const role = user.role;

//   let NavOptions = [];

//   if (role === "ADMIN") {
//     NavOptions = AdminNavOptions;
//   } else if (role === "STAFF") {
//     NavOptions = StaffNavOptions;
//   } else if (role === "STUDENT") {
//     NavOptions = StudentNavOptions;
//   }

//   return (
//     <>
//       <div
//         className={`relative h-[100vh] top-0 left-0 bg-white   text-gray-600
//         ${
//           !isOpen
//             ? "w-16 -translate-x-full medium:translate-x-0"
//             : "w-full medium:w-64 "
//         }  z-10  duration-300 extraLarge:w-64`}
//       >
//         <div className="p-4 h-16 flex justify-end">
//           {isOpen ? (
//             <button
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               <IoIosClose size={40} />
//             </button>
//           ) : (
//             <button
//               className="fixed top-4 left-full medium:left-0 px-4 z-30 extraLarge:hidden"
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               <IoIosMenu className="" size={35} />
//             </button>
//           )}
//         </div>
//         <div
//           className={` bottom-0 h-[calc(100vh-12rem)]  overflow-x-hidden overflow-y-scroll `}
//         >
//           <ul
//             className={`${
//               !isOpen ? "space-y-0 mt-16" : "mt-16 space-y-1"
//             } duration-200 extraLarge:mt-24`}
//           >
//             {NavOptions.map((nav) => (
//               <li key={nav.id} className="">
//                 <NavLink
//                   onClick={() => {isOpen?
//                     setIsOpen(!isOpen):setIsOpen(isOpen)
//                   }}
//                   to={nav.url}
//                   className={({ isActive }) =>
//                     [
//                       `  flex items-center ${
//                         isOpen ? " justify-start" : "justify-center "
//                       } space-x-4 font-light p-3 extraLarge:justify-start  `,
//                       isActive
//                         ? " text-red-600 ease-linear duration-300 "
//                         : "border-transparent ",
//                     ]
//                       .filter(Boolean)
//                       .join(" ")
//                   }
//                 >
//                   <div
//                     className={`flex items-center gap-3
//                       ${!isOpen ? "justify-center " : "font-light text-lg "}
//                       extraLarge:text-lg `}
//                   >
//                     <div
//                       className={`${
//                         !isOpen ? "text-2xl has-tooltip" : "ml-8 text-2xl"
//                       } extraLarge:ml-8 extraLarge:text-2xl  `}
//                     >
//                       {nav.icon}
//                     </div>
//                     <p
//                       className={` ${
//                         !isOpen ? "hidden" : " block text-sm"
//                       } extraLarge:block extraLarge:text-sm `}
//                     >
//                       {nav.label}
//                     </p>
//                     <label
//                       className={`mb-10 tooltip z-[10000] ${
//                         !isOpen ? "block" : " block"
//                       } extraLarge:hidden ml-48 bg-black/90 px-2 py-1 w-32 text-white  rounded-md flex items-baseline h-8`}
//                     >
//                       <AiFillCaretUp
//                         className="absolute -ml-5 mt-1.5 text-black/90 "
//                         size={31}
//                       />
//                       <p className="w-full text-center">{nav.label}</p>
//                     </label>
//                   </div>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
