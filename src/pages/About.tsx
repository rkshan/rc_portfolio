import React from 'react';
import { GraduationCap, Award, Target, Code, Palette, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 90, color: 'bg-blue-500' },
    { name: 'UI/UX Design', icon: Palette, level: 85, color: 'bg-purple-500' },
    { name: 'Backend Development', icon: Database, level: 80, color: 'bg-green-500' },
    { name: 'Web Technologies', icon: Globe, level: 95, color: 'bg-orange-500' },
    { name: 'Mobile Development', icon: Smartphone, level: 75, color: 'bg-pink-500' },
  ];

  const education = [
    {
      degree: 'NDT in Information Technology',
      institution: 'Institute of Technology,University of Moratuwa',
      year: '2023-2026',
      description: 'Specialized in Software Engineering and Human-Computer Interaction'
    },
    {
      degree: 'Full Stack Development ',
      institution: 'University of Moratuwa',
      year: '2023',
      description: 'DP Education certification in Full Stack Development via Open Learn Platform in unversity of Moratuwa'
    }
  ];

  const achievements = [
    'Certificate of Excellence in Front-End Development',
    ' Certificate of Completion – Flutter App Development',
    'Certificate of Participation – Software Engineering Project Showcase',
    'Certificate of Recognition – Human-Computer Interaction Portfolio'
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a strong foundation in computer science 
            and a keen eye for user experience design. I believe in creating digital solutions 
            that are not only functional but also accessible and delightful to use.
          </p>
        </div>

        {/* Personal Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Target className="mr-3 text-blue-600" size={28} />
            My Journey & Aspirations
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="mb-4">
              My journey into technology began during high school when I built my first website. 
              What started as curiosity quickly evolved into a passion for creating digital experiences 
              that solve real-world problems and enhance people's lives.
            </p>
            <p className="mb-4">
              Throughout my academic journey, I've focused on understanding not just how to build 
              software, but how to build it well. I'm particularly interested in the intersection 
              of technology and human behavior, which led me to specialize in Human-Computer Interaction.
            </p>
            <p>
              My career aspiration is to work with innovative teams to create accessible, 
              user-centered applications that make a positive impact. I'm particularly drawn to 
              roles that allow me to bridge the gap between technical implementation and user experience.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={32} />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.degree}</h3>
                <p className="text-blue-600 font-medium mb-2">{item.institution}</p>
                <p className="text-slate-500 text-sm mb-3">{item.year}</p>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Technical Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="mr-3 text-slate-700" size={24} />
                    <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                    <span className="ml-auto text-slate-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Java', 'HTML',
              'MongoDB', 'CSS', 'Tailwind CSS', 'Next.js', 'JavaScript', 'Git'
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <span className="text-slate-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={32} />
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-slate-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;