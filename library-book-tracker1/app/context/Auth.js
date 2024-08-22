import { createContext, useState} from "react";
import axios from "axios";

    // 1. create the context
    
    export const AuthContext = createContext();
    
    //2. create the context wrapper
    
    export default function AuthWrapper({children}) {
    
    const [globalLoginState, setGlobalLoginState] = useState({
    
    tokens: null,
    
    login
    
    })
    
    async function login(userInfo) {
    
    // send req to backend
    
    const url = 'http://127.0.0.1:8000/api/token/'
    
    const res = await axios.post(url, userInfo)
    
    setGlobalLoginState({
    
    tokens : res.data,
    
    login
    })
    
    }
    
    return (
    <>
    <AuthContext.Provider value={globalLoginState}>
    {children}
    
    </AuthContext.Provider>
    
    </>
    )
    }