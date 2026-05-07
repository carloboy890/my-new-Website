import React, { useEffect } from "react";
import maleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/maleProfile.svg";
import femaleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/femaleProfile.svg";

function PickGender({ setToGender, setIsGender, passedUsername }) {
  const handleGenderSelect = async (gender) => {
    setIsGender(gender);
    setToGender(false);

    await fetch("http://localhost:5000/set-gender", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: passedUsername,
        gender,
      }),
    });
  };

  useEffect(() => {
    if (!passedUsername) return;

    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:5000/get-user?username=${passedUsername}`,
      );
      const data = await res.json();
      //   setUserGender(data.user?.gender);

      if (data.user?.gender) {
        setIsGender(data.user.gender);
        setToGender(false); // skip selection
      } else {
        setToGender(true); // show selection
      }
    };

    if (passedUsername) {
      fetchUser();
    }
  }, [passedUsername]);

  return (
    <div className="h-full w-full flex">
      <div className="h-80 w-130 flex items-center rounded-4xl mx-auto my-auto bg-amber-100">
        <div className="w-1/2 border-1 h-60 items-center flex justify-center">
          <img
            onClick={() => handleGenderSelect("Female")}
            src={femaleProfile}
            alt="Female Profile"
            className="h-50 cursor-pointer hover:scale-110 duration-100 ease-in"
          />
        </div>
        <div className="w-1/2 border-1 h-60 items-center flex justify-center">
          <img
            onClick={() => handleGenderSelect("Male")}
            src={maleProfile}
            alt="Male Profile"
            className="h-50 cursor-pointer hover:scale-110 duration-100 ease-in"
          />
        </div>
      </div>
    </div>
  );
}

export default PickGender;
