import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Screen2.css'

export class Screen2 extends Component {
  render() {
    return (
      <div className='screen2-base'>



        Main Screen

        consist of :
        video, controller, chat, peoples
        <button>
          <Link to='/screen3'>Click Me</Link>
        </button>
        
      </div>
    )
  }
}

export default Screen2
