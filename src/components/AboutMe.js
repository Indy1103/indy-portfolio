import Indy from "../assests/Indy.jpg"

function AboutMe() {
  return (
    <div className="text-center bg-custom-slate min-h-96  max-w-6xl mx-auto items-center px-4 py-10">
      <h1 className="gradient-text text-3xl font-bold py-10 drop-shadow-md"> About Me</h1>
      <div className="flex px-10">
        <div className="text-left px-20 md:w-2/3">
          <p className="text-white text-lg">
            Hello! I am currently a fourth-year Computer Engineering student at
            the University of Alberta.{" "}
          </p>
          <br></br>
          <p className="text-white text-lg">
            Alongside this, I am the President for 
            <span  className="gradient-text drop-shadow-md"> Space Exploration Alberta Robotics </span>
             and a Co-op student for the 
            <span className="gradient-text drop-shadow-md"> SMART & Sustainable </span>
            Manufacturing Systems Lab.
          </p>
          <br></br>
          <p className="text-white text-lg">
            Some of the technologies I’ve worked with:
          </p>
          <br></br>
          <div className="flex justify-left gap-20 list-rose-gold-arrow drop-shadow-md">
            <ul className="text-white">
              <li>React.js</li>
              <li>ROS 2</li>
              <li>ROS</li>
              <li>C++</li>
            </ul>

            <ul className="text-white ">
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/3 justify-center ">
          <img
            src={Indy} className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
