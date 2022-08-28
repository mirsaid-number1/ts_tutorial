import React from 'react'
import { notifyManager } from 'react-query';
import {NavLink} from 'react-router-dom';
import {useData} from './AuthSystem'
function Navbar() {
    let {token,Signout} = useData();
    console.log(token)
    let navbar = {
        position:'sticky',
        top:0,
        right:0,
        left:0,
        width:'100%',
        height:'5rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'lightblue',
        fontSize:'20px',
        fontFamily:'sans-serif',
        fontWeight:'400',
        textDecoration:'none',
        color:'blue'
    };
    function navlinkStyle({isActive}) {
        return {
            fontSize:isActive ? '25px' : '20px',
            color: isActive ? 'rgb(68, 204, 235)' : 'blue',
            borderBottom: isActive ? '1px solid rgb(68, 204, 235)' : notifyManager,
        }
    }
  return (
    <div style={navbar}>
        <NavLink to='/' style={navlinkStyle}>Home</NavLink>
        <NavLink to={'/practises'} style={navlinkStyle}>practises</NavLink>
         {token ? <button onClick={Signout}>Sign out</button> :
         <>
            <NavLink to={'/signup'} style={navlinkStyle}>Sign up</NavLink>
            <NavLink to={'/login'} style={navlinkStyle}>Log in</NavLink>
         </>}
    </div>
  )
}

export default Navbar