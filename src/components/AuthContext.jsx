import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminAuthenticated") === "true";
    const name = localStorage.getItem("adminName");

    setIsAdminAuthenticated(loggedIn);
    if (name) setAdminName(name);
  }, []);

  const loginAdmin = (name, email) => {
    setIsAdminAuthenticated(true);
    setAdminName(name);

    localStorage.setItem("isAdminAuthenticated", "true");
    localStorage.setItem("adminName", name);
    localStorage.setItem("adminEmail", email);
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    setAdminName("");

    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminEmail");
  };

  return (
    <AuthContext.Provider value={{ isAdminAuthenticated, adminName, loginAdmin, logoutAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
