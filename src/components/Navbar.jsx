import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

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
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'contact'];
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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
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
          <button onClick={() => scrollToSection('contact')} className={getLinkClassName('contact')}>CONTACT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
