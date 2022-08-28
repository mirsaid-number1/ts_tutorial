import React,{useState} from 'react'
import {useData} from './AuthSystem';
import {useNavigate} from 'react-router-dom';

function Login() {
  let {firebase_respond,Signin,setFirebase_respond} = useData();
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let navigate = useNavigate();
  let inputStyle = {
      height:'2rem',
      width:'100%',
      border:'1px solid blue',
      borderRadius:'15px'
  }

  function login(e) {
    e.preventDefault();
    Signin(email,password);
    setTimeout(() => navigate('/',{replace:true}),1000)

  }
  if(firebase_respond) {
    alert(firebase_respond);
    setFirebase_respond('');
  }
return (
  <div style={
    { maxWidth:'600px',
      minHeight: '300px',
      margin:'0 auto',
      margin:'10rem',
      backgroundColor:'lightblue',
      borderRadius:'15px',
      border:'1px solid blue',
      color:'rgb(3, 107, 252)',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      padding:'10px'
    }
  }>
   
      <h2>Log in...</h2>
      <form onSubmit={login} style={{
        minHeight:'120px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
      }}>
          <label htmlFor='email'><h3>Email:</h3></label><br />
          <input style={inputStyle} type={'email'} id='email' defaultValue={email} name='email' onChange={e => setEmail(e.target.value)} required placeholder='email@gmail.com' /><br />
          <label htmlFor='password'><h3>Password:</h3></label><br />
          <input style={inputStyle} type={'password'} id='password' defaultValue={password} name='password' onChange={e => setPassword(e.target.value)} required placeholder='not less then 6 characters' /><br />
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <button type='sumbit'>Submit</button>
              <button type='reset'>Reset</button>
          </div>
      </form>
  </div>
)
}

export default Login