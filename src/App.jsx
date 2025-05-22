import "./App.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Resume from "./Routes/Resume";
import Contact from "./Routes/Contact";
import LearnMore from "./Routes/LearnMore";
import Education from "./Routes/Education";
import Experience from "./Routes/Experience";
import Skills from "./Routes/Skills";
import Hobbies from "./Routes/Hobbies";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Learn-more" element={<LearnMore />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Hobbies" element={<Hobbies />}></Route>
    </Routes>
  );
}

export default App;
