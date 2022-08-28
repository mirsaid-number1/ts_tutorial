import React,{useState} from 'react'
import {useAuth} from './Auth';
import {useNavigate} from 'react-router-dom';
function Login() {
    let [username, setUserName] = useState('');
    const data = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        data.logIn(username);
        navigate('/')
    }
    return (
    <div style={{textAlign:'center'}}>
        <h2>Login</h2>
        <label htmlFor='input'>username</label>
        <input type={'text'} id='input' placeholder='type>>>' onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>    
    </div>
  )
}

export default Login