import React from 'react'
import './Story.css'
import Meet from './meet/Meet'
import Date from './date/Date'
import Proposal from './proposal/Proposal'
import Engagement from './engagement/Engagement'

function Story() {
  return (
    <div className='story'>
        <div className='story_width'>
            <div className='story_header'>
                <h1>Our Story</h1>
            </div>
            <Meet />
            <Date />
            <Proposal />
            <Engagement />
        </div>
    </div>
  )
}

export default Story