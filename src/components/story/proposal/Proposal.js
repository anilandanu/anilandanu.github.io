import React from 'react'
import './Proposal.css'
import ProposalImage from '../../../assets/images/proposal.png'
import Propbg from '../../../assets/images/proposalbg.jpg'

function Proposal() {
  return (
    <div className='proposal'>
      <div className="proposal_bg">
        <div className='proposal_text'>
            <h2>Proposal</h2>
            <p>March 24, 2019 we just realised and ought to be together forever.</p>
        </div>
        <div className='proposal_image'>
            <img src={ProposalImage} alt="" />
        </div>
      </div>  
    </div>
  )
}

// style={{backgroundImage: `url("${Propbg}")`}}

export default Proposal