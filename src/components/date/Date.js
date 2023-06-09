import React from 'react'
import './Date.css'
import Couple from '../../assets/images/couple.jpg'
import DateImage from '../../assets/images/dateImage.jpg'

function Date() {
  return (
    <div className='date' style={{backgroundImage: `url("${Couple}")`}}>
        <div className='date_text'>
          <h3>We Are Getting Married</h3>
          <h1>Save the date</h1>
          <p>07 June 2023</p>
        </div>
    </div>
  )
}

export default Date