import React from 'react'
import "./Title.css"

export default function Title(props) {
  return (
    <div>
      <div className="title">
        <div className="title-conatiner">
          <div className="title-box">
            <h3>{props.titlefirst}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
