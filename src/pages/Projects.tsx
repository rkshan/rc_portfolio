import React from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import myImage from '../assets/download.jpg'; 
import myImage1 from '../assets/blackhole.png'; 
import myImage2 from '../assets/eventmaster.png'; 

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'TaskMaster - Task Management App',
      description: 'A comprehensive project management application built with React and Node.js. Features real-time collaboration, task tracking, and team communication tools. Implements user-centered design principles with extensive usability testing.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/rkshan/task_master.git',
      demo: 'https://task-master-mocha-ten.vercel.app/',
      image: myImage,
      status: 'Completed',
      duration: '2 weeks',
      team: 'Solo project',
      highlights: [
        'Reduced project completion time by 40%',
        'Achieved 98% user satisfaction score',
        'Supports 5+ concurrent users'
      ]
    },
    {
      id: 2,
      title: 'BLACKHOLE-Space Detail App',
      description: 'Can be used to view the details of a black hole, including its mass, radius, and distance from Earth. The app features a clean, modern design with a focus on accessibility and user experience. It includes interactive charts and graphs to visualize data.',
      technologies: ['flutter', 'Dart', 'C++',],
      github: 'https://github.com/rkshan/flutter_first_app.git',
      demo: 'https://github.com/rkshan/flutter_first_app.git',
      image: myImage1 ,
      status: 'In Development',
      duration: '1 month',
      team: 'Solo project',
      highlights: [
        ' User-friendly interface with dark mode',
        'Multi-language support',
        'Real-time data processing'
      ]
    },
    {
      id: 3,
      title: 'EventMaster.lk - Event Management Platform',
      description: 'A full-stack event management platform that allows users to create, manage, and promote events. Built with HTML,CSS & JavaScript it features a responsive design and robust user authentication. The platform emphasizes user engagement and accessibility.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rkshan/international_research_conference.git',
      demo: 'https://international-research-conference.vercel.app/',
      image: myImage2,
      status: 'Completed',
      duration: '1 month',
      team: 'Solo project',
      highlights: [
        'Improved study efficiency by 35%',
        'Screen reader compatible',
       
      ]
    },
    
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of applications I've built, focusing on user-centered design, 
            accessibility, and modern web technologies. Each project demonstrates different 
            aspects of full-stack development and HCI principles.
          </p>
        </div>

        {/* Project Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-100 h-32 lg:h-full object-cover "
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                  <div className="text-center">
                    <Calendar className="mx-auto mb-1 text-slate-500" size={20} />
                    <p className="text-sm text-slate-600">{project.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users className="mx-auto mb-1 text-slate-500" size={20} />
                    <p className="text-sm text-slate-600">{project.team}</p>
                  </div>
                  <div className="text-center">
                    <Star className="mx-auto mb-1 text-slate-500" size={20} />
                    <p className="text-sm text-slate-600">Featured</p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      
        
      </div>
    </div>
  );
};

export default Projects;