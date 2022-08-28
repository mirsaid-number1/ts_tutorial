import React from 'react'
import {useParams} from 'react-router-dom'
function UserDetails() {
    let params = useParams();
    let userId = params.userId;
  return (
    <div>
        UserDetails <br/>
        user#{userId}

    </div>
  )
}

export default UserDetails