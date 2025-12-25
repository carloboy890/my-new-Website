import React from "react";

function MyProjects({ img, description, onClick }) {
  return (
    <div className="text-white h-full p-10">
      <div
        onClick={onClick}
        className="hover:shadow-buttonShadow hoverEffect p-8 text-2xl flex flex-col space-y-10 items-center text-center border-1
        max-2xl:p-5 max-2xl:text-xl max-2xl:pt-14
        max-xl:text-lg
        max-lg:text-sm
        max-md:text-[0.6rem] max-md:pt-5 max-md:border-0 max-md:w-80 max-md:space-y-5"
      >
        <img className="w-80 h-80
        max-2xl:h-45 max-2xl:w-45
        max-xl:h-40 max-xl:w-40
        max-lg:h-30 max-lg:w-30" src={img} alt="Project Folder" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MyProjects;
