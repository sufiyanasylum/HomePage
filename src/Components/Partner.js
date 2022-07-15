import React from 'react'
import '../Components/Partner.css'
import image7 from '../assets/img/image 7.png'
import image8 from '../assets/img/image 8.png'
import image9 from '../assets/img/image 9.png'
import image10 from '../assets/img/image 10.png'
export default function Partner() {
  return (
     
      <section id="featured-services" className="featured-services my-2">
     
      <div className="container">
     
      {/* <div className="Name">
        <h1>Partners</h1>
       </div>
         */}
        <div className="row gy-4 ">

          <div className="col-xl-3 col-md-6 d-flex " data-aos="zoom-out">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-activity icon"></i></div>
              <img   src={image7} alt="customer" className="image7 stretched-link" />
             
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
              <img src={image8} alt="customer" className="stretched-link" />

            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>

              <img src={image9} alt="customer" className="stretched-link" />
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-broadcast icon"></i></div>
              <img src={image10} alt="customer" className="stretched-link" />

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
