import React from 'react'
import './Billingsystem.css'
import Dashboard from '../assets/img/Dashboard.jpg'
export default function Billingsystem() {
  return (
    <div>
        <div className='Heading my-4 ms-5 mx-4'>
       <h2 className=" head  ms-5 mx-5 ">Gulfbill Saudia Billing system</h2>
       </div>

       <img src={Dashboard} className="img-fluid  my-0 ms-0 mx-5" alt="Responsive image" />
    </div>

  
  )
}
