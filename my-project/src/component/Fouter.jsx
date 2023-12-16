import React from "react";
import { Link } from "react-scroll";
export default function Fouter(){
    return (
        <div className="bg-backgroudColor text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
              <div className="w-full md:w-1/4">
                 <h1 className="font-semibold text-xl pd-4">WellnessVista</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aut!</p>

                </div>
                <div className="w-full md:w-1/4">
                   <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 ">About Us</h1> 
                   <nav className="flex flex-col gap-2">
                   <Link to="home" spy={true}  smooth={true} duration={500} className="cursor-pointer  hover:text-hoverColor
             transition-all">Home</Link> 
            <Link to="About" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">About Us</Link>
           <Link to="service" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Service</Link>
            <Link to="doctor" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Doctors</Link>
            <Link to="blog" spy={true}   smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Blog</Link>
            

            </nav> 
            </div> 
            <div className="w-full md:w-1/4">
              <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 ">Our Servise</h1> 
              <nav className="flex flex-col gap-2">
                   <Link to="home" spy={true}   smooth={true} duration={500} className="cursor-pointer  hover:text-hoverColor
             transition-all">Home</Link> 
            <Link to="About" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">About Us</Link>
           <Link to="service" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Service</Link>
            <Link to="doctor" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Doctors</Link>
            <Link to="blog" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Blog</Link>
            

            </nav> 

            </div>  
            <div className="w-full md:w-1/4">
              <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 ">Our Servise</h1> 
              <nav className="flex flex-col gap-2">
                   <Link to="home" spy={true}  smooth={true} duration={500} className="cursor-pointer  hover:text-hoverColor
             transition-all">Home</Link> 
            <Link to="About" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">About Us</Link>
           <Link to="service" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Service</Link>
            <Link to="doctor" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Doctors</Link>
            <Link to="blog" spy={true}  smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Blog</Link>
            

            </nav> 

            </div>  
            </div>
        </div>
    )
}