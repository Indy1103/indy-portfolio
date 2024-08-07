import React, { useState } from "react";
import Modal from 'react-modal';

const experiences = [
  {
    title: "SPEAR Software Lead",
    description: [
      "Led and managed a team of 10, supervising the development of software for an autonomous robotic platform and manipulator.",
      "Designed the system architecture and implemented a robust codebase using ROS2 to enable wireless driving and manipulation of the robotic arm.",
      "Coordinated project planning, task delegation, and timeline management, ensuring on-time delivery and integration of all software components.",
      "Developed efficient algorithms and optimized communication protocols with ROS2, significantly improving system responsiveness and reliability.",
    ],
    github: "https://github.com/UofA-SPEAR/Software_Kipp",
  },
  {
    title: "SMART - Robotics GUI Interface",
    description: [
      "Created an interactive graphical user interface using React and Tailwind to control a 6-DOF robotic arm.",
      "Implemented a robust ROS2 API to facilitate seamless communication with the Ufactory robot, enhancing operational efficiency.",
      "Enabled intuitive control of the robotic arm, resulting in improved user experience and increased task precision."
    ],
  },
  {
    title: "SMART - AI 6 DOF Arm Code",
    description: [
      "Utilized OpenCV to develop computer vision algorithms for accurate object detection and manipulation.",
      "Designed and optimized a gripper control algorithm, significantly enhancing the arm’s grasping accuracy and efficiency.",
      "Worked closely with teams specializing in robotics, computer vision, and software development to ensure seamless integration, contributing to a research publication conferences, and presentations."
    ],
  },
  {
    title: "Autonomous Rover",
    description: [
      "Led the design and development of an autonomous rover system, utilizing 3D cameras for environmental perception and navigationr",
      "Developed low-level code and drivers for various sensors, integrating them seamlessly with the rover's control system using ROS2.",
      "Implemented key autonomy features, including localization, object detection, and path planning, enabling the rover to navigate complex environments independently.",
      "Utilized ROS2 for efficient communication and coordination between the rover's subsystems, significantly enhancing system performance and reliability.",
    ],
    github: "https://github.com/UofA-SPEAR/Software_Kipp/tree/main/src/kipp_nav",
  },
  {
    title: "Rocker Bogie Control Algorithms",
    description: [
      "Developed and implemented a rocker bogie control algorithm by researching and synthesizing information from academic papers, enhancing the rover's stability and maneuverability",
      "Wrote steering code to implement various steering modes, including Ackerman steering, for independent steering and drive motors, optimizing the rover's navigation capabilities.",
      "Utilized CAN (Controller Area Network) for reliable communication between the rover's steering and drive systems, ensuring precise and coordinated movements.",
    ],
    github: "https://github.com/UofA-SPEAR/Software_Kipp/blob/main/src/kipp_control/kipp_control/kipp_can_drive.py",
  },
  {
    title: "Portfolio Website",
    description: [
      "Designed and developed a responsive portfolio website using React, CSS, and Tailwind, ensuring optimal performance across various devices.",
      "Created the UI/UX design in Figma, focusing on an intuitive and visually appealing user experience.",
      "Implemented modern web design principles and best practices to enhance user engagement and accessibility."
    ],
    github: "https://github.com/Indy1103/indy-portfolio/tree/main",
  },
  {
    title: "Docker Images",
    description: [
      "Designed Docker images for ROS and ROS2, creating streamlined development environments for robotics applications.",
      "Simplified startup and development processes, enabling quick and efficient setup for robotics projects.",
      "Ensured consistency and reproducibility across various development setups, enhancing collaboration and productivity within the team."
    ],
  },
  {
    title: "SPEAR President",
    description: [
      "Directed interdisciplinary technical teams to design and construct an autonomous Mars rover, ensuring integration and performance of electrical, software, and mechanical systems.",
      "Executed comprehensive project management and made critical decisions in high-stakes environments, leading the development of a 6 DOF arm and rocker bogie for extreme terrain navigation.",
      "Strategically coordinated technical efforts and oversaw successful participation in the Canadian International Rover Challenge"
    ],
  },
  {
    title: "DFS and BFS Visualizer",
    description: [
      "Developed a Python application using Tkinter for interactive graph creation, editing, and visualization.",
      "Implemented real-time visualizations for Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms, allowing users to toggle nodes, create edges, and set starting points.",
      "Enabled user-friendly graph management with features to clear graphs, and control algorithm execution, enhancing testing and educational use cases."
    ],
    github: "https://github.com/Indy1103/pathfinding_visualization",
  },
];

Modal.setAppElement('#root'); // To prevent screen readers from reading content outside the modal

function ExperienceCard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setModalIsOpen(false);
  };

  return (
    <div id="experiences" className="text-center max-w-4xl mx-auto px-4 text-white text-xl p-8 relative">
      <h1 className="text-3xl font-bold gradient-text mb-8">Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 border-2 rounded-3xl bg-slate-900 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(experience)}
          >
            {experience.title}
          </div>
        ))}
      </div>
      {selectedExperience && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Experience Details"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-slate-800 rounded-lg p-6 w-full max-w-3xl mx-auto overflow-auto max-h-full text-white">
            <div className="flex justify-between items-center mb-4">
              <button
                className="text-white text-lg"
                onClick={closeModal}
              >
                &larr; Back
              </button>
              {selectedExperience.github && (
                <a
                  href={selectedExperience.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
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
            <h2 className="text-2xl font-bold mb-4">{selectedExperience.title}</h2>
            <ul className="list-disc pl-5 space-y-2">
              {selectedExperience.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ExperienceCard;
