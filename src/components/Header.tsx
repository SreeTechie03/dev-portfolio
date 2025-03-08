import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="fixed w-full bg-white dark:bg-dark-lighter shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-accent-secondary">
            PVS
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">Experience</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark transition-colors"
            >
              {isDarkMode ? 
                <Sun className="w-5 h-5 text-accent-secondary" /> : 
                <Moon className="w-5 h-5 text-gray-600" />
              }
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600 dark:text-accent-secondary" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;