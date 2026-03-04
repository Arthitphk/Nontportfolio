import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Card_Project from "../Components/Card_Project"
import Blog from "../Components/Blog"
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card_Project/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home