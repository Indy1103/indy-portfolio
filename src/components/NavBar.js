import React from "react";
import Github from "../assests/github-mark-white.png";
import LinkedIn from "../assests/In-White-96.png";
import Mail from "../assests/mail-white.png";

function NavBar() {
  return (
    <nav className="bg-custom-slate px-12 py-6 pl-20 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <ul className="flex space-x-12 text-white text-lg">
        <li className="hover-gradient-text text-xl">
          Indy
          <a href="#home">Home</a>
        </li>
        <li className="hover-gradient-text">
          <a href="#home">Home</a>
        </li>
        <li className="hover-gradient-text">
          <a href="#about-me">About Me</a>
        </li>
        <li className="hover-gradient-text">
          <a href="#experiences">Experiences</a>
        </li>
      </ul>
      <div className="flex space-x-6">
        <a
          href="https://github.com/Indy1103"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="GitHub" className="h-6 w-6 object-contain" />
        </a>
        <a
          href="https://www.linkedin.com/in/indy03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="h-6 w-6 object-contain"
          />
        </a>
        <a href="mailto:induwara.b03@gmail.com">
          <img src={Mail} alt="Email" className="h-6 w-6 object-contain" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
