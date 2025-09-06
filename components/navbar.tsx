"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState("home");

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const scrollToSection = (sectionId: string) => {
      setIsMenuOpen(false);
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
         setActiveSection(sectionId);
      }
   };

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }

         // Update active section based on scroll position
         const sections = ["home", "about", "skills", "reviews", "contact"];

         // Check if we're at the top of the page (home section)
         if (window.scrollY < 100) {
            setActiveSection("home");
            return;
         }

         // Find the section that is currently most visible in the viewport
         let currentSection = activeSection;
         let maxVisibility = 0;

         sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
               const rect = element.getBoundingClientRect();
               // Calculate how much of the section is visible in the viewport
               const visibleHeight =
                  Math.min(rect.bottom, window.innerHeight) -
                  Math.max(rect.top, 0);
               const visiblePercentage =
                  visibleHeight > 0 ? visibleHeight / element.offsetHeight : 0;

               // If this section has more visibility than our current max, update the active section
               if (visiblePercentage > maxVisibility) {
                  maxVisibility = visiblePercentage;
                  currentSection = sectionId;
               }
            }
         });

         if (currentSection !== activeSection) {
            setActiveSection(currentSection);
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Initial check to set the correct active section
      handleScroll();

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [activeSection]);

   // Reveal animation for sections
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("active");
               }
            });
         },
         { threshold: 0.1 }
      );

      document.querySelectorAll(".reveal").forEach((element) => {
         observer.observe(element);
      });

      return () => {
         document.querySelectorAll(".reveal").forEach((element) => {
            observer.unobserve(element);
         });
      };
   }, []);

   const navItems = [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Reviews", id: "reviews" },
      { name: "Contact", id: "contact" },
   ];

   return (
      <motion.header
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5 }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
               ? "glass-effect border-b border-gray-200/20"
               : "bg-transparent"
         }`}
      >
         <div className='container max-w-6xl mx-auto px-6 md:px-8'>
            <div className='flex items-center justify-between h-20'>
               <motion.div
                  className='flex-shrink-0'
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 1 }}
               >
                  <button
                     onClick={() => scrollToSection("home")}
                     className='text-xl font-medium tracking-tight gradient-text'
                  >
                     IamGopal
                  </button>
               </motion.div>

               {/* Desktop Navigation */}
               <nav className='hidden md:flex items-center space-x-10'>
                  {navItems.map((item) => (
                     <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-sm font-medium transition-colors relative ${
                           activeSection === item.id
                              ? "text-black dark:text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        }`}
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 1 }}
                     >
                        {item.name}
                        {activeSection === item.id && (
                           <motion.div
                              className='absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full'
                              layoutId='activeSection'
                           />
                        )}
                     </motion.button>
                  ))}
                  <div className='flex items-center space-x-4'>
                     <ThemeToggle />
                     <motion.a
                        href='/resume-gopal.pdf'
                        download
                        className='inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 h-10 px-6 py-2'
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 1 }}
                     >
                        <Download className='mr-2 h-4 w-4' />
                        Resume
                     </motion.a>
                  </div>
               </nav>

               {/* Mobile Menu Button */}
               <div className='md:hidden flex items-center space-x-4'>
                  <ThemeToggle />
                  <motion.button
                     onClick={toggleMenu}
                     className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white focus:outline-none'
                     whileTap={{ scale: 0.9 }}
                  >
                     {isMenuOpen ? (
                        <X className='h-6 w-6' />
                     ) : (
                        <Menu className='h-6 w-6' />
                     )}
                  </motion.button>
               </div>
            </div>
         </div>

         {/* Mobile Navigation */}
         {isMenuOpen && (
            <motion.div
               className='md:hidden glass-effect'
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.2 }}
            >
               <div className='container max-w-6xl mx-auto px-6 py-6'>
                  <nav className='flex flex-col space-y-6'>
                     {navItems.map((item, index) => (
                        <motion.button
                           key={item.name}
                           onClick={() => scrollToSection(item.id)}
                           className={`text-left text-lg font-medium ${
                              activeSection === item.id
                                 ? "text-black dark:text-white"
                                 : "text-gray-600 dark:text-gray-400"
                           }`}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                           {item.name}
                        </motion.button>
                     ))}
                     <motion.a
                        href='/resume-gopal.pdf'
                        download
                        className='inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 h-12 px-6 py-2 w-full'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                           duration: 0.3,
                           delay: navItems.length * 0.1,
                        }}
                     >
                        <Download className='mr-2 h-4 w-4' />
                        Resume
                     </motion.a>
                  </nav>
               </div>
            </motion.div>
         )}
      </motion.header>
   );
}
