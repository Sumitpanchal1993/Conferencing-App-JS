import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Screen3.css'

function Screen3() {
  const [feedback, setFeedback] = useState()
  

  function submitFeedback (){
      let videoRating = '3';
      let audioRating = '4';
      let textFeedback = document.getElementById('userFeedback').value
      return setFeedback({
        videoRating,
        audioRating,
        textFeedback
      })
  }
   console.log(feedback)

  return (
    <>
      <div className="screen3_base flexWraper">
        <h1>Thanks For Yor Attention</h1>
        <h2>Hope you Enjoyed the Session</h2>
        <h3>How was the Live Streaming Experience ?</h3>
        <div className="rating flexWraper">
          <div>
          <p>Rate the Video Quality</p>
          <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div>
          <p>Rate the Audio Quality</p>
          <p>⭐⭐⭐⭐⭐</p>
          </div>          
        </div>
        <div className="feedback">
          <label>Feel Free to Give the Feedback</label>
          <textarea name="" id="userFeedback" cols={50}  rows={5} ></textarea>
        </div>
      
        <div>
          <button onClick={()=>{alert("Do you want to cancel")}}><Link to={'/'}>Dismiss</Link></button>
          <button onClick={()=>{submitFeedback()}}><Link>Send Feedback</Link></button>
        </div>
      </div>
    </>
  )
}

export default Screen3
