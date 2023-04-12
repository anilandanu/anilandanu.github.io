import React from 'react'
import './Date.css'
import DateImage from '../../../assets/images/date.png'

function Date() {
  return (
    <div className='second'>
        <div className='second_image'>
          <img src={DateImage} alt="" />
        </div>
        <div className='second_text'>
          <h2>First date</h2>
          <p>It's not an actual date but that was the first time we went out as a couple with friends along with the moon on the nights of April 2019.</p>
        </div>
    </div>
  )
}

export default Date