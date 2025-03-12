import { GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      school: "Sree Vidyanikethan Engineering College, Tirupati",
      degree: "Bachelor of Technology, Computer Science and Engineering (Data Science)",
      year: "2021 – 2025",
      grade: "CGPA: 8.07"
    },
    {
      school: "Lakshyaa Junior Kalasala, Guntur",
      degree: "Intermediate in Mathematics, Physics, and Chemistry",
      year: "2020 – 2021",
      grade: "CGPA: 8.43"
    },
    {
      school: "C.S. Raju High School, Rayachoty.",
      degree: "Secondary School Certificate",
      year: "2019",
      grade: "CGPA: 9.30"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.school}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.degree}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{edu.year}</span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;