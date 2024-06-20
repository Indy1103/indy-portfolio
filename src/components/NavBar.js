function NavBar() {
  return (
    <nav className="bg-slate-900 px-12 py-6 flex justify-between items-center">
      <div className="text-white text-lg">Indy</div>
      <ul className="flex space-x-14 text-white text-lg">
        <li className="hover-gradient-text">Home</li>
        <li className="hover-gradient-text">Experience</li>
        <li className="hover-gradient-text">Resume</li>
      </ul>
    </nav>
  );
}

export default NavBar;
