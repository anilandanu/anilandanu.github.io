import React from 'react'
import './Engagement.css'
import EngImage from '../../../assets/images/engagement.png'

function Engagement() {
  return (
    <div className='engagement'>
        <div className='engagement_image'>
          <img src={EngImage} alt="" />
        </div>
        <div className='engagement_text'>
          <h2>Engagement</h2>
          <p>After a lot of struggles jan 28 we were finally accepted by our elders and decided to tie the knots on june 7 2023</p>
        </div>
    </div>
  )
}

export default Engagement