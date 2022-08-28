import {useState,createContext, useContext} from 'react';

const AuthContext = createContext(null);

function AuthProvider({children}) {
    let [user,setUser] = useState(null);

    const logIn = (user) => {
        setUser(user)
    }

    const logOut = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,logIn,logOut}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider


export const useAuth = () => {
    return useContext(AuthContext);
}