import React from "react";

function ContactSM(props) {
  return (
    <>
      <div
        className="relative w-13 flex z-20 mt-18
        max-xl:left-0 
        max-lg:-left-10
        max-md:ml-10
        max-sm:gap-4 max-sm:-left-18 max-sm:mt-12
        "
      >
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-3 h-10.5 w-10.5 animate-bounce rounded-full hover:scale-110 hover:shadow-lg hover:shadow-blue-100 transition duration-300 ease-in-out cursor-pointer 
        max-2xl:border-2 max-2xl:h-9.5 max-2xl:w-9.5
        max-sm:h-7.5 max-sm:w-7.5"
        >
          <img
            src={props.logo}
            alt="facebookLogo"
            className={`max-h-[30px] max-w-[30px] mt-1 ml-0.5 
        max-2xl:h-[20px] max-2xl:w-[20px] max-2xl:ml-1.5 max-2xl:mt-1.5 
        max-sm:h-[15px] max-sm:w-[15px]
        ${
          props.isId2 || props.isId3 || props.isId4
            ? "h-[24px] w-[24px] mt-1.5 ml-1.5 max-2xl:mt-1.5 max-2xl:ml-1.5 max-2xl:h-[22px] max-2xl:w-[22px]"
            : ""
        }`}
          />
        </a>
      </div>
    </>
  );
}

export default ContactSM;
