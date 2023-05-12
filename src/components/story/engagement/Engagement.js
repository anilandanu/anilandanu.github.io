import React from 'react'
import './Engagement.css'
import EngImage from '../../../assets/images/engagement.png'


function Engagement() {
  return (
    <div className='engagement' >
      <div className="engagement_bg">
        <div className='engagement_image'>
          <img src={EngImage} alt="" />
        </div>
        <div className='engagement_text'>
          <h2>Engagement</h2>
          <p>After a lot of struggles, on jan 28 we were finally accepted by our elders and decided to tie the knots on june 7th.</p>
        </div>
      </div>  
    </div>
  )
}


// style={{backgroundImage: `url("${Engagementbg}")`}}

export default Engagement