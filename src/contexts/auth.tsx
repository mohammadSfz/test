import React, { createContext, useEffect, useState } from 'react';

import {Api} from '../../utils/Api';
import { useCookies } from 'react-cookie';



type ContextType = {
    auth?: any;
    login: (value: any) => void;
    logout: () => void;
};

type ProviderType = {
    children?: any;
};

export const Context = createContext<ContextType>({
    auth: undefined,
    login: () => { },
    logout: () => { },
  
});




const AuthProvider: React.FC<ProviderType> = ({ children }) => {
    //hooks
    const [cookies, setCookie] = useCookies(['TOKEN']);

    //state
    const [auth, set] = useState<any>();
    //function
    const logout = () =>{
        set(undefined);
      
    }
    const updateProfile = (data:any)=>{
        set({ status: "SIGNED_IN", user: { ...data } })
    }
    const login = async(data:any) =>{
     
        await setCookie('TOKEN', data);
        set({ status: "SING_IN", ...data })     
    
    }
    useEffect(()=>{
       if(cookies.TOKEN){
        set({ status: "SING_IN", token: cookies.TOKEN})  
       } 
    },[]);

    return (
        <Context.Provider
            value={{
                auth, login, logout
            }}
        >
            {children}
        </Context.Provider>
    );
};



export const useAuth = () => React.useContext(Context);

export default AuthProvider;
