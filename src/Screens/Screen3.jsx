import React from 'react'
import { Link } from 'react-router-dom'

function Screen3() {
  return (
    <>
      <div className="screen1_base">
        <h3>Hope you Enjoyed the Session</h3>
        <div className="feedback">
          <h4>Feel Free to Give the Feedback</h4>
          <textarea name="" id="" cols={50}  rows={5} ></textarea>
        </div>
        <div className="rating">
          <p>Please Provide the Rating</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div>
          <button><Link to={'/'}>Return to Home</Link></button>
        </div>
      </div>
    </>
  )
}

export default Screen3
