import { useEffect, useState } from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Theme = () => {
    const [darkMode, setdarkMode] = useState(true)

    

    useEffect (() => {
        const theme = localStorage.getItem("theme")
        if (theme === "light")  setdarkMode(false) 
        
    },[])



    useEffect (() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    },[darkMode])

  return (
    <div className="relative w-16 h-8 flex items-center
     dark:bg-gray-700 bg-green-300 cursor-pointer rounded-full p-1  " 
     onClick={() => setdarkMode(!darkMode)}>
        <WbSunnyIcon className="text-yellow-400"/>
        <div className="absolute   dark:bg-gray-900 bg-yellow-300 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? {left: "4px"} : {right:"4px"}}
        ></div>
        <ModeNightIcon className="ml-auto text-gray-900"/>
    </div>
  )
}

export default Theme