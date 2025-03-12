import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Programming Languages");

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=32&h=32&q=80",
      skills: [
        { 
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: 90
        },
        { 
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: 85
        },
        { 
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          level: 95
        },
        { 
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          level: 88
        },
        { 
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 92
        }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?auto=format&fit=crop&w=32&h=32&q=80",
      skills: [
        { 
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          level: 88
        },
        { 
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 85
        },
        { 
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          level: 80
        },
        { 
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          level: 82
        },
        {
          name: "Matplotlib",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
          level: 78
        }
      ]
    },
    {
      title: "Developer Tools",
      icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=32&h=32&q=80",
      skills: [
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          level: 90
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          level: 95
        },
        {
          name: "Power BI",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
          level: 85
        }
      ]
    },
    {
      title: "Design Tools",
      icon: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=32&h=32&q=80",
      skills: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          level: 80
        }
      ]
    },
    {
      title: "Database & Analytics",
      icon: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=32&h=32&q=80",
      skills: [
        {
          name: "Data Structures",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          level: 85
        },
        {
          name: "Algorithms",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: 82
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          level: 88
        },
        {
          name: "Power BI",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
          level: 85
        }
      ]
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.title === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className={`
                  px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                  ${activeCategory === category.title 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                `}
              >
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="w-5 h-5 object-cover rounded"
                />
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <span className="ml-auto text-blue-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;