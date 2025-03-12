import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const roles = ["Web Developer", "Data Scientist", "UI/UX Designer", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sreedhar_Padigala_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-dark dark:to-dark-lighter">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQFkaw6G3z9aGw/profile-displayphoto-shrink_400_400/B4EZSJeI9OGwAg-/0/1737473168501?e=1746662400&v=beta&t=oSv0rFfHjQwCj0QkkfsPlevsf7PQroKsajTfeUKmZA8"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto shadow-lg ring-4 ring-accent-primary dark:ring-accent-secondary"
          />
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Padigala Venkata Sreedhar
        </h1>
        
        <div className="h-8 mb-6">
          <h2 className="text-2xl text-gray-700 dark:text-gray-300">
            I am a{" "}
            <span 
              className={`text-accent-primary dark:text-accent-secondary transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {roles[currentRoleIndex]}
            </span>
          </h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          I am a Data Science student and a React Developer intern at SmartED Innovations. I'm also learning AWS and working on a Data Analytics project.
        </p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://github.com/SreeTechie03" target="_blank" rel="noopener noreferrer"
             className="p-2 text-gray-600 hover:text-accent-primary dark:text-accent-secondary dark:hover:text-accent-hover transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sreedhar-padigala-572980267/" target="_blank" rel="noopener noreferrer"
             className="p-2 text-gray-600 hover:text-accent-primary dark:text-accent-secondary dark:hover:text-accent-hover transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:sreedharpadigela222@gmail.com"
             className="p-2 text-gray-600 hover:text-accent-primary dark:text-accent-secondary dark:hover:text-accent-hover transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleDownload}
            className="bg-accent-primary dark:bg-accent-secondary text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-accent-hover transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
          <a href="#contact" className="bg-dark dark:bg-dark-lighter text-white px-8 py-3 rounded-lg hover:bg-dark-lighter dark:hover:bg-dark transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;