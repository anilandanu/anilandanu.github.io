import React from 'react'
import './Groom.css'
import GroomImage from '../../assets/images/groom.jpg'
import AnimatedText from 'react-animated-text-content'
import Lines from '../../assets/images/lines.png'

function Groom() {
  return (
    <div className='groom'>
      <div className='groom_bg'>
      </div>
      <div className='groom_bg_s' style={{backgroundImage: `url("${Lines}")`}}>
      </div>
      <div className='groom_image' style={{backgroundImage: `url("${GroomImage}")`}}>
      </div>
      <div className='groom_text'>
        <h1>Groom</h1>
        <h2>Parusubotu Anil</h2>
        <h3>Youngest Son of Sri Murali Krishna and Smt. Nirmala of Sheelanagar, Visakhapatnam.</h3>
      </div>
    </div>
  )
}

export default Groom