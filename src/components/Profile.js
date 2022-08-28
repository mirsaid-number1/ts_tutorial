import React from 'react'
import {useAuth} from './Auth';
import {useNavigate} from 'react-router-dom';

function Profile() {
  let data = useAuth();
  let navigate = useNavigate();

  function handleLogout() {
    data.logOut();
    navigate('/');
  }
  return (
    <div>
      <div><h2>Welcome {data.user}</h2> <button onClick={handleLogout}>click to exit</button></div> 
    </div>
  )
}

export default Profile