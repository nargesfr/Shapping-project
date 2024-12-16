import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();


const initialValue =
JSON.parse(sessionStorage.getItem("authentication")) || null;
const AuthContextProvider = ({ children }) => {
    const [auth ,setAuth] = useState (initialValue);

    useEffect(() => {
      sessionStorage.setItem("authentication", JSON.stringify(auth));
    }, [auth]);

  return (
    <AuthContext.Provider value={{ auth ,setAuth }}>
        { children }
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
