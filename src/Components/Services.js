import React from 'react'
import './Services.css'
import {FcAndroidOs} from 'react-icons/fc'
import {IoLogoNodejs} from 'react-icons/io'
import {FaPhp} from 'react-icons/fa'
import {SiCodeigniter} from 'react-icons/si'
import {DiFirebase} from 'react-icons/di'
import {SiMongodb} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiMysql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaLaravel} from 'react-icons/fa'
import {SiKotlin} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import circle from '../assets/img/circle.png'
import {SiDotnet} from 'react-icons/si'
import circleshadow from '../assets/img/circleshadow.png'
export default function Services() {
  return (
    <div>
      <div class="row">
  <div class="col-12 col-md-6 col-lg-4 mb-1">
    <div class="card">
    <div className='circleshadow'>
        <img className="card-img-top" src={circleshadow} alt="Circle shadow icon" />
      </div>
     
      <div className='circle'>
    <img src={circle}  alt="..." />
    </div>
    
    <div className='circleword'>
      <h2>Mobile App Development</h2>
    </div>       <div class="card-body">
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  {/* <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="card">
      <img class="card-img-top" src="" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="card">
      <img class="card-img-top" src="" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text"></p>
      </div>
    </div>
  </div> */}
</div>
</div>
  )
}
