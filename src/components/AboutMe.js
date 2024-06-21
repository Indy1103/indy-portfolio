import React from 'react';
import Indy from "../assests/Indy.jpg";

function AboutMe() {
  return (
    <div 
      id="about-me"
      className="text-center bg-custom-slate min-h-96 max-w-6xl mx-auto items-center px-4 py-10"
    >
      <h1 className="gradient-text text-3xl font-bold py-10 drop-shadow-md">About Me</h1>
      <div className="flex flex-col lg:flex-row px-10 items-center">
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={Indy} 
            className="rounded-3xl w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:h-auto object-cover"
            alt="Induwara Kandapahala"
          />
        </div>
        <div className="text-left px-4 lg:px-20 lg:w-2/3">
          <p className="text-white text-base sm:text-lg">
            Hello! I am currently a fourth-year Computer Engineering student at
            the University of Alberta.
          </p>
          <br></br>
          <p className="text-white text-base sm:text-lg">
            Alongside this, I am the President for 
            <a 
              href="https://www.spaceualberta.ca/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="gradient-text drop-shadow-md"
            > 
              Space Exploration Alberta Robotics 
            </a> 
            and a Co-op student for the 
            <a 
              href="https://sites.ualberta.ca/~rafiq1/research-projects.html#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="gradient-text drop-shadow-md"
            > 
              SMART & Sustainable Manufacturing Systems Lab
            </a>.
          </p>
          <br></br>
          <p className="text-white text-base sm:text-lg">
            Some of the technologies I’ve worked with:
          </p>
          <br></br>
          <div className="flex justify-left gap-10 md:gap-20 list-rose-gold-arrow drop-shadow-md">
            <ul className="text-white">
              <li>React.js</li>
              <li>ROS 2</li>
              <li>ROS</li>
              <li>C++</li>
            </ul>
            <ul className="text-white">
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
