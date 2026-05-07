import React, { useState, createContext } from "react";
import BackButtonAnimation from "../../Components/BackButtonAnimation";
import FreeCommentBG from "./FreeCommentBG";
import chatConvoLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/chatConvoLogo.svg";
import CommentInfoField from "./CommentInfoField";
import UserFormInfo from "./UserFormInfo";
import ChatField from "./ChatField";
import AskMeChatField from "./AskMeChatField";
import CommunityChatField from "./CommunityChatField";

export const UsernameContext = createContext();

function FreeCommentApp() {
  const [switchField, setSwitchField] = useState("");
  const [openUserInfo, setOpenUserInfo] = useState(true);
  const [hideUserInfo, setHideUserInfo] = useState(true);
  const [passedUsername, setPassedUsername] = useState("");
  const [passedAdminUsername, setPassedAdminUsername] = useState("");
  const [toGender, setToGender] = useState(false);

  return (
    <FreeCommentBG>
      {hideUserInfo ? (
        <div className="">
          <div className="relative top-65 left-10 w-210 h-90 ">
            <img src={chatConvoLogo} alt="chatConvoLogo" className="absolute" />
            {openUserInfo ? (
              <UserFormInfo
                setOpenUserInfo={setOpenUserInfo}
                setSwitchField={setSwitchField}
              />
            ) : (
              <CommentInfoField
                setHideUserInfo={setHideUserInfo}
                setPassedUsername={setPassedUsername}
                setPassedAdminUsername={setPassedAdminUsername}
                setToGender={setToGender}
              />
            )}
          </div>
        </div>
      ) : (
        <UsernameContext.Provider
          value={{
            passedAdminUsername,
            passedUsername,
            switchField,
            toGender,
            setToGender,
          }}
        >
          <ChatField />
        </UsernameContext.Provider>
      )}
    </FreeCommentBG>
  );
}

export default FreeCommentApp;
