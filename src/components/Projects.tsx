import React from 'react';
import { Film, Heart, Ticket, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Online Movie Streaming Website",
      icon: <Film className="w-6 h-6 text-accent-secondary" />,
      description: "Developed a web-based movie streaming platform with HTML, CSS, and JavaScript, using Google Drive for video storage.",
      features: [
        "Movie catalog with cast, director, and trailer details",
        "Responsive UI for seamless browsing"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Google Drive Storage"],
      liveUrl: "https://ottnight.me",
      githubUrl: "https://github.com/SreeTechie03/ott-night.git"
    },
    {
      title: "Cardio Vascular Surgery Predictive Tool",
      icon: <Heart className="w-6 h-6 text-accent-secondary" />,
      description: "Built a Machine Learning model to predict cardiothoracic disease using Gaussian Naïve Bayes, achieving 95% accuracy.",
      features: [
        "Data analysis and interpretation",
        "Algorithm development and optimization"
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      liveUrl: "https://cardio-thoracic.42web.io/?i=2",
      githubUrl: "https://github.com/yourusername/cardio-predictor"
    },
    {
      title: "Online Movie Ticket Booking System",
      icon: <Ticket className="w-6 h-6 text-accent-secondary" />,
      description: "Created an online ticket booking system with user sign-up, login, and a dynamic movie selection interface.",
      features: [
        "Secure authentication",
        "Mobile-responsive design for easy bookings"
      ],
      tech: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://sreetechie03.github.io/movie-ticket-booking/21121A3243/Movie%20Ticket%20Booking.html",
      githubUrl: "https://github.com/SreeTechie03/movie-ticket-booking.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-dark-lighter rounded-lg shadow-lg overflow-hidden border border-transparent dark:border-accent-secondary/20 hover:border-accent-primary dark:hover:border-accent-secondary transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {project.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark text-sm text-gray-600 dark:text-accent-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent-primary dark:text-accent-secondary hover:text-accent-hover transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent-primary dark:text-accent-secondary hover:text-accent-hover transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;