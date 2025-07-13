import React from "react";

const HobbiesCard = (props) => {
  return (
    <div className="max-xl:z-2 w-[400px] h-[100px] flex justify-center items-center max-xl:w-[180px] max-xl:h-[50px]">
      <div
        cont
        className="max-xl:flex max-xl:justify-center max-xl:items-center max-xl:space-x-3 animate-sm-lg text-white flex space-x-6 border-1 h-[60px] w-[380px] p-2 hoverEffect hover:shadow-buttonShadow cursor-pointer"
      >
        <div>
          <img
            src={props.logo}
            alt=""
            className="h-[45px] w-[45px] max-xl:h-[30px] max-xl:w-[40px]"
          />
        </div>
        <div className="max-xl:text-[0.9rem] text-[1.8rem]">{props.title}</div>
      </div>
    </div>
  );
};

export default HobbiesCard;
