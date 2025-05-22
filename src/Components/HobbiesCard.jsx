import React from "react";

const HobbiesCard = (props) => {
  return (
    <div className="w-[400px] h-[100px] flex justify-center items-center">
      <div
        cont
        className="animate-sm-lg text-white flex space-x-6 border-1 h-[60px] w-[380px] p-2 hoverEffect hover:shadow-buttonShadow cursor-pointer"
      >
        <div>
          <img src={props.logo} alt="" className="h-[45px] w-[45px]" />
        </div>
        <div className="text-[1.8rem]">{props.title}</div>
      </div>
    </div>
  );
};

export default HobbiesCard;
