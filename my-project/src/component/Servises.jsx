import React from "react";
import Button from "../layouts/Button";
import ServisesCard from "../layouts/ServicesCard";
import {RiMicroscopeLine} from "react-icons/ri";
import {MdHealthAndSafety} from "react-icons/md";
import {FaHeartbeat } from "react-icons/fa"
export default function Services(){
   const icon1 = <RiMicroscopeLine size={35} className='text-backgroudColor'
    />
    const icon2 = <MdHealthAndSafety size={35} className='text-backgroudColor'/>
    const icon3 =  <FaHeartbeat size={35} className='text-backgroudColor'/>
    return(
        <div  className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className="flex flex-col  lg:flex-row lg:justify-between justify-center">
                <div>
                    <h1 className="text-4xl font-semibold text-center  lg:text-start">Our Sevices</h1>
                    <p className="mt-2 text-center lg:text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corrupti.</p>

                </div>
                <div className="mt-4 lg:mt-0">
                    <Button title="See Services"/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 pt-14">
              <ServisesCard icon={icon1} title="Lab Test"/>
              <ServisesCard icon={icon2} title="Health Check"/>
              <ServisesCard icon={icon3} title="Heart Health"/>
              
            </div>
        </div>
    )
}