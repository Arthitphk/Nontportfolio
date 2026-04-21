import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Blog from "../Components/Blog";
import Certificate  from "../Components/Certificate";
import About from "../Components/About";
import Timeline from "../Components/Timeline";
import Content from "../Components/Content";




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Timeline/>
        <Content/>
    </div>
  )
}

export default Home