import React from 'react';
import { Briefcase, Award, Trophy } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Internship */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Salesforce Developer Intern
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">SmartInternz</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Successfully completed the Salesforce Developer Certification</li>
              <li>Gained expertise in Salesforce development best practices and methodologies</li>
            </ul>
          </div>

          {/* SmartED Innovations Internship */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Developer Intern
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">SmartED Innovations</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Secured the internship through a hackathon organized by SmartED Innovations</li>
              <li>Developing innovative solutions using cutting-edge technologies</li>
              <li>Collaborating with a team to enhance and deploy projects efficiently</li>
            </ul>
          </div>

          {/* Hackathons */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hackathons & Competitions
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  SmartED Innovations Hackathon
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Competed in the SmartED Innovations Hackathon and secured an internship opportunity. Developed an innovative solution using modern technologies.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Masscoders Hackathon
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Participated in an online web development hackathon and achieved certification
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Aishwi Technologies Hackathon (IBM Collaboration)
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Attended a live hackathon focused on web development and received certification
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">ServiceNow:</span> Certified Administrative Developer
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Infosys Springboard:</span> Python Foundation Certification
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Coursera:</span>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Google Project Management: Professional Certificate</li>
                  <li>Microsoft Power BI Data Analyst Professional Certificate</li>
                </ul>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Pearson – MePro:</span> Level 10 English Standard Course
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
