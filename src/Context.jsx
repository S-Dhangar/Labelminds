import React, { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loader, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider value={{loader,startLoading,stopLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };