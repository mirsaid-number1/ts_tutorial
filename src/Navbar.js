import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './components/Auth'
function Navbar() {
  function navLinkStyles({isActive}) {
    return {
      textDecoration: 'none',
      borderBottom: isActive ? '3px solid rgb(0, 106, 255)' : 'none',
      color: isActive ? 'rgb(0, 106, 255)' : 'black',
      fontWeight: isActive ? '900' : '450',
      fontSize: isActive ? '25px' : '20px',
      fontFamily: 'sans-serif',
    }
  }
  let data = useAuth();
  return (
    <nav className='navbar'>
        <NavLink style={navLinkStyles} to={'/'}>Home page</NavLink>
        <NavLink style={navLinkStyles} to={'/about'}>About page</NavLink>
        <NavLink style={navLinkStyles} to={'/products'}>Products page</NavLink>
        <NavLink style={navLinkStyles} to={'/profile'}>Profile</NavLink>
        
        {!data.user ? <NavLink style={navLinkStyles} to={'/login'}>login</NavLink> : null}
    </nav>
  )
}

export default Navbar