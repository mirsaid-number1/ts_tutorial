import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
function Products() {

  function navLinkStyles({isActive}) {
    return {
      textDecoration: 'none',
      borderBottom: isActive ? '3px solid rgb(0, 106, 255)' : 'none',
      color: isActive ? 'rgb(0, 106, 255)' : 'black',
      fontWeight: isActive ? '900' : '450',
      fontSize: isActive ? '20px' : '16px',
      fontFamily: 'sans-serif',
    }
  }

  return (
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
        <h2>Products</h2>
        <input type={'text'} placeholder='search for items...' />
    </div>
        <nav className='product_nav'>
            <NavLink style={navLinkStyles} to="featured">Featured Items</NavLink>
            <NavLink style={navLinkStyles} to="new">New Items</NavLink> 
        </nav>
        <Outlet />
        </>
  )
}

export default Products