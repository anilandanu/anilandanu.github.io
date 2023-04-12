import React from 'react'
import './Meet.css'
import MeetImage from '../../../assets/images/meet.png'

function Meet() {
  return (
    <div className='meet'>
        <div className='meet_text'>
            <h2>First meet</h2>
            <p>It was a summery morning in April. We met in 2018 at Tech Mahindra smart academy and got to Know each other since then.</p>
        </div>
        <div className='meet_image'>
            <img src={MeetImage} alt="" />
        </div>
    </div>
  )
}

export default Meet