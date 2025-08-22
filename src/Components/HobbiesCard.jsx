import React from "react";

const HobbiesCard = (props) => {
  return (
    <div
      className="w-[400px] h-[100px] flex justify-center items-center
    max-2xl:z-2 max-2xl:w-[180px] max-2xl:h-[50px]
    "
    >
      <div
        cont
        className="animate-sm-lg text-white flex space-x-6 border-1 h-[60px] w-[400px] p-2 hoverEffect hover:shadow-buttonShadow cursor-pointer 
        max-2xl:flex max-2xl:justify-center max-2xl:items-center max-2xl:space-x-3 
        max-md:w-[150px]
        max-sm:w-[140px] max-sm:h-[40px]"
      >
        <div>
          <img
            src={props.logo}
            alt=""
            className="h-[45px] w-[45px] 
            max-2xl:h-[30px] max-2xl:w-[40px] 
            max-sm:h-[20px] max-sm:w-[30px]"
          />
        </div>
        <div
          className="text-[1.8rem]
        max-2xl:text-[0.9rem]
        max-md:text-[0.8rem]
        max-sm:text-xs"
        >
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default HobbiesCard;
