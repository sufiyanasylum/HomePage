import React from 'react'
import  '../Components/Cunsultation.css'
import testi from '../assets/img/testimonial.png'
export default function Cunsultation() {
  return (
    <div>
<section id="cunsltation" className="consultation d-flex align-items-center">

<div className="con container" >
  <div className="row gx-5">
    <div className="col-lg-6  d-flex flex-column justify-content-center flex-column">
      <h1 className="headingone mx-5 my-5" data-aos="fade-up" >Try theAllsafe free</h1>
      <h2 className="containtone " data-aos="fade-up" data-aos-delay="400">Get a free consultation from our 
experienced team</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div className="text-center text-lg-start">

        <button type="button" className="btn btn-info my-4 ms-4"> Get started </button>

        </div>
      </div>
    </div>
    <div className="col-lg-6  " data-aos="zoom-out" data-aos-delay="200">
      <img src={testi} className=" testi-image img-fluid" alt="testi image"  />
    </div>
  </div>
</div>

</section>
    </div>
  )
}
