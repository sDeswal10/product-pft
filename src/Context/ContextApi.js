import { createContext, useContext, useState } from "react";

export const Context = createContext();
export const useAuthContext = ()=>{
    return useContext(Context);
}

export const AppContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("token")) || null);    
    return(
        <Context.Provider value={{authUser, setAuthUser}}>
            {children}
        </Context.Provider>
    )
}