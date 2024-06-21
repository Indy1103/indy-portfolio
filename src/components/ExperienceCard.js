import React, { useState } from "react";

const experiences = [
  {
    title: "SPEAR Software Lead",
    description: [
      "Lead development of software for robotic systems",
      "Focusing on integration and performance optimization",
    ],
    github: "https://github.com/example/repo1",
  },
  {
    title: "Robotics GUI Interface",
    description: [
      "Developed a graphical user interface for robotic control systems",
      "Enhancing user interaction and system monitoring",
    ],
    github: "https://github.com/example/repo2",
  },
  {
    title: "AI 6 DOF Arm Code",
    description: [
      "Implemented AI algorithms for controlling a 6-DOF robotic arm",
      "Improving precision and autonomy",
    ],
    github: "https://github.com/example/repo3",
  },
  {
    title: "Autonomous Rover",
    description: [
      "Designed and coded autonomous navigation algorithms for a rover",
      "Enabling obstacle avoidance and path planning",
    ],
    github: "https://github.com/example/repo4",
  },
  {
    title: "Rocker Bogie Control Algorithms",
    description: [
      "Developed control algorithms for rocker bogie systems",
      "Optimizing stability and mobility on rough terrains",
    ],
    github: "https://github.com/example/repo5",
  },
  {
    title: "Portfolio Website",
    description: [
      "Built and designed a personal portfolio website",
      "Showcasing projects, skills, and experiences using modern web technologies",
    ],
    github: "https://github.com/example/repo6",
  },
  {
    title: "Docker Images",
    description: [
      "Created and maintained Docker images for various applications",
      "Streamlining deployment and scalability",
    ],
    github: "https://github.com/example/repo7",
  },
  {
    title: "SPEAR President",
    description: [
      "Led and managed the SPEAR student organization",
      "Overseeing projects and promoting robotics and engineering activities",
    ],
  },
  {
    title: "DFS and BFS Visualizer",
    description: [
      "Developed a visualizer for Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms",
      "Aiding in algorithm understanding",
    ],
    github: "https://github.com/example/repo9",
  },
];

function ExperienceCard() {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    setExpanded(index);
  };

  const handleCollapse = () => {
    setExpanded(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.closest(".expanded-card") === null) {
      handleCollapse();
    }
  };

  return (
    <div
      id="experiences"
      className="text-center max-w-4xl mx-auto px-4 text-white text-xl p-8 relative"
      onClick={handleOutsideClick}
    >
      <h1 className="text-3xl font-bold gradient-text mb-8">Experience</h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`p-6 border-2 rounded-3xl transition-all duration-700 ease-in-out cursor-pointer ${
              expanded === index
                ? "absolute top-0 left-0 w-full h-full bg-slate-800 z-10 expanded-card"
                : "h-36 bg-slate-900 flex items-center justify-center"
            } ${
              expanded !== null && expanded !== index
                ? "opacity-50 pointer-events-none"
                : "opacity-100"
            }`}
            style={{ transition: "all 0.25s ease-in-out" }}
            onClick={(e) => {
              e.stopPropagation();
              expanded === index ? handleCollapse() : handleExpand(index);
            }}
          >
            {expanded === index ? (
              <div className="w-full relative p-10 text-left">
                <div className="flex justify-between items-center mb-4">
                  <button
                    className="px-2 py-1 bg-gray-800 rounded text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCollapse();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="url(#paint0_linear_89_19)"
                    >
                      <defs>
                        <linearGradient
                          id="paint0_linear_89_19"
                          x1="3.34393"
                          y1="9.20557"
                          x2="68.8824"
                          y2="68.2654"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B76E79" />
                          <stop offset="0.5" stopColor="#D4A5A5" />
                          <stop offset="1" stopColor="#B76E79" />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-2 py-1 bg-gray-800 rounded text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 26 24"
                        fill="white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.398 7.856 10.922.574.104.792-.25.792-.558v-2.02c-3.204.696-3.876-1.545-3.876-1.545-.523-1.329-1.278-1.684-1.278-1.684-1.044-.715.08-.7.08-.7 1.154.082 1.76 1.185 1.76 1.185 1.026 1.759 2.69 1.25 3.342.956.104-.744.4-1.25.728-1.538-2.556-.288-5.24-1.278-5.24-5.68 0-1.254.448-2.278 1.185-3.078-.12-.288-.52-1.464.112-3.05 0 0 .976-.312 3.198 1.184.924-.256 1.92-.384 2.906-.384.988 0 1.982.128 2.908.384 2.22-1.496 3.192-1.184 3.192-1.184.636 1.586.236 2.762.116 3.05.74.8 1.184 1.824 1.184 3.078 0 4.412-2.688 5.388-5.248 5.676.404.348.772 1.048.772 2.116v3.136c0 .308.224.668.792.558C20.708 21.398 24 17.092 24 12c0-6.352-5.148-11.5-11.5-11.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-10">{experience.title}</h2>
                <ul className="list-disc pl-5">
                  {experience.description.map((point, i) => (
                    <li key={i} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center">{experience.title}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
