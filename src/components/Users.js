import React from 'react'
import {Outlet,useSearchParams} from 'react-router-dom'
function Users() {
  const [searchParams,setSearchParams] = useSearchParams();
  const activeUsers = searchParams.get('filter') === 'active';


  return (
    <div>
        <h2>Users</h2>
    <h3>User 1</h3>
    <h3>User 2</h3>    
    <h3>User 3</h3>    
    <Outlet />
    <div>
      <button onClick={() => setSearchParams({filter:'active'})}>Show active users</button>
      <button onClick={() => setSearchParams({})}>reset filter</button>
      {activeUsers ? <h2>Here is active users</h2> : <h2>All users here</h2>}
    </div>
    </div>
  )
}

export default Users