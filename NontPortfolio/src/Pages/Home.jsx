import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Project from "../Components/Project"
import Blog from "../Components/Blog"
import Footer from "../Components/Footer"
import TechStack from "../Components/TechStack"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Project/>
        <Blog/>
        <TechStack/>
        <Footer/>
    </div>
  )
}

export default Home