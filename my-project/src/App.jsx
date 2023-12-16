import About from "./component/About"
import Blog from "./component/Blog"
import Doctor from "./component/Doctor"
import Fouter from "./component/Fouter"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Services from "./component/Servises"
import Test from "./component/Test"



function App() {
 

  return (
    <>
     <Navbar/> 
     <main>
       <div id="home">
        <Home/>
       </div>
       <div id="About">
        <About/>
       </div>
       <div id="service">
        <Services/>
       </div>
       <div id="doctor">
        <Doctor/>
       </div>
       <div id="blog">
        <Blog/>
       </div>
       <div>
          <Test/>
       </div>
         </main>
     <Fouter/>
    </>
  )
}

export default App
