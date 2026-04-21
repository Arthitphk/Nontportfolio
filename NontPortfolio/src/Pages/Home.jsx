import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Blog from "../Components/Blog";
import Certificate  from "../Components/Certificate";
import About from "../Components/About";
import Timeline from "../Components/Timeline";




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Timeline/>
    </div>
  )
}

export default Home