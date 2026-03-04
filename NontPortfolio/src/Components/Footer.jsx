import React from 'react';
// นำเข้าไอคอนจาก Material UI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LaunchIcon from '@mui/icons-material/Launch';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <GitHubIcon fontSize="small" />, href: 'https://github.com' },
    { name: 'LinkedIn', icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <TwitterIcon fontSize="small" />, href: 'https://twitter.com' },
    { name: 'Email', icon: <MailOutlineIcon fontSize="small" />, href: 'mailto:hello@example.com' },
  ];


  return (
    <footer className="w-full bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Dev<span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed">
              สร้างสรรค์ประสบการณ์ดิจิทัลด้วยความประณีตและเทคโนโลยีที่ทันสมัย มุ่งมั่นที่จะเปลี่ยนไอเดียให้เป็นความจริง
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          
          {/* Newsletter / Contact Prompt */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Let's Connect
            </h3>
            <p className="text-sm">Have a project in mind or just want to say hello? Feel free to reach out and let's create something amazing together.</p>
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/20"
            >
              Hire Me <LaunchIcon sx={{ fontSize: 16, ml: 1 }} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs tracking-wide">
          <p>© {currentYear} DevPortfolio. All rights reserved.</p>
          <p className="flex items-center">
            Made with <FavoriteIcon sx={{ fontSize: 14, mx: 0.5, color: '#ef4444' }} /> in Bangkok
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer