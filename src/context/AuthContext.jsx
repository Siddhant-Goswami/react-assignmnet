import React, { useState, useContext } from "react";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(false);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
