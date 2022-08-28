import React from 'react'
import {useNavigate} from 'react-router-dom'
function OrderConfirmed() {
    let navigate = useNavigate();
  return (
    <div>
        OrderConfirmed
        <button onClick={() => {navigate(0)}}>
            Back to google page
        </button>
        </div>
  )
}

export default OrderConfirmed