import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = (props) => {
    const [data,setData]=useState('');
  return (
    <>
      <AuthContext.Provider value={{data,setData}}>
        {props.children}
        </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
