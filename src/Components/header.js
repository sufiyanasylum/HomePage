import React from 'react'
import ME from '../assets/img/pana.png'
import './Header.css'
 function Header () {
  return (
    <div>
 <section id="hero" className="hero d-flex align-items-center mx-4">

<div className="container" style={{  width: '100%',   height: '50%', left: '5%', top: '1%', }}>
  <div className="row gx-5 ">
    <div className="col-lg-6  d-flex flex-column justify-content-center flex-column ">
      <h1 className="heading" data-aos="fade-up" >We build <strong className="brand"> apps  </strong>for your business</h1>
      <h2 className="containt" data-aos="fade-up" data-aos-delay="400">Helping companies with our industry leading experience to achieve there goal.
          We build apps for your business</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div className="text-center text-lg-start">

        <button type="button" className="btn btn-info"  style={{ left: '8rem', width: '130px',top: '350px' }}>Get started </button>

        </div>
      </div>
    </div>
    <div className="col-lg-6  hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={ME} className="img-fluid" alt="testi image" />
    </div>
  </div>
</div>

</section>


    </div>
  )
}
export default Header