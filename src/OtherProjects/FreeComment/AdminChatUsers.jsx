import React, { useState, useEffect } from "react";
import femaleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/femaleProfile.svg";
import maleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/maleProfile.svg";
import axios from "axios";

function AdminChatUsers({
  messageSent,
  setPassUserInfo,
  setSelectedUser,
  readCounts,
  setReadCounts,
}) {
  const [isCountTrue, setIsCountTrue] = useState("");

  // SORTING
  const users = [
    ...new Map(
      messageSent
        .filter((msg) => msg.username !== "admin8080")
        .map((msg) => [
          msg.username,
          { username: msg.username, gender: msg.gender },
        ]),
    ).values(),
  ].sort((a, b) => {
    const aMessages = messageSent.filter(
      (msg) =>
        msg.conversationId === [a.username, "admin8080"].sort().join("_"),
    );

    const bMessages = messageSent.filter(
      (msg) =>
        msg.conversationId === [b.username, "admin8080"].sort().join("_"),
    );

    const aLatest = aMessages[aMessages.length - 1]?.createdAt || 0;

    const bLatest = bMessages[bMessages.length - 1]?.createdAt || 0;

    return new Date(bLatest) - new Date(aLatest);
  });

  // END OF SORTING

  console.log(readCounts);

  async function handleUserClick(user) {
    const conversationId = [user.username, "admin8080"].sort().join("_");

    const conversation = messageSent.filter(
      (msg) => msg.conversationId === conversationId,
    );
    const onlyUserMessages = conversation.filter(
      (msg) => msg.username === user.username,
    );

    setSelectedUser(user.username);
    setPassUserInfo(conversation);

    const messageCount = onlyUserMessages.length;

    setReadCounts((prev) => ({
      ...prev,
      [user.username]: messageCount,
    }));

    setIsCountTrue(false);

    await axios.put("http://localhost:5000/update-read-count", {
      username: user.username,
      readCount: messageCount,
    });
  }

  function getUserData(user) {
    const conversationId = [user.username, "admin8080"].sort().join("_");

    const userMessages = messageSent.filter(
      (msg) => msg.conversationId === conversationId,
    );

    const onlyUserMessages = userMessages.filter(
      (msg) => msg.username === user.username,
    );

    // console.log(JSON.stringify(userMessages));
    // if(userMessages[userMessages.length - 1] )

    // console.log(`Only User Message: ${JSON.stringify(onlyUserMessages)}`);
    // console.log(`User Messages: ${userMessages.length}`);
    // const counts = onlyUserMessages.length - readCounts[user.username];
    // console.log(`Counts: ${counts}`);
    // const total = onlyUserMessages.length;
    // const read = readCounts[user.username] || 0;

    // const unreadCount = Math.max(0, total - read);
    const count = onlyUserMessages.length > (readCounts[user.username] || 0);

    return {
      count,
      latest: userMessages[userMessages.length - 1]?.text || "",
      latestTime: userMessages[userMessages.length - 1]?.createdAt || null,
    };
  }

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
          const { count, latest, latestTime } = getUserData(user);

          function formatMessageTime(dateString) {
            const date = new Date(dateString);

            return date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
          }

          return (
            <div
              onClick={() => {
                handleUserClick(user);
                setSelectedUser(user.username);
              }}
              key={i}
              className={`h-20 w-full pl-3 pt-3 cursor-pointer justify-around hover:bg-amber-400 flex`}
            >
              <div className="flex  space-x-3 w-full ">
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
                <div className=" flex w-57 justify-between">
                  <div className="space-y-2">
                    <div className="font-Jost font-bold">{user.username}</div>
                    <div className="w-40 truncate">{latest}</div>
                  </div>
                  <div className="w-1/8 space-y-2 text-center">
                    <div className="text-[0.6rem] font-bold">
                      {latestTime ? formatMessageTime(latestTime) : ""}
                    </div>
                    {count ? (
                      <div className="relative border-1 h-2 w-2 bg-red-600 rounded-full flex justify-center ml-3"></div>
                    ) : null}
                  </div>
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
