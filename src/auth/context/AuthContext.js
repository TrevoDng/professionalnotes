import React, {createContext, useContext, useEffect, useReducer} from "react";
import AuthReducer from "./AuthReducer";
 
export const INTIAL_STATE = {
    currentUser: (() => {
      const userData = JSON.parse(localStorage.getItem("todoappUserData"));
      return userData && userData.username && userData.email ? userData : null;
    })(),
  };

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

    useEffect(() => {
        localStorage.setItem("todoappUserData", JSON.stringify(state.currentUser));
        console.log(state.currentUser);
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};
