import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact-container">
        <input type="email" placeholder='Enter your email address'/>
        <button type='submit'>Submit</button>
      </div>
    </div>
  )
}
