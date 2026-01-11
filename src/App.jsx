import "./App.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Resume from "./Routes/Resume";
import Contact from "./Routes/Contact";
import Education from "./Routes/Education";
import Experience from "./Routes/Experience";
import Skills from "./Routes/Skills";
import Hobbies from "./Routes/Hobbies";
import SimonGame from "./GameProject/SimonGame";
import QuizGame from "./GameProject/QuizGame";
import GameProjects from "./Components/GameProjects";
import ProjectContainer from "./Components/ProjectContainer";
import FreeCommentApp from "./OtherProjects/FreeComment/FreeCommentApp";
import WeatherApp from "./OtherProjects/WeatherApps/WeatherApp";
import MovieApp from "./OtherProjects/MovieApps/MovieApp";
import Project from "./Routes/Project";
import OtherProjects from "./Components/OtherProjects";
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
        <Route path="/project" element={<Project />}>
          <Route element={<ProjectContainer />}>
            <Route index element={null} />
            <Route path="gameProjects" element={<GameProjects />} />
            <Route path="otherProjects" element={<OtherProjects />} />
          </Route>
        </Route>
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/freeCommentApp" element={<FreeCommentApp />} />
        {/* <Route path="/weatherApp" element={<WeatherApp />}>
          <Route index element={<WeatherSmallCards />} />
        </Route> */}
        <Route path="/weatherApp" element={<WeatherApp />} />
        <Route path="movieApp" element={<MovieApp />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/simon" element={<SimonGame />} />
        <Route path="/quiz" element={<QuizGame />} />
        {/* <Route path="/weatherSmallCards" element={<WeatherSmallCards />} /> */}
      </Routes>
    </>
  );
}

export default App;
