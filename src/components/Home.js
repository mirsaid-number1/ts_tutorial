import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
  let navigate = useNavigate();
  return (
    <div style={{textAlign:'center'}}> 
    Home
    <button onClick={() => navigate('orderConfirmed',{replace:true})}>
      Click to order
    </button>
    <button onClick={() => navigate('/about',{replace:true})}>
      About
    </button>
    </div>
  )
}

export default Home