import React from 'react'
import './Groom.css'
import GroomImage from '../../assets/images/groom.jpg'
import AnimatedText from 'react-animated-text-content'

function Groom() {
  return (
    <div className='groom'>
      <div className='groom_box'>
        <div className='groom_image'>
          <div className='groom_image2' style={{backgroundImage: `url("${GroomImage}")`}}></div>
        </div>
        <div className='groom_text'>
          <h1>Groom</h1>
          <h2><AnimatedText animationType="float" duration={1.5}>Parusubotu Anil</AnimatedText></h2>
          <h3>Youngest Son of Sri Murali Krishna <br/>and Smt. Nirmala <br/>of Sheelanagar, Visakhapatnam.</h3>
        </div>
      </div>
    </div>
  )
}

export default Groom