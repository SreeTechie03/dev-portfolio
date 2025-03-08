import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // The PDF file should be in the public folder
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
        
        <h2 className="text-2xl text-accent-primary dark:text-accent-secondary mb-6">
          Computer Science & Engineering in Data Science
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          A passionate Data Science and Web Development enthusiast with hands-on experience in 
          Machine Learning, Full-Stack Development, and cloud technologies.
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