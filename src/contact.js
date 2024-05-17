import React from "react";
import home from "./home (1).png"
import call from "./call.png"
import envelope from "./envelope.png"
const Contact = ()=>{
    return(
      <div className="">
          <div className="bgcontact-image h-80 flex items-center justify-center" >
          <div className="dimcontact h-80">
          </div>
          </div>

          <h1 className="text-white centertext text-5xl ">CONTACT US</h1>
          <h1 className="text-white dots text-3xl">.....</h1>
          <p className="text-white text-center dots1">Need an expert? You are more than welcome to leave your contact info and <br></br>we will be in touch shortly</p>
          <div className="bg-black height flex justify-between px-72 pt-16"	>
            <div className="">
              <img className="h-16 w-16" src={home}></img>
              <h3 className="text-white text-xl relative top-4 right-2 font-serif">VISIT US</h3>
              <h4 className="absolute content1 ml-28 text-center postition text-white font-sans">NIT Rourkela<br></br>Rourkela, Odisha</h4>
              <div className="border-l-2 border-white h-52 w-20 relative left-60 bottom-20">
              </div>
              
              </div>
              
            <div className="">
              <img className="h-12 w-12" src={call}></img>
              <h3 className="text-white text-xl relative top-8 right-2  font-serif">CALL US</h3>
              <h4 className="absolute content2 postition text-white font-sans">+91 9625658404</h4>
              <div className="border-l-2 border-white h-52 w-20 relative left-60 bottom-16">
              
              </div>
              
              </div>
            <div className="">
              <img className="h-16 w-16" src={envelope}></img>
              <h3 className="text-white text-xl relative top-4 right-3  font-serif">EMAIL US</h3>
              <h4 className="content3 absolute text-white font-sans">criminalact@ac.mail.in</h4>
              </div>

          </div>
          
      </div>
        
      );
}
export default Contact;