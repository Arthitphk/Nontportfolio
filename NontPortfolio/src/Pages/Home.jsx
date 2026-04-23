import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Blog from "./Blog";
import Certificate  from "../Components/Certificate";
import About from "../Components/About";
import Timeline from "../Components/Timeline";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Timeline/>
        <Content/>
        <Certificate/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home