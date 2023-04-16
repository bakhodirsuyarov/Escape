import React from 'react';
import recent1 from '../../assets/img/Recent1.png'
import recent2 from '../../assets/img/feature-card1.png'
import "./Recent.css";

export default function Recent(props) {
  return (
        <div className="recent-card">
          <div className="recent-img">
            <img src={recent1} alt="" />
          </div>
          <div className="recent-content">
            <h3>{props.recentTitle}</h3>
            <span>{props.recentSpan}</span>
          </div>
          <div className="recent-card__bottom">
            <div>
              <img src={recent2} alt="" />
              <h4>{props.recentUser}</h4>
            </div>
            <h4>9/25/2015</h4>
          </div>
        </div>
  )
}
