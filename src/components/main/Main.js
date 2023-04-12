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
                <h1><AnimatedText 
                  animationType="throw" 
                  duration={1.2}>
                    Anil  & Anu
                </AnimatedText></h1>
            </div>
            <div className='main_text_m'>
                <p>THE WEDDING OF</p>
                <h1><AnimatedText 
                  animationType="throw" 
                  duration={1.2}>
                    Anil
                </AnimatedText></h1>
                <h1><AnimatedText 
                  animationType="throw" 
                  duration={1.2}>
                    &
                </AnimatedText></h1>
                <h1><AnimatedText 
                  animationType="throw" 
                  duration={1.2}>
                    Anweshita
                </AnimatedText></h1>
            </div>
            <div className='floral_image' style={{backgroundImage: `url("${Floral}")`}}>
            </div>
        </div>
    </div>
  )
}

export default Main