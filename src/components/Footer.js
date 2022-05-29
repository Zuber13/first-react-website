import React from 'react'
import {Link} from 'react-router-dom';  
export default function Footer() {
  return (                          
    <div className='footer'>
      <ul className=''>
         <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/terms">Terms</Link></li> 
      </ul>
      <span>Copuright @ {new Date().getFullYear()} Term And condition Apply All right reserved</span>
    </div>
  )                         
}
