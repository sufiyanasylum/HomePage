import React from 'react'
import Group21 from '../assets/img/Group 21.png'
import Group22 from '../assets/img/Group 22.png'
import Group23 from '../assets/img/Group 23.png'
import Group24 from '../assets/img/Group 24.png'
import '../Components/Experince.css'
export default function Experince() {
  return (
    <div>
<section id="featured-services" className="featured-services">
      <div className="container " data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title "><img src={Group21} alt="group" /></h4>
              <h4 className="bold justify-content-center">5 +</h4>
              <p className="description">Years of experience</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title "><img src={Group22} alt="group" /></h4>
              <h4 className="bold justify-content-center">93 %</h4>
              <p className="description">Completed Projects</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title "><img src={Group23} alt="group" /></h4>
              <h4 className="bold justify-content-center">11 +</h4>
              <p className="description">Our professional Team</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon my-0 "><i className="bx bxl-dribbble"></i></div>
              <h4 className="title "><img src={Group24} alt="group" /></h4>
              <h4 className="bold justify-content-center">25 +</h4>
              <p className="description">Happy Customers</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    </div>
  )
}
