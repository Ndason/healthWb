import BlogCard from "../layouts/BlogCard";
import Button from "../layouts/Button";
import img1 from "../assets/img/blog1.jpg"
import img2 from "../assets/img/blog2.jpg"
import img3 from "../assets/img/blog3.jpg"
import img4 from "../assets/img/blog4.jpg"
import img5 from "../assets/img/blog5.jpg"
import img6 from "../assets/img/blog6.jpg"

export default function Blog(){
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
            <div className="flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Latest Post</h1>
                    <p className="mt-2 text-center lg:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ipsum?</p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Button title="See All Post"/>
                </div>
            </div>
            <div className="my-8">
                <div className="flex flex-wrap justify-center gap-5">
                   
                <BlogCard img={img1} headlines='Unreveling the Myesteries of sleep'/>
                <BlogCard img={img2} headlines='Unreveling the Myesteries of sleep'/>
                <BlogCard img={img3} headlines='Unreveling the Myesteries of sleep'/>
                <BlogCard img={img4} headlines='Unreveling the Myesteries of sleep'/>
                <BlogCard img={img5} headlines='Unreveling the Myesteries of sleep'/>
                <BlogCard img={img6} headlines='Unreveling the Myesteries of sleep'/>
                </div>
            </div>
        </div>
    )
}