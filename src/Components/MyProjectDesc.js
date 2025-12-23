import GameFolder from "../assets/ProjectsLogos/GameFolder.svg";
import OtherAppsFolder from "../assets/ProjectsLogos/OtherProjectFolder.svg";

const MyProjectDesc = [
  {
    id: 1,
    img: GameFolder,
    description: `A collection of interactive web applications including a Simon Game,
          Quiz App, and Fitness App, built to showcase my skills in JavaScript
          and front-end development. These projects demonstrate strong handling
          of user interactions, application logic, state management, and
          responsive UI design through engaging, real-world features.`,
    route: "gameProjects",
  },
  {
    id: 2,
    img: OtherAppsFolder,
    description: `A collection of interactive front-end applications, including a Todo List, Color Picker, Weather App, and Movie Browser. These projects demonstrate my skills in React, JavaScript, and responsive UI design by handling user interactions, dynamic state management, API integration, and visually engaging interfaces.`,
    route: "otherProjects",
  },
];

export default MyProjectDesc;
