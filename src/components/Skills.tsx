import React from 'react';
import { Code, Database, Palette, PenTool as Tool, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Terminal className="w-6 h-6 text-green-600" />,
      skills: ["Bootstrap", "React", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Developer Tools",
      icon: <Tool className="w-6 h-6 text-purple-600" />,
      skills: ["GitHub", "VS Code", "Power BI"]
    },
    {
      title: "Design Tools",
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      skills: ["Figma"]
    },
    {
      title: "Database & Analytics",
      icon: <Database className="w-6 h-6 text-yellow-600" />,
      skills: ["Data Structures", "Algorithms", "SQL", "Power BI"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;