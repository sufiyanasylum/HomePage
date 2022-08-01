import React from 'react'
import './Footer.css'
import Footerlogo from '../assets/img/Footer logo.png'
import footerframe from '../assets/img/Frame 24.png'

export default function Footer() {
  return (
    <div>
        <footer className=" footer text-center text-lg-start ">
          <div className="container p-5 pb-0 ">
            <section className="ca">
              <div className="row my-5  ">
                <div className=" cone col-lg-4 col-md-6 mb-4  mb-md-0">

                  <p className='lcon'>
                  We believe in perfecting the craft
                    </p>
                    <img className=" logo img-flid" src={Footerlogo} alt="footr logo" />

                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ms-5">
                  <h5 className="linko" style={{  fontfamily: 'Neue Haas Grotesk Text Pro',   fontstyle: 'normal',   fontweight: '700', fontsize: '20px',    lineheight: '50px' }}>About</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="linkone">About theAllsafe</a>
                    </li>
                    <li>
                      <a href="#!" className="linkone">Contact us</a>
                    </li>
                    <li>
                      <a href="#!" className="linkone">Careers</a>
                    </li>
                    <li>
                      <a href="#!" className="linkone">Free Discussion</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ms-5">
                  <h5 className="linko">Solutions</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="linkone">AWS Deployment</a>
                    </li>
                    <li>
                      <a href="#!" className="linkone">Software Development</a>
                    </li>
                  
                    <li>
                      <a href="#!" className="linkone">Maintenance & Upgrade</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ms-5">
                  <h5 className="linko">Support</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="linkone">Support Email: </a>
                      <p className="linkt">office@theallsafe.com</p>
                    </li>
                    <li>
                      <a href="#!" className="linkone">Sales Number: </a>
                      <p className='linkt'>+91 9506333919</p>
                    </li>
                    <li>
                      <a href="#!" className="linkone">Technical Query </a>
                      <p className='linkt'>+91 7905548002</p>

                    </li>
                    
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ms-1">
                  <h5 className="linkot">Address</h5>
            
                  <ul className="list-unstyled mb-0">
                    <li>
                       <a href="#!" className="linkonet">Delhi Address:</a>
                       <p className='linkaddress'> B-2/11, Block B,Mohan Cooperative Industrail  Estate, Badarpur, New Delhi-110044 (India)</p>
                    </li>
                    <li>
                      <a href="#!" className="linkonet">HO Lucknow Address: </a>
                      <p className='linkaddress'>87 A, Liberty Colony,
Sarvodaya Nagar,Lucknow,UP - 226016
(India)</p>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </section>

            <hr className="line mb-4" />

           


           
          </div>

          <div
            className="text-center p-3"         >
            <img className='frame img-fluid' src={footerframe} alt="footerframe" />
            <div className="copyright " >
            <p>© 2022 theAllsafe. All rights reserved</p>
              </div>
          </div>
        </footer>
      </div>

  )
}
