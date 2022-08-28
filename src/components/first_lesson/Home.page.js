import React from 'react'
import {NavLink} from 'react-router-dom'
import './first_style.css'

function Home_page() {

    function hotNavLink({isActive}) {
        return {
            fontSize: isActive ? '25px' : '20px',
            fontWeight: isActive ? '500' : 'bold',
            color: isActive ? 'rgb(0, 106, 255)' : 'grey',
            borderBottom: isActive ? '2px solid rgb(0, 106, 255)' : 'none',
            padding:'15px'
        }
    }

  return (
    <nav className='nav'>
        <NavLink style={hotNavLink} to="ordinaryDataFetching" >Ordinary Data Fetching</NavLink>
        <NavLink style={hotNavLink} to="reactQueryDataFetching" >React Query Data Fetching</NavLink>
        <NavLink style={hotNavLink} to='parallel_queries'>parallel_queries </NavLink>
    </nav>
  )
}

export default Home_page