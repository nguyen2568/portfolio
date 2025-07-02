import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from "motion/react";
import { cn } from "../utils/meteor";

const Navbar = ({number, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();
  const [isTop, setIsTop] = useState(true);

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Function to determine active section based on scroll position
  useEffect(() => {
    setIsTop(window.pageYOffset <= 100); // Check if at the top of the page
    window.onscroll = () => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition <= 100); // Check if at the top of the page
    }
      
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClassName = (sectionId) => {
    const base = "mx-2 px-6 py-2 border-2 border-black dark:border-white font-semibold transition-colors duration-200 cursor-pointer";
    const active = "bg-black dark:bg-white text-white dark:text-black";
    const inactive = "text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black";
    return `${base} ${activeSection === sectionId ? active : inactive}`;
  };

  const meteors = new Array(number || 20).fill(true);

  return (
    <nav className={`fixed z-2 top-0 left-0 w-full bg-white border-b 
    ${isDarkMode && isTop &&  'border-none'} ${isTop ? '' : 'shadow-md'} ${isDarkMode ? 'dark:border-gray-700' : 'border-white'} dark:bg-gray-900 transition-all duration-300 overflow-hidden`}>
      {isDarkMode && isTop &&
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
            {meteors.map((el, idx) => {
              const meteorCount = number || 15;
              // Calculate position to evenly distribute meteors across container width
              const position = idx * (2000 / meteorCount) - 400; // Spread across 800px range, centered
      
              return (
                <span
                  key={"meteor" + idx}
                  className={cn(
                    "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[20deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                    "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                    className
                  )}
                  style={{
                    top: "-40px", // Start above the container
                    left: position + "px",
                    animationDelay: Math.random() * 5 + "s", // Random delay between 0-5s
                    animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s", // Keep some randomness in duration
                  }}></span>
              );
            })}
          </motion.div>
      } 
      
      <div className="relative flex flex-col items-center justify-center px-4 py-4 md:px-8">
        {/* Dark mode toggle button - positioned on the right */}
        <button
          onClick={() => {
            toggleTheme();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {/* Hamburger button for mobile */}
        <button
          className="left-4 md:hidden focus:outline-none p-2 text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation links */}
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center w-full space-y-2 md:space-y-0 md:flex md:flex-row md:justify-center md:w-auto`}>
          <button onClick={() => scrollToSection('home')} className={getLinkClassName('home')}>HOME</button>
          <button onClick={() => scrollToSection('about')} className={getLinkClassName('about')}>ABOUT</button>
          <button onClick={() => scrollToSection('experience')} className={getLinkClassName('experience')}>EXPERIENCE</button>
          <button onClick={() => scrollToSection('projects')} className={getLinkClassName('projects')}>PROJECT</button>
          <button onClick={() => scrollToSection('contact')} className={getLinkClassName('contact')}>CONTACT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
