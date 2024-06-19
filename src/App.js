import AboutMe from "./components/AboutMe";
import LinkButtons from "./components/LinkButtons";
import NavBar from "./components/NavBar";
import Rover from "./components/Rover";
import TitlePage from "./components/TitlePage";

function App() {
  return (
    <div className="bg-custom-slate">
      <NavBar />
      <Rover />
      <TitlePage />
      <LinkButtons />
      <AboutMe />
    </div>
  );
}

export default App;
