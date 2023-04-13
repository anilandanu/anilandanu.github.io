import React from 'react'
import './Invite.css'
import Invitation from '../../assets/images/invitation.jpg'

function Invite() {
    return (
      <div className='invite'>
          <div className='invite_bg' style={{backgroundImage: `url("${Invitation}")`}}>
            <div className='invite_text'>
                <p>YOU'RE INVITED TO</p>
                <h1>Celebrate Our Love</h1>
                <h2>We Can't Wait to See You</h2>
            </div>
          </div>
              
      </div>
    )
  }

export default Invite