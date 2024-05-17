import React from "react";
import phone from './phone.png';
import { Link } from "react-router-dom";
const Home = ()=>{
    return(
        <div className="App">
          <div className='bg-image h-screen flex items-center justify-center'>
              <div className='h-12 w-full  absolute top-0 opacity-90 bg-black'>
                <img src={phone} className='absolute top-4 left-28  h-4 w-4'></img>
                <h6 className="hello">403-719-6410</h6>
                <button className='button one'><Link className="text-white no-underline" to="/register">New Registration</Link></button>
                <button className='button two'><Link className="text-white no-underline" to="/signin">Client Login</Link></button>
              </div>
              <div className='h-20 w-full flex  absolute top-12 opacity-85 bg-black'>
                <h1 className='absolute top-4 text-white text-3xl left-28'>
                  <span className='red'>Criminal</span> Activity Detection and Alert System
                </h1>
                <div className='flex justify-between absoloute ml-auto mr-20  '>
                  
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/">Home</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/about">About Us</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/contact">Contact Us</Link></button>
                  {/* <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/demo">Demo video</Link></button> */}

                </div>
                <div className="dim">
                
                </div>
                <h1 className="absolute opacity-100 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.9)] top-64 left-36 text-white font-bold antialiased text-center text-6xl drop-shadow-2xl	">Empowering Communities through Vigilance</h1>
                <h1 className=" top ">Unveiling the Guardian Web-Your Shield Against Criminal Activity</h1>
                <button className='newreg'><Link className="text-white no-underline" to="/signin">Start Safeguarding Now!</Link></button>

    
              </div>
           
          </div>
        </div>
      );
}
export default Home;