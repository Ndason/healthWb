import React from "react";
import img from "../assets/img/about.jpg";

export default function About(){
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-8">
            <div className="w-full lg:w-3/4 space-y-4">
              <h1 className="text-4xl font-semibold lg:text-start">About Us</h1>  
              <p className="text-justify lg:text-start">Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nesciunt? consectetur adipisicing elit. Facilis harum mollitia incidunt sit velit corporis veritatis eveniet saepe placeat autem.</p>
              <p className="text-justify lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vel sed! Maiores ad repudiandae quaerat. Doloremque cupiditate minus unde illo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempore voluptates quas ea deleniti quasi facere facilis fugiat sed et!</p>
              <p className="text-justify lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus hic tempore necessitatibus reprehenderit nemo corporis molestias ratione earum, sit labore vel vitae?</p>

            </div>
            <div className="w-full lg:w-3/4">
                <img className="rounded-xl" src={img} alt="img" />
            </div>
        </div>
    )
}