import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Project from './Pages/Project'


function App() {


  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Project' element={<Project/>}/>  
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
