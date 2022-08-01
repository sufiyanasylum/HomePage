import React from 'react'
import './Testimonial.css'
import profile1 from '../assets/img/Ellipse 7.png'
import profile2 from '../assets/img/Ellipse 8.png'
export default function Testimonial() {
  return (
    <div>
     <div className="container-fluid">
    <div className="row justify-content-center cont">
        <div className=" col-sm-11 col-md-6 col-lg-8 col-xl-7">

            <div className="cardz">
                <div className="post">     
                <p className='testi'>Testimonial</p>

                    <span className="post-txt">I upgraded my Dribble account to the Pro version. Absolutely loving the super clean look of the Playbook feature </span>
                    
                </div>
            </div>
            <div className="arrow-down"></div>
            <div className="row d-flex justify-content-center">
                <div className="cba">
                    <img className="profile-picone fit-image" src={profile1} alt="Profile pc one" />
                </div>
            </div>
        </div>

        <div className=" col-sm-11 col-md-6 col-lg-8 col-xl-7">
            <div className="cardy">

                <p className="post">
                    
                    <span className="post-txt">I upgraded my Dribble account to the Pro version. Absolutely loving the super clean look of the Playbook feature </span>
                    
                </p>
            </div>
            <div className="arrow-down1"></div>
            <div className="row d-flex justify-content-center">
                <div className="abc">
                    <img className="profile-pic  fit-image" src={profile2} alt="Profile pic" />
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
