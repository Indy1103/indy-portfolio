function ExperienceCard() {

const experiences = [
    'SPEAR Software Lead',
    'Robotics GUI Interface',
    'AI 6 DOF Arm Code',
    'Autonomous Rover',
    'Rocker Bogie Control Algorithms',
    'Portfolio Website',
    'Docker Images',
    'SPEAR President',
    'DFS and BFS Visualizer',
    ];

return(
    
      <div className="text-center max-w-4xl mx-auto px-4 text-white text-xl p-8">
        <h1 className="text-3xl font-bold rose-gold-text rose-gold-shadow mb-8">Experience</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-10">
          {experiences.map((experience, index) => (
            <div key={index} className=" p-6 border-2  hover:border-rose-300 hover:shadow-lg rounded-3xl flex items-center justify-center h-36 bg-slate-900">
              {experience}
            </div>
          ))}
        </div>
      </div>
)
}

export default ExperienceCard;
