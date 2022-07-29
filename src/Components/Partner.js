import React from 'react'
import './Partner.css'
import partners from '../assets/img/Partners.png'

export default function Partner() {
  return (
     
     <div>
      
      <div className="container">
        <img src={partners} className="par img-fluid my-3"  alt='partners' />
      </div>
      </div>
  )
}
