import React from 'react'
import './Bride.css'
import BrideImage from '../../assets/images/bride.jpg'
import AnimatedText from 'react-animated-text-content'

function Bride() {
  return (
    <div className='bride'>
      <div className='bride_box'>
      <div className='bride_text'>
          <h1>Bride</h1>
          <h2><AnimatedText animationType="float" duration={1.5}>Reddy Anweshita</AnimatedText></h2>
          <h3>Daughter of Sri Appalanaidu <br/>and Smt. Padma <br/>of Kurmanapalem, Visakhapatnam.</h3>
        </div>
        <div className='bride_image'>
          <div className='bride_image2' style={{backgroundImage: `url("${BrideImage}")`}}></div>
        </div>
        
      </div>
    </div>
  )
}

export default Bride