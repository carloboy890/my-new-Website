import React from "react";

function MyProjects({ img, description, onClick }) {
  return (
    <div className="text-white h-full p-10">
      <div
        onClick={onClick}
        className="hover:shadow-buttonShadow hoverEffect p-8 text-2xl flex flex-col space-y-10 items-center text-center"
      >
        <img className="w-80 h-80" src={img} alt="Project Folder" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MyProjects;
