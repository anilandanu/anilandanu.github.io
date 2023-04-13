import React from 'react'
import './Credits.css'
import Creditsbg from '../../assets/images/creditsbg.png'

function Credits() {
  return (
    <div className='credits'>
        <div className='credits_bg' style={{backgroundImage: `url("${Creditsbg}")`}}>
            <h1>AA</h1>
        </div>
    </div>
  )
}

export default Credits