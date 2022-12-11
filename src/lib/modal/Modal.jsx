import ReactDom from "react-dom";
import React, { useContext } from "react";
import ToggleProvider, { ToggleContext } from "../context/toggleContext";

export const Modal = ({ children }) => {
  return (
    <ToggleProvider>
      <div>{children}</div>
    </ToggleProvider>
  );
};

export const ModalToggle = ({className, children }) => {
  const { toggleExpand } = useContext(ToggleContext);

  return <button className={`${className}`} onClick={toggleExpand}>{children}</button>;
};

export const ModalBody = ({ className, children }) => {
  const { expand, toggleExpand } = useContext(ToggleContext);

  if (expand)
    return ReactDom.createPortal(
      <div onClick={toggleExpand} className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-black/80 z-[500] flex justify-center items-center ">
        <div className={` relative bg-white ${className}`}>
          {children}
         
         
        </div>
      </div>,
      document.getElementById("portal")
    );
};
export const ModalContent = ({className, children }) => {
  return <div className={`${className}`}>{children}</div>;
};
