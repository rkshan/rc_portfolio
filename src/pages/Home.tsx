import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profilepic.png'; 
import cvImage from '../assets/cv.png';

{/* Profile Image */}
<div className="mb-8">
  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl">
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
</div>

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
<div className="mb-8">
  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl">
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
</div>

        {/* Welcome Message */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rukshan
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer passionate about creating exceptional digital experiences 
          with modern web technologies and user-centered design principles.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/projects"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="View my projects"
          >
            <span>View My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <a
  href={cvImage}
  download="Rukshan_CV.png" 
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="group border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
    aria-label="Download my resume"
  >
    <Download size={20} />
    <span>Download Resume</span>
  </button>
</a>
        </div>


        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-slate-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;