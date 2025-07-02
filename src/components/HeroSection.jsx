import { motion } from "motion/react";
import { Linkedin, Github, MapPin, Mail } from 'lucide-react';
import Man from '../assets/man.svg';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section border-b-4 border-dotted border-black dark:border-white mb-8 pt-8 pb-8 relative z-1 overflow-hidden">  
      <div className='relative flex flex-col items-center justify-center text-center'>
        
        <motion.h1 
          className="text-6xl font-bold uppercase tracking-wider mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            type: "spring",
            stiffness: 150,
            damping: 12
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Hi. I'm{" "}
          </motion.span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 dark:from-blue-400 dark:via-purple-400 dark:to-red-400"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.5,
              type: "spring",
              stiffness: 250
            }}
          >
            Giang
          </motion.span>
        </motion.h1>

        <motion.img 
          src={Man} 
          alt="Profile" 
          className="w-20 h-20 rounded-full mb-8" 
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.7, 
            duration: 0.5,
            type: "spring",
            stiffness: 250,
            damping: 18
          }}
        />

        <motion.h2 
          className="text-2xl uppercase mb-8 font-semibold tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
        >
          Software Engineering | Full-Stack Developer
        </motion.h2>

        <motion.hr 
          className="w-24 h-1 bg-black dark:bg-white mb-8" 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
        />

        <motion.p 
          className="text-lg uppercase tracking-wide mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4, ease: "easeOut" }}
        >
          WELCOME TO MY PORTFOLIO! I'M A FULL-STACK DEVELOPER WITH A PASSION FOR CREATING INNOVATIVE AND SCALABLE WEB, MOBILE, DESKTOP APPLICATIONS. EXPLORE MY WORK AND CONNECT WITH ME!
        </motion.p>

        <motion.div 
          className='social-link flex gap-4 mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
        >
          <a href="https://github.com/nguyen2568" target='_blank' className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
            <Github className="mr-2" size={20} />
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/giangnt0321/" target='_blank' className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
            <Linkedin className="mr-2" size={20} />
            LINKEDIN
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-8 text-sm uppercase tracking-wide flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            SASKATCHEWAN, CANADA
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-1" />
            truonggiang.nguyen2196@gmail.com
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
