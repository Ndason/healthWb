import React from "react";
import Button from "../layouts/Button";

export default function Home (){
    return  (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
            <div className="w-full lg:w-4/5 space-y-5 mt-10">
             <h1 className="text-5xl font-semibold leading-tight">Empowering Health Choices for a Vibrant Life Your Trusted..</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, doloribus!</p>
             <Button title="See Services"/>
            </div>
        </div>
    )
}