import React, { useState, useContext, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useLocalStorage("profile", null);
  const [isAuthenticated, setIsAuthenticated] = useState(profile !== null);
  const handleAuth = (result, authProfile) => {
    if (result === true) {
      setProfile(authProfile);
    } else {
      setProfile(null);
    }
    setIsAuthenticated(result);
  };
  const auth = { isAuthenticated, profile };
  const data = [auth, handleAuth];

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
