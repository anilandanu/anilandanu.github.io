import React from 'react'
import './Plan.css'

function Plan() {
  return (
    <div className='plan'>
        <div className='plan_text'>
            <h3>When & Where</h3>
        </div>
        <div className='card'>
            <div className='card_left'>
                <h1>The Ceremony</h1>
                <h2>07 June 2023 | 1:04 hrs. (early hrs. of Thursday)</h2>
                <h3>ADDRESS</h3>
                <h4>Andhrakesari Kalakshetram <br/>Ukkunagaram, Steelplant <br/>Visakhapatnam</h4>
            </div>
            <div className='card_right'>
                <h1>The Reception</h1>
                <h2>07 June 2023 | 5:00 p.m. Onwards</h2>
                <h3>ADDRESS</h3>
                <h4>Andhrakesari Kalakshetram <br/>Ukkunagaram, Steelplant <br/>Visakhapatnam</h4>
            </div>
        </div>
    </div>
  )
}

export default Plan