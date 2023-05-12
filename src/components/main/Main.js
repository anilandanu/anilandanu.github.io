import React from 'react'
import Floral from '../../assets/images/floral.png'
import Rings from '../../assets/images/rings.jpg'
import './Main.css'
import AnimatedText from 'react-animated-text-content'

function Main() {
  return (
    <div className='main' style={{backgroundImage: `url("${Rings}")`}}>
        <div className='main_image'>
            <div className='main_text'>
                <p>THE WEDDING OF</p>
                <h1>Anil  & Anu</h1>
            </div>
            <div className='main_text_m'>
                <p>THE WEDDING OF</p>
                <h1>Anil</h1>
                <h1>&</h1>
                <h1>Anweshita</h1>
            </div>
            <div className='floral_image' style={{backgroundImage: `url("${Floral}")`}}>
            </div>
        </div>
    </div>
  )
}

export default Main