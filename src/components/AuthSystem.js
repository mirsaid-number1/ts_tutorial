import React,{createContext,useContext,useEffect,useState} from 'react';
import {getAuth,
        createUserWithEmailAndPassword,
        signOut,
        signInWithEmailAndPassword,
        onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const CreatedContext = createContext();
const auth = getAuth()

function AuthSystem({children}) {
let [name,setName] = useState('');
let [email,setEmail] = useState('');
let [password,setPassword] = useState('');
let [token,setToken] = useState('');
let [firebase_respond,setFirebase_respond] = useState('');
let navigate = useNavigate();
console.log(name,email,password);

function Signup(name,email,password) {
    createUserWithEmailAndPassword(auth,email,password).then(cred => {
        setEmail(email);
        setName(name);
        setPassword(password);
        console.log('user:' + cred.user);
        console.log(cred.user.accessToken) ;
        setFirebase_respond('User has been signed up successfully');
        navigate('/login');
    }).catch(err => {
        setFirebase_respond(err.message);
    })
}

useEffect(() => {
    onAuthStateChanged(auth,(user) => {
        console.log(user);
        setToken(user.accessToken);
    })    
},[])

function Signin(email,password) {
    signInWithEmailAndPassword(auth,email,password).then(cred => {
        setFirebase_respond('User has been signed in successfully');
        navigate('/');
    }).catch(err => {
        setFirebase_respond(err.message);
    })
}

function Signout() {
    signOut(auth).then(() => {
        setFirebase_respond('user exited from server');
        setToken('');
    })
    .catch(err => {
        setFirebase_respond('couldn\'t sign out;  ' +  err.message);
    })
}


return (
    <CreatedContext.Provider value={{email,password,token,Signup,name,firebase_respond,Signout,Signin,setFirebase_respond}}>{children}</CreatedContext.Provider>
  )
}

export default AuthSystem;

export const useData = () => { return useContext(CreatedContext) };