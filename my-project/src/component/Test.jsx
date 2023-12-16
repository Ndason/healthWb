import React from "react";
import TestCard from "../layouts/TestCard";
import img1 from "../assets/img/blog1.jpg"
import img2 from "../assets/img/blog2.jpg"
import img3 from "../assets/img/blog3.jpg"
import img4 from "../assets/img/blog4.jpg"
import img5 from "../assets/img/blog5.jpg"
import img6 from "../assets/img/blog6.jpg";
import Button from "../layouts/Button";


export default function Test (){
    const desc = "lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis."
    return (
       
            <div className="flex flex-col pt-5 lg:p-32 min-h-sreen gap-5 ">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6">
                    <div className="flex flex-col  justify-start lg:justify-center text-center lg:text-start ">
                    <h1 className="font-semibold text-2xl">
                        Latest Post
                    </h1>
                    <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis.
                    </p>
                    </div>
                    <div>
                        <Button title="see All Post"/>
                    </div>
                    
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <TestCard title="Unreveling the Myesteries of sleep" img={img1} description={desc} />
                    <TestCard title="Unreveling the Myesteries of sleep" img={img2} description={desc} />
                    <TestCard title="Unreveling the Myesteries of sleep" img={img3} description={desc} />
                    <TestCard title="Unreveling the Myesteries of sleep" img={img4} description={desc} />
                    <TestCard title="Unreveling the Myesteries of sleep" img={img5} description={desc} />
                    <TestCard title="Unreveling the Myesteries of sleep" img={img6} description={desc} />
                </div>

            </div>
       
    )
}