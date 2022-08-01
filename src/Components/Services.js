import React from 'react'
import './Services.css'

import circleshadow from '../assets/img/services.jpeg'
import android from '../assets/img/image 24.png'
import react from '../assets/img/image 25.png'
import kotlin from '../assets/img/image 26.png'
import node from '../assets/img/image 28.png'
import laravel from '../assets/img/image 27.png'
// card2 image
import php from '../assets/img/image 33.png'
import bootstrap from '../assets/img/image 36.png'
import dotnet from '../assets/img/image 35.png'
import mysql from '../assets/img/image 32.png'
import mongo from '../assets/img/image 30.png'    
import firebse from '../assets/img/image 29.png'
import Codeigniter from '../assets/img/image 34.png'

export default function Services() {
  return (
    <div className=' container services'>
       <div className="row">
  <div className=" second col-md-6 col-lg-6 " >
    <div className="cardh my-3  mx-4" style={{  height: '230px', left: '100px', top: '40px', borderRadi9us: '1%' }}>
  <img alt="Card image cap " className="card-img img-fluid " src={circleshadow} style={{ backgroundSize: 'cover', borderRadius: '30px', background: 'bottom left 15% black'  }} />
      <div className="card-block" >
        <h4 className="Mobile">Mobile Development</h4>

        <div className='cardcntnt' style={{ top: '370px' }}>
        <div className='top' style={{ left: '4rem' }}>
      <img src={android}  className="alogo " alt="android" />
      <p className='acon'>Android</p> 
      </div>
      <div className='top'>
      <img src={react}  className="alogo " alt="android" />
      <p className='acon'>React Native</p> 
      </div>
      <div className='top'>
      <img src={kotlin}  className="alogo " alt="android" />
      <p className='acon'>Kotlin</p> 
      </div>
      <div className='top'>
      <img src={node}  className="alogo " alt="android" />
      <p className='acon'>Node.js</p> 
      </div>
      <div className='top'>
      <img src={laravel}  className="alogo " alt="android" />
      <p className='acon'>Laravel Admin</p> 
      </div>
        </div>
      </div>
    </div>
  </div>

  
 <div className=" second col-md-6 col-lg-6   ">
      <div className="cardh  my-3 mx-4" style={{ height: '230px', left: '100px', top: '40px', borderRadius: '1%' }}>
      <img alt="Card image cap my-4 " className="card-img-top img-fluid " src={circleshadow} style={{ backgroundSize: 'cover', borderRadius: '30px', background: 'bottom left 15% black' }}/>
      <div className="card-block">
      <h4 className="Mobile1 ">Ecommerce Development</h4>
<div className="cardcdn"  style={{ top: '370px' }}>
      <div className='top'>
                <img src={react}  className="tlogo " alt="android" />
                <p className='tcon'>React.JS</p> 
                </div>
                <div className='top'>
                <img src={php}  className="tlogo " alt="android" />
                <p className='tcon'>Php</p> 
                </div>
                <div className='top'>
                <img src={node}  className="tlogo " alt="android" />
                <p className='tcon'>Node.js</p> 
                </div>
                <div className='top'>
                <img src={laravel}  className="tlogo " alt="android" />
                <p className='tcon'>Laravel</p> 
                </div>
                <div className='top'>
                <img src={mysql}  className="tlogo " alt="android" />
                <p className='tcon'>MySQL</p> 
                </div>
                <div className='top'>
                <img src={mongo}  className="tlogo " alt="android" />
                <p className='tcon'>MongoDB</p> 
                </div>
                <div className='top'>
                <img src={firebse}  className="tlogo " alt="android" />
                <p className='tcon'>Firebase</p> 
                </div>
                </div>
</div>
</div>
</div>
<div className=" second col-md-6 col-lg-6" >
    <div className="cardh my-3  mx-4" style={{ height: '230px', left: '100px', top: '40px', borderRadius: '1%' }}>
  <img alt="Card image cap" className="card-img img-fluid " src={circleshadow} style={{ backgroundSize: 'cover',  borderRadius: '30px', background: 'bottom left 15% black' }} />
      <div className="card-block" >
        <h4 className="Mobile2">Web App Development</h4>

        <div className='cardcntnt' style={{ top: '370px' }}>
        <div className='top' style={{ left: '4rem' }}>
      <img src={bootstrap}  className="alogo " alt="android" />
      <p className='acon'>Bootstrap 4/5</p> 
      </div>
      <div className='top'>
      <img src={laravel}  className="alogo " alt="android" />
      <p className='acon'>Laravel</p> 
      </div>
      <div className='top'>
      <img src={Codeigniter}  className="alogo " alt="android" />
      <p className='acon'>Code Ignitor</p> 
      </div>
      <div className='top'>
      <img src={node}  className="alogo " alt="android" />
      <p className='acon'>Node.js</p> 
      </div>
      <div className='top'>
      <img src={react}  className="alogo " alt="android" />
      <p className='acon'>React Js</p> 
      </div>
        </div>
      </div>
    </div>
  </div>
  <div className="second col-md-6 col-lg-6"  >
    <div className="cardh my-3 mx-4" style={{ height: '230px',  top: '40px', borderRadius: '1%' }}>
  <img alt="Card image cap" className="card-img img-fluid " src={circleshadow} style={{ backgroundSize: 'cover', borderRadius: '30px', background: 'bottom left 15% black' }} />
      <div className="card-block" >
        <h4 className="Mobile3">Software Deployment</h4>

        <div className='cardcntnt' style={{ top: '370px' }}>
        <div className='top' style={{ left: '4rem' }}>
      <img src={laravel}  className="alogo " alt="android" />
      <p className='acon'>Laravel</p> 
      </div>
      <div className='top'>
      <img src={Codeigniter}  className="alogo " alt="android" />
      <p className='acon'>Code Ignitor</p> 
      </div>
      <div className='top'>
      <img src={php}  className="alogo " alt="android" />
      <p className='acon'>Core Php</p> 
      </div>
      <div className='top'>
      <img src={node}  className="alogo " alt="android" />
      <p className='acon'>Node Js</p> 
      </div>
      <div className='top'>
      <img src={dotnet}  className="alogo " alt="android" />
      <p className='acon'>Dot Net</p> 
      </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>  
  )
}
