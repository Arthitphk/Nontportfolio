import React, { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';




const Theme = () => {
    const [theme, setTheme] = useState(() => {
    // อ่านค่าเริ่มต้นจาก localStorage หรือ System Preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

 return (
           <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg cursor-pointer bg-slate-100 dark:bg-slate-950 hover:ring-2 ring-indigo-500 transition-all flex items-center justify-center "
              title="สลับโหมด"
            >
              {theme === 'dark' ? (
                <LightModeIcon className="text-yellow-500" />
              ) : (
                <DarkModeIcon className="text-indigo-600" />
              )}
            </button>
 )

}
export default Theme