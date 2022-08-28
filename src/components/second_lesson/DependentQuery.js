import React, { useState,useRef } from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

function DependentQuery() {
    let [userNum,setUserNum ] = useState({id:1,courseID:''});
    let {data:users} = useQuery('users-list',() => {
        return axios.get('http://localhost:4000/users')
    })
    let {data:course} = useQuery(['user-courses', userNum.courseID],() => {
        return axios.get(`http://localhost:4000/channels/${userNum.courseID}`)
    },{enabled: !!userNum.courseID});
    
    console.log(course?.data.courses);
    
    let users_style = {
        display:'flex',
        alignItems:'center',
        width:'50%',
        justifyContent:'space-around',
        margin:'0 auto'
    }
    let user_style = {
        padding:'10px',
        backgroundColor:'grey',
        color:'white',
        fontSize:'20px',
        fontWeight:'600',
        margin:'10px'
    }
    let channel_style = {
        display:'flex',
        alignItems:'center',
        width:'80%',
        justifyContent:'space-around',
        margin:'0 auto',
        backgroundColor:'grey',
        color:'white'
    }
  return (
    <div>
        <div style={users_style}>
            {users?.data.map(user => {
                return <div style={user_style} key={user.id} onClick={() => {setUserNum({id:user.id - 1,courseID:user.courseID})}}> 
                   {user.id}. {user.name}
                </div>
            })}
        </div>
        <div style={channel_style}>
            <div>
                <h2>{users?.data[userNum.id].name}</h2><br />
                <div><h3>{users?.data[userNum.id].phoneNumber}</h3><h3>{users?.data[userNum.id].email}</h3></div>
                <div>{course?.data.courses.map(item => <span key={item}>{item}</span>)}</div>
            </div>
        </div>
    </div>
  )
}

export default DependentQuery