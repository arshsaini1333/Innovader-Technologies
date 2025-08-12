import React from 'react'
import '../public/Result.css'
import CallIcon from '@mui/icons-material/Call';

import ShowChartIcon from '@mui/icons-material/ShowChart';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
const Results = ({popUp}) => {
  return (
    <div className='results'>
      <div className="colum col1">
      <div className="wn-card wn1">
                <div className="wnc">
                  <ShowChartIcon sx={{ fontSize: 50 }}/>
                </div>
                <div className="wn-content">High Intent Leads</div>
              </div>
              <div className="wn-card wn2">
              <div className="wnc">
                <TipsAndUpdatesIcon sx={{ fontSize: 50 }}/>
              </div>
                <div className="wn-content">Smart Targeting</div>
              </div>
      </div>
      <div className="colum col2">
      <div className="wn-btn wn-col">
              <p>Want Results Like These?</p>
              <button onClick={()=>popUp()}><span>Lets Talk</span><CallIcon/></button>
            </div>
      </div>
      <div className="colum col3">
      <div className="wn-card wn3">
              <div className="wnc">
                <FitScreenIcon sx={{ fontSize: 50 }}/>
              </div>
                <div className="wn-content">Scalable Ad Campaigns</div>
              </div>
              <div className="wn-card wn4">
              <div className="wnc">
                <TrendingUpIcon sx={{ fontSize: 50 }}/>
              </div>
                <div className="wn-content">ROI you can Measure</div>
              </div>
      </div>
    </div>
  )
}

export default Results
