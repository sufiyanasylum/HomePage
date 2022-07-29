import React from 'react'
import './Portfolio.css'
import Home1 from '../assets/img/Home 6.png'
import Home2 from '../assets/img/Home 7.png'
import Home4 from '../assets/img/Home1.png'
import Home5 from '../assets/img/Home2.png'
import Home6 from '../assets/img/Home3.png'
export default function Portfolio() {
    return (
        <div>
            <div className=' container my-5' >
                <div className="row">
                    <div className="card cardl col-ms-6  my-3 mx-1">
                        <img src={Home2} className="image  image-fluid  " alt="..." />
                        <img src={Home1} className="image2  image-fluid" alt="..." />

                        <h5 className="card-title mx-0">Shop at your fingertip -
                            An footwear ecommerce
                            app design.
                        </h5>
                        <a href="#" className="btnone" >See Portfolio</a>
                    </div>

                    <div className="card cardl col-ms-6   my-3 mx-1" >
                        <div className='background' style={{ background: 'linear-gradient(107.22deg, #3A3897 -0.48%, #A3A1FF 102.58%)',}}></div>
                        <img src={Home5} className="image6  image-fluid" alt="..." />
                    <img src={Home6} className="image4  image-fluid my-1  mx-35 ms-0 " alt="..." />
                    <img src={Home4} className="image5  image-fluid" alt="..." />

                    <h5 className="card-title mx-0">Shop at your fingertip -
                        An footwear ecommerce
                        app design.
                    </h5>
                    <a href="#" className="btnone">See Portfolio</a>
                </div>
            </div>
        </div>

        </div >
    )
}
