import React from 'react'

export default function TopComponent({heading}) {
  return (
    <div>
      <div className="top-component">
        <div className="top-component-image">
            <div className="top-content">
                <div className="top-head">
                    {heading}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
