import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from './Auth'
function ProfileCheck({children}) {
    let {user} = useAuth();

    if(!user) {
        return <Navigate to={'/login'} />
    }
  return children
}

export default ProfileCheck