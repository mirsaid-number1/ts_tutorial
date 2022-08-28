import React from 'react'
import {useNavigate} from 'react-router-dom'
function About() {
  let navigate = useNavigate();
  return (
    <div style={{textAlign:'center'}}>
      About
      <button onClick={() => {navigate('/')}}>Back to Home</button>
      </div>
  )
}

export default About