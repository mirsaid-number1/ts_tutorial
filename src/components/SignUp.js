import React from 'react'
import {useData} from './AuthSystem';
import {useNavigate} from 'react-router-dom';
function SignUp() {
    let {Signup,firebase_respond,setFirebase_respond} = useData();
    let navigate = useNavigate();
    let inputStyle = {
        height:'2rem',
        width:'100%',
        border:'1px solid blue',
        borderRadius:'15px'
    }
    function submitForm(e) {
        e.preventDefault();
        Signup(e.target[0].value,e.target[1].value,e.target[2].value);
        setTimeout(() => navigate('/login',{replace:true}),1000)
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
     
        <h2>Sign up...</h2>
        <form onSubmit={submitForm} style={{
          minHeight:'120px',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-around'
        }}>
            <label htmlFor='name'><h3>Name</h3></label><br />
            <input style={inputStyle} type={'text'} id='name' name='name' placeholder='optional parameter' /><br />
            <label htmlFor='email'><h3>Email:</h3></label><br />
            <input style={inputStyle} type={'email'} id='email' name='email' required placeholder='email@gmail.com' /><br />
            <label htmlFor='password'><h3>Password:</h3></label><br />
            <input style={inputStyle} type={'password'} id='password' name='password' required placeholder='not less then 6 characters' /><br />
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <button type='sumbit'>Submit</button>
                <button type='reset'>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp