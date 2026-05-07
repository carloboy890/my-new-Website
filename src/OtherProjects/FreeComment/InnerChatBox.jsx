import React from "react";
import ChatBubble from "./ChatBubble";

function InnerChatBox({
  passedUsername,
  passedAdminUsername,
  messageSent,
  chatEndRef,
  passUserInfo,
  switchField,
}) {
  console.log(passUserInfo);

  return (
    <div
      className="absolute p-3 justify-between flex bottom-39 h-140 w-270 overflow-y-scroll"
      ref={chatEndRef}
    >
      {switchField === "AskMe" && (
        <div className="w-full box-border">
          {(passedAdminUsername ? passUserInfo : messageSent).map((msg) => (
            <ChatBubble
              key={msg._id}
              messageSent={msg}
              isMine={
                passedAdminUsername
                  ? msg.role === "admin"
                  : msg.username === passedUsername
              }
            />
          ))}
        </div>
      )}
      {switchField === "Community" && (
        <div className="w-full box-border">
          {messageSent.map((msg) => {
            return (
              <ChatBubble
                key={msg._id}
                messageSent={msg}
                isMine={
                  passedAdminUsername
                    ? msg.role === "admin"
                    : msg.username === passedUsername
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default InnerChatBox;

//   <div>
//     <ChatBubble />
//   </div>
// </div>
