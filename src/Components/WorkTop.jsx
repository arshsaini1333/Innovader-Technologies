import React from 'react'

export default function WorkTop({popUp}) {
  return (
    <div className='WorkTop'>
      <div className="wt-content">
        <div className="wtc-heading">Our Portfolio</div>
        <div className="wtc-subhead">Your Properties, Our Creative Touch</div>
        <button onClick={()=>popUp()} className="wtc-cta">I Want Results Like This</button>
      </div>
    </div>
  )
}
