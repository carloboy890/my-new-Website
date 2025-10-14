import React from "react";

function ContactCard(props) {
  return (
    <>
      <div
        cont
        className="space-y-10
        max-md:space-y-5
        max-sm:space-y-6"
      >
        <div
          className="text-[2rem]
                  max-2xl:text-[1.5rem]
                  max-sm:text-[0.9rem]"
        >
          {props.question}
        </div>
        <div
          className="text-[3rem]
                  max-2xl:text-[2.5rem]
                  max-lg:text-[2.3rem]
                  max-sm:text-[1.5rem]"
        >
          {props.title}
        </div>
        <div
          className="text-[1.2rem]
                  max-2xl:text-[1.1rem]
                  max-lg:text-[1rem]
                  max-sm:text-[0.8rem]"
        >
          {props.inquiry}
        </div>
      </div>
      <div
        cont
        className={`flex
                max-md:justify-center space-y-1 mt-14 
                ${props.isId3 ? "max-md:pr-20 max-sm:pr-13" : ""}`}
      >
        <div
          cont
          logos
          className={`ml-10
                  max-md:-ml-2
                  max-sm:space-y-3 max-sm:mt-2.5`}
        >
          <div>
            <img
              src={props.logo}
              alt=""
              className={`h-[60px] w-[60px]
                        max-2xl:h-[40px] max-2xl:w-[40px] 
                        max-lg:h-[30px] max-lg:w-[30px]
                        max-sm:h-[20px] max-sm:w-[20px]`}
            />
          </div>
        </div>
        <div
          cont
          desc
          className="text-[1.5rem] mt-2 space-y-15 ml-10
                  max-md:text-left
                  max-2xl:text-[1.2rem]
                  max-2xl:space-y-10 
                  max-lg:text-[1rem] max-lg:space-y-9
                  max-sm:space-y-4 max-sm:text-[0.7rem] max-sm:ml-6 max-sm:mt-3"
        >
          <div>{props.description}</div>
          {/* <div>{props.phone}</div>
          <div>{props.email}</div> */}
        </div>
      </div>
    </>
  );
}

export default ContactCard;
