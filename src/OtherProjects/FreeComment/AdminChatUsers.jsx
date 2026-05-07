import React, { useState } from "react";
import femaleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/femaleProfile.svg";
import maleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/maleProfile.svg";

function AdminChatUsers({
  passedUsername,
  messageSent,
  setPassUserInfo,
  isGender,
}) {
  const users = [
    ...new Map(
      messageSent
        .filter((msg) => msg.username !== "admin8080")
        .map((msg) => [
          msg.username,
          { username: msg.username, gender: msg.gender },
        ]),
    ).values(),
  ];

  function usersInfoMessage(selectedUser) {
    const conversation = messageSent.filter(
      (msg) =>
        msg.username === selectedUser || // user messages
        msg.role === "admin", // admin messages
    );

    setPassUserInfo(conversation);
  }

  console.log(isGender);

  return (
    <div className="bg-[#f1eeee] fixed rounded-3xl h-110 w-80 right-17 top-90 overflow-y-scroll">
      <div className="h-16 bg-[#7d3cc7] border-1 rounded-t-3xl flex justify-between">
        <div className="m-4 text-2xl font-Jost font-bold text-[#fff]">
          Message
        </div>
        <div className="text-white absolute cursor-pointer top-5 right-5 font-bold">
          X
        </div>
      </div>
      <div className="">
        {users.map((user, i) => {
          return (
            <div
              onClick={() => usersInfoMessage(user.username)}
              key={i}
              className="h-20 w-full pl-3 pt-3 cursor-pointer justify-around hover:bg-amber-400 flex"
            >
              <div className="flex space-x-3 w-full ">
                <div>
                  <img
                    src={
                      user.gender === "Male"
                        ? maleProfile
                        : user.gender === "Female"
                          ? femaleProfile
                          : femaleProfile // fallback
                    }
                    className="h-15 w-15"
                    alt="user"
                  />
                </div>

                <div className="space-y-2">
                  <div className="font-Jost font-bold">{user.username}</div>
                  <div>Message</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminChatUsers;
