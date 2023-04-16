import React from 'react';
import "./Feature.css"
import rasm1 from "../../assets/img/feature1.png"
import rasm2 from "../../assets/img/feature-card1.png"

export default function Feature(props) {
  return (
            <div className="feature-card">
             <img src={rasm1} alt="" />
              <div className="feature-card__content">
                <div className="feature-card__content-inner">
                  <h3>{props.cardtitle}</h3>
                  <span>{props.cardspan}</span>
                  <div className='feature-card__content-bottom'>
                  <div>
                      <img src={rasm2} alt="" />
                      <h4>{props.cardavatar}</h4>
                    </div>
                    <h4>September 25, 2015</h4>
                  </div>
                </div>
              </div>
            </div>
  )
}
