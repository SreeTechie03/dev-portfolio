import  { useState } from 'react';
import { Film, Heart, Ticket, ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Online Movie Streaming Website",
      icon: <Film className="w-8 h-8" />,
      description: "Developed a web-based movie streaming platform with HTML, CSS, and JavaScript, using Google Drive for video storage.",
      features: [
        "Movie catalog with cast, director, and trailer details",
        "Responsive UI for seamless browsing"
      ],
      tech: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }
      ],
      liveUrl: "https://ottnight.me",
      githubUrl: "https://github.com/SreeTechie03/ott-night.git",
      bgImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Cardio Vascular Surgery Predictive Tool",
      icon: <Heart className="w-8 h-8" />,
      description: "Built a Machine Learning model to predict cardiothoracic disease using Gaussian Naïve Bayes, achieving 95% accuracy.",
      features: [
        "Data analysis and interpretation",
        "Algorithm development and optimization"
      ],
      tech: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        }
      ],
      liveUrl: "https://cardio-thoracic.42web.io/?i=2",
      githubUrl: "https://github.com/yourusername/cardio-predictor",
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Online Movie Ticket Booking System",
      icon: <Ticket className="w-8 h-8" />,
      description: "Created an online ticket booking system with user sign-up, login, and a dynamic movie selection interface.",
      features: [
        "Secure authentication",
        "Mobile-responsive design for easy bookings"
      ],
      tech: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }
      ],
      liveUrl: "https://sreetechie03.github.io/movie-ticket-booking/21121A3243/Movie%20Ticket%20Booking.html",
      githubUrl: "https://github.com/SreeTechie03/movie-ticket-booking.git",
      bgImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work showcasing my expertise in web development and machine learning
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
              </div>
              
              <div className="relative p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-lg text-white">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-200 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white/80">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/70">
                          <ChevronRight className="w-4 h-4 mr-2 text-white/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white/80">Technologies Used</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.tech.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-lg rounded-lg"
                        >
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-6 h-6"
                          />
                          <span className="text-sm text-white/90">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg transition-colors duration-200"
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