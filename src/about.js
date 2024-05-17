import React from "react";
import { Link } from "react-router-dom";
import phone from "./phone.png"
import tunnel from "./Tunnel Dark Light - Free photo on Pixabay.jpeg"
import alarm from "./alarm.png"
import user from "./user-access.png"
import gun from "./gun.png"
import alert from "./error.png"
import report from "./report.png"
import live from "./play-button.png"
import yash from "./yash.png"
import anagha from "./Anagha.png"
import swetha from "./Swetha.png"
import anan from "./andu.jpeg"
const About = ()=>{
    return(
        <div >
         
          <div className='h-12 w-full  absolute top-0 opacity-90 bg-red-700'>
                <img src={phone} className='absolute top-4 left-28  h-4 w-4'></img>
                <h6 className="hello">403-719-6410</h6>
               
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
          </div>



          <div className="hdiv "><div className="hdim"></div></div>
          <h1 className="text-white absolute tracking-wider font-semibold font-sans	 top-56 text-6xl leftp text-center">Systems at Your<br></br> Fingertips</h1>
          <h3 className="hey text-white font-thin ">Integrated Protection, Control and Monitoring</h3>

          <div className="hdiv2 relative bottom-8 ">
            <h1 className="text-black font-bold left-auto top-12 text-6xl font-sans  goleft tracking-wide">Ab<span className="underline">out</span> Us</h1>
            <p className="relative top-48 text-lg font-bold px-20">We are four passionate Electronic and Communication Engineering 3rd-year students from NIT Rourkela - Ananya Sinha, Swetha, Shreyas Padhy, and Anagha Arun. Committed to innovation, we collaborated on this project as part of our lab assignment. Our goal is to leverage technology to address real-world challenges. With a blend of creativity and technical expertise, we aim to make a positive impact in our community. Join us on this journey of exploration and discovery.</p>
            <h3 className="text-red-900 line font-bold">Our Site Offeres the Following Services:</h3>
          </div>

        

          <div className="bg-gray-800 flex px-40  justify-between relative bottom-16 h-48 ">
            
          <div className="border-r-2 border-gray-700	">
           <div className=" mt-2  w-96  py-4 ">
             <div className="flex items-center"><img  className="h-9 w-9" src={gun}/>
              <h5 className=" pl-2 white ">Knife Detection Algorithm</h5>
             </div>
          
           </div>
          <div className=" w-96 py-4 ">
            <div className="flex items-center "><img className="h-9 w-9" src={alarm}/>
              <h5 className=" pl-2 text-white mt-2  ">Alarm Activation</h5>
              
            </div>
           
          </div>
          
        </div>

        <div className="border-r-2 border-gray-700	 ">
          <div className="mt-2 ml-24  w-96  py-4 ">
            <div className="flex items-center "><img className="h-9 w-9" src={alert}/>
              <h5 className="pl-2 text-white  ">Alert System</h5>
            </div>
          
          </div>
          <div className=" ml-24 w-96 py-4  ">
            <div className="flex items-center"><img className="h-9 w-9" src={live}/>
              <h5 className="pl-2 text-white mt-2 ">Live Video Streaming</h5>
              
            </div>
            
          </div>
        </div>
      
        <div className="">

        </div>
        <div className="ml-10">
          <div className=" mt-2  w-96  py-4 ">
          <div className="flex items-center"><img className="h-9 w-9" src={report}/>
              <h5 className="pl-2 text-white ">Historical Data and Reporting</h5>
            </div>
            
          </div>
          <div className=" w-96 py-4  ">
          <div className="flex items-center"><img className="h-9 w-9" src={user}/>
              <h5 className="pl-2 text-white">User Authentication and Access Control</h5>
            </div>
            
          </div>
        </div>
       </div>
       <hr className="relative bottom-44 "></hr>
      

       <div className="hdiv3 relative bottom-24 ">
            <h1 className="text-black font-bold left-auto top-12 text-6xl font-sans  goleft2 tracking-wide">Mee<span className="underline">t Our T</span>eam </h1>
            <div className="justify-between flex mx-36">
              <div className="top-48 relative"><img src={anagha} className="h-60 rounded-full w-60"></img>
              <h4 className="mt-6 ml-10 font-serif font-bold">Anagha Arun</h4>
              <h5 className="text-red-900 ml-3">Alert System Developer</h5>
              </div>
              <div className="top-48 relative"><img src={yash} className="h-60 rounded-full w-60"></img>
              <h4 className="mt-6 ml-10 font-serif font-bold">Shreyas Padhy</h4>
              <h5 className="text-red-900 -ml-6">Knife Detection System Developer</h5>
              </div>
              <div className="top-48 relative"><img src={swetha} className="h-60 rounded-full w-60"></img>
              <h4 className="mt-6 ml-20 font-serif font-bold">Swetha</h4>
              <h5 className="text-red-900 ml-1">Database System Manager</h5>
              </div>
              <div className="top-48 relative"><img src={anan} className="h-60 rounded-full w-60"></img>
              <h4 className="mt-6 ml-12 font-serif font-bold">Ananya Sinha</h4>
              <h5 className="text-red-900 ml-4">Frontend Web Developer</h5>
              </div>
            </div>
          </div>

        

         
        </div>
      );
}
export default  About;