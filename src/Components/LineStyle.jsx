import React from "react";

function LineStyle(props) {
  return (
    <>
      <div className="hidden 2xl:block animate-pic-slide2 absolute top-0 left-0">
        <div className="h-0.5 w-32 bg-white">{props.upperL}</div>
        <div className="h-32 w-0.5 bg-white">{props.lowerL}</div>
      </div>
      <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-0 left-0">
        <div className="h-0.5 w-32 bg-white">{props.baseL}</div>
        <div className="h-32 w-0.5 bg-white absolute bottom-0">
          {props.leftL}
        </div>
      </div>
      <div className="hidden 2xl:block animate-pic-slide1 absolute top-0 right-0">
        <div className="h-0.5 w-32 bg-white">{props.upperR}</div>
        <div className="h-32 w-0.5 bg-white absolute right-0">
          {props.lowerR}
        </div>
      </div>
      <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-0 right-0 rotate-180">
        <div className="h-0.5 w-32 bg-white">{props.baseR}</div>
        <div className="h-32 w-0.5 bg-white">{props.rightR}</div>
      </div>
    </>
  );
}

export default LineStyle;
