import React from 'react'
import './Invite.css'
import Invitation from '../../assets/images/invitation.jpg'

function Invite() {
    return (
      <div className='invite' style={{backgroundImage: `url("${Invitation}")`}}>
              <div className='invite_text'>
                  <p>YOU'RE INVITED</p>
                  <h1>Celebrate Our Love</h1>
                  <h2>We Can't Wait to See You</h2>
                  <h4>AA</h4>
              </div>
      </div>
    )
  }

export default Invite