import React from 'react'
import './Date.css'
import Hands from '../../assets/images/hands.jpg'

function Date() {
  return (
    <div className='date' style={{backgroundImage: `url("${Hands}")`}}>
      <div className='date_text'>
        <h3>We Are Getting Married</h3>
        <h1>Save the date</h1>
        <p>07 June 2023</p>
      </div>
    </div>
  )
}

export default Date