import React from "react";

const SmEdu = (props) => {
  return (
    <>
      <div className="animate-upper-slide text-justify h-[33.33%] pl-8 pr-8">
        <div className="font-bold text-[1.4rem]">{props.title}</div>
        <div className="mt-2 text-[1.2rem]">{props.level}</div>
        <div className="mt-1 text-[1.1rem]">{props.course}</div>
        <div className="mt-6 text-[1rem]">{props.description}</div>
      </div>
    </>
  );
};

export default SmEdu;
