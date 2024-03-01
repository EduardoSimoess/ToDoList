import React, { useState } from 'react';
import {MdDarkMode , MdSunny} from 'react-icons/md'


export default function ToggleBtn() {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>("dark");

    const handleToggleDarkMode = () => {
        const colorTheme = theme === "dark" ? "light" : "dark";
        setTheme(colorTheme)
        console.log(colorTheme)  
        document.documentElement.classList.remove(colorTheme);
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', colorTheme);
    };

    return (
        <div className={`w-20 flex items-center`}>
            {isChecked ? (
                <div onClick={()=>{
                  setIsChecked(false)
                  handleToggleDarkMode()  
                }}>
                  <MdDarkMode className="w-7 h-7 md:h-10 md:w-10  bg-black shadow-md shadow-black   rounded-full  text-white " />
                </div>
              ) : (
                <div onClick={()=>{
                  setIsChecked(true)
                  handleToggleDarkMode()  
                }}>
                  <MdSunny className="w-7 h-7 md:h-10 md:w-10 text-amber-300  bg-white shadow-md shadow-black rounded-full " />
                </div>
              )}
        </div>
      );
}