import React from "react";
import commentAppBG from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBG.svg";

function FreeCommentBG({ children }) {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${commentAppBG})` }}
      />

      {children}
    </div>
  );
}

export default FreeCommentBG;
