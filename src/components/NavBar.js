function NavBar() {
    return (
        <nav className="bg-slate-900 px-12 py-5">
        <ul className="flex justify-end space-x-14 text-white text-lg ">
          <li className="hover-gradient-text">Home</li>
          <li className="hover-gradient-text">Experience</li>
          <li className="hover-gradient-text">Resume</li>
        </ul>
      </nav>
    );
  }

  export default NavBar;