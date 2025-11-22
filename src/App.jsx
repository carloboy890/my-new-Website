import "./App.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Resume from "./Routes/Resume";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import Education from "./Routes/Education";
import Experience from "./Routes/Experience";
import Skills from "./Routes/Skills";
import Hobbies from "./Routes/Hobbies";
import SimonGame from "./GameProject/SimonGame";
import QuizGame from "./GameProject/QuizGame";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import MusicPlayer from "./Components/MusicPlayer";

function App() {
  return (
    <>
      {/* <MusicPlayer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Hobbies" element={<Hobbies />}></Route>
        <Route path="/simon" element={<SimonGame />}></Route>
        <Route path="/quiz" element={<QuizGame />}></Route>
      </Routes>
    </>
  );
}

export default App;
