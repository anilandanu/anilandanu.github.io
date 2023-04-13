import React from 'react'
import './Bride.css'
import BrideImage from '../../assets/images/bride.jpg'
import AnimatedText from 'react-animated-text-content'
import Lines from '../../assets/images/lines.png'

function Bride() {
  return (
    <div className='bride'>
      <div className='bride_bg'>
      </div>
      <div className='bride_bg_s' style={{backgroundImage: `url("${Lines}")`}}>
      </div>
      <div className='bride_image' style={{backgroundImage: `url("${BrideImage}")`}}>
      </div>
      <div className='bride_text'>
        <h1>Bride</h1>
        <h2>Reddy Anweshita</h2>
        <h3>Daughter of Sri Appalanaidu and Smt. Padma of Kurmanapalem, Visakhapatnam.</h3>
      </div>
      {/* <div className='bride_box'>
      <div className='bride_text'>
          <h1>Bride</h1>
          <h2><AnimatedText animationType="float" duration={1.5}>Reddy Anweshita</AnimatedText></h2>
          <h3>Daughter of Sri Appalanaidu <br/>and Smt. Padma <br/>of Kurmanapalem, Visakhapatnam.</h3>
        </div>
        <div className='bride_image'>
          <div className='bride_image2' style={{backgroundImage: `url("${BrideImage}")`}}></div>
        </div>
        
      </div> */}
    </div>
  )
}

export default Bride