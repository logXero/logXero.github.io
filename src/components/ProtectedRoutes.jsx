import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { NotFound } from "../Pages";
import NotPermitted from "../Pages/NotPermitted";

const CheckPermission = (user, token) => {
  const [auth] = useAuth();
  const hasAccess = () => {
    if (auth.isAuthenticated !== token || auth.profile !== user) {
      return false;
    }
    return true;
  };
  const isActive = ()=>{
	if (!auth.profile.isActive) {
		return false;
	  }
	  return true;
  }
 
  return { hasAccess, isActive};
};

export const ProtectedRoutes = (props) => {
  const { name, type } = props;
  const { hasPermission } = CheckPermission(name, type);
  return hasPermission ? <Outlet /> : <Navigate to={"/login"}></Navigate>;
};
