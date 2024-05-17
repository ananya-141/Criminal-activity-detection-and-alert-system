import React from "react";
import { Link } from "react-router-dom";

import check from "./check-mark.png";
const Afterregister = ()=>{
    return(
        <div className="App" >
          <div className='bg-image1  h-screen flex items-center justify-center'>
            <div className='h-20 w-full flex  absolute top-0 opacity-95 bg-black'>
                <h1 className='absolute top-4 text-white text-3xl left-28'>
                  <span className='red'>Criminal</span> Activity Detection and Alert System
                </h1>
                <div className='flex justify-between absoloute ml-auto mr-20  '>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/">Home</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/about">About Us</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/contact">Contact Us</Link></button>
                  {/* <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/demo">Demo video</Link></button> */}
                </div>
            </div>
            <div className="div1">
                    <div className="text-white text-center text-5xl redbox h-5/6 w-2/6 relative top-12 left-1/3">
                        <h1 className="text-white font-serif text-5xl relative top-32">
                           You are successfully registered!
                        </h1>
                        <img src={check} className="h-32 w-32 left-48 top-32 relative"></img>
                        <button className='buttonthreeregister'><Link className="text-white no-underline" to="/signin">Sign In Now</Link></button>
                        
                    </div>
            </div>
            
             
           
          </div>
         
        </div>
      );
}
export default  Afterregister;