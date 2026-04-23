import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Blog from './Pages/Blog'

function App() {


  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Blog' element={<Blog/>}/>    
      </Routes>
    </>
  )
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default WrappedApp
