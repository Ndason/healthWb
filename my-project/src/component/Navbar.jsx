import React from "react";
import {Link} from "react-scroll";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import Contact from "../models/Contact";


export default function Navbar(){
    const [menu,setMenu]=useState(false);
    const [showForm,setForm]=useState(false);

    const handleChange=()=>{
        setMenu(!menu);
    }
    const closeMenu =()=>{
        setMenu(false)
    }
    const closeForm =()=>{
        setForm(false)
    }
    const openForm = ()=>{
        setForm(true)
        setMenu(false)
    }


    return(
       <div className="fixed  w-full text-white z-10">
        <div>
         <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroudColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="flex flex-row items-center cursor-pointer">
              <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
                <h1 className="text-2xl font-semiblod ">WellnessVista</h1>
              </Link>

            </div>
            <nav className="hidden lg:flex flex-row items-center gap-8 text-lg font-medium ">
            <Link to="home" spy={true}  onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer  hover:text-hoverColor
             transition-all">Home</Link> 
            <Link to="About" spy={true} onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">About Us</Link>
           <Link to="service" spy={true} onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Service</Link>
            <Link to="doctor" spy={true} onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Doctors</Link>
            <Link to="blog" spy={true}  onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Blog</Link>
            </nav>
            <div className="hidden lg:flex">
                <button onClick={openForm} className="bg-brightColor px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
                     Contact Us
                </button>
            </div>
            {showForm && <Contact closeForm={closeForm}/>}
           <div className=" lg:hidden flex">
             { menu ? <AiOutlineClose onClick={handleChange} size={28} className="cursor-pointer"/> : <AiOutlineMenu onClick={handleChange} size={28} className="cursor-pointer"/>}
           </div>
            <div className={`${menu?"translate-x-0":"-translate-x-full"} lg:hidden w-full flex flex-col absolute top-16 left-0 bg-backgroudColor  text-center gap-8 font-semibold text-2xl h-fit pt-8 pb-4 transition-transform duration-300`}>
            <Link to="home" spy={true}  onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer  hover:text-hoverColor
             transition-all">Home</Link> 
            <Link to="About" spy={true} onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">About Us</Link>
            <Link to="service" spy={true} onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Service</Link>
            <Link to="doctor" spy={true} onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Doctors</Link>
            <Link to="blog" spy={true}  onClick={closeMenu} smooth={true} duration={500} className="cursor-pointer hover:text-hoverColor
             transition-all">Blog</Link>
             <div className=" lg:flex">
                <button onClick={openForm} className="bg-brightColor px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
                     Contact Us
                </button>
            </div>  
            </div>
         </div>
         </div>
       </div>
    )
}