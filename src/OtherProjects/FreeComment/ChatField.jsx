import React, { useState, useContext, useEffect, useRef } from "react";
import chatField from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/chatField.svg";
import styles from "./Login/LoginInfo.module.css";
import happyEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/happyEmoji.png";
import EmojiComponent from "./EmojiComponent";
import InnerChatBox from "./InnerChatBox";
import AdminChatHead from "./AdminChatHead";
import { UsernameContext } from "./FreeCommentApp";
import axios from "axios";
import AdminChatUsers from "./AdminChatUsers";
import PickGender from "./PickGender";

function ChatField() {
  const {
    passedAdminUsername,
    passedUsername,
    switchField,
    toGender,
    setToGender,
  } = useContext(UsernameContext);

  const chatEndRef = useRef(null);
  const [chatText, setChatText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const [messageSucc, setMessageSucc] = useState("");
  const [messageSent, setMessageSent] = useState([]);
  const [openChatHead, setOpenChatHead] = useState(false);
  const [passUserInfo, setPassUserInfo] = useState([]);
  const [isGender, setIsGender] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [readCounts, setReadCounts] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (switchField === "AskMe") {
        const response = await fetch("http://localhost:5000/AskMe-Messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatText,
            passedUsername,
            passedAdminUsername,
            selectedUser,
          }),
        });
        const data = await response.json();
        console.log(data.message);

        if (data.code === "MESSAGE_FAIL") {
          setErrorMess(data.message);
        }
        if (data.code === "MESSAGE_SENT") {
          setMessageSucc(data.message);
        }

        const updatedMessages = await fetchMessages(0);
        setMessageSent(updatedMessages);
      }
      setChatText("");
    } catch (err) {
      console.error("Error connecting to the server:", err);
    }
  };

  // const fetchMessages = async (skip = 0) => {
  //   const response = await axios.get("http://localhost:5000/AskMe-Messages", {
  //     params: {
  //       username: selectedUser,
  //       adminUsername: passedAdminUsername,
  //       limit: 20,
  //       skip: skip,
  //     },
  //   });

  //   return response.data.data;
  // };
  useEffect(() => {
    const fetchAllMessages = async () => {
      if (!passedAdminUsername) return;

      const response = await axios.get("http://localhost:5000/AskMe-Messages", {
        params: {
          adminUsername: passedAdminUsername,
        },
      });

      setAllMessages(response.data.data);
      setReadCounts(response.data.readCounts);
    };

    fetchAllMessages();
  }, [passedAdminUsername]);

  //FETCHED MESSAGES

  const fetchMessages = async (skip = 0) => {
    let params = {
      limit: 20,
      skip,
    };

    // ADMIN VIEW
    if (passedAdminUsername) {
      params.adminUsername = passedAdminUsername;
      params.selectedUser = selectedUser;
    }

    // NORMAL USER VIEW
    else {
      params.username = passedUsername;
    }

    const response = await axios.get("http://localhost:5000/AskMe-Messages", {
      params,
    });

    return response.data.data;
  };

  useEffect(() => {
    const loadMessages = async () => {
      if (passedAdminUsername && !selectedUser) {
        setMessageSent([]);
        return;
      }

      const data = await fetchMessages(0);
      setMessageSent(data);
    };

    loadMessages();
  }, [passedUsername, passedAdminUsername, selectedUser]);

  //------>

  //SCROLL ANIMATION

  const scrollToBottom = () => {
    const el = chatEndRef.current;
    if (!el) return;

    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageSent]);

  //----->

  console.log(passedUsername);
  console.log(messageSent);

  //User count and updated message
  // useEffect(() => {
  //   const userMessages = messageSent.filter(
  //     (msg) => msg.username === passedUsername,  //Filter the user
  //   );

  //   console.log(userMessages);
  //   if (passedUsername || passedAdminUsername) {
  //     if (userMessages.length > 0) {
  //       setMessCount(userMessages.length);
  //       setInitialMess(userMessages[userMessages.length - 1].text);
  //     } else {
  //       setMessCount(0);
  //       setInitialMess("");
  //     }
  //   }
  // }, [messageSent, passedUsername]);

  // console.log(`Count: ${messCount}  Text: ${initialMess}`);

  return (
    <div className="fixed w-full h-full border-1">
      {toGender ? (
        <PickGender
          setIsGender={setIsGender}
          setToGender={setToGender}
          passedUsername={passedUsername}
        />
      ) : (
        <div className="absolute left-80">
          <img src={chatField} alt="Chat Field" className="h-245" />
          <div className="flex justify-center">
            <InnerChatBox
              errorMess={errorMess}
              messageSucc={messageSucc}
              messageSent={messageSent}
              chatEndRef={chatEndRef}
              passedUsername={passedUsername}
              passedAdminUsername={passedAdminUsername}
              passUserInfo={passUserInfo}
              switchField={switchField}
            />
          </div>
          {showEmojis ? (
            <div className="absolute bottom-197 h-20 items-center flex left-65 w-160">
              <EmojiComponent setChatText={setChatText} />
            </div>
          ) : null}
          <div onClick={() => setShowEmojis((val) => !val)}>
            <img
              src={happyEmoji}
              alt=":)"
              className="h-12 w-12 absolute bottom-22 left-77 hover:scale-110 cursor-pointer ease-in-out duration-200"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex absolute bottom-21 right-20 w-180 justify-between"
          >
            <input
              type="text"
              value={chatText}
              className={`${styles.input} !w-160`}
              onChange={(e) => setChatText(e.target.value.slice(0, 150))}
            />
            <button
              type="submit"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)",
              }}
              className="inline-flex w-18 cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
            >
              Enter
            </button>
          </form>
        </div>
      )}
      {passedAdminUsername && (
        <AdminChatHead
          setOpenChatHead={setOpenChatHead}
          messageSent={allMessages}
          passedUsername={passedUsername}
          passedAdminUsername={passedAdminUsername}
          readCounts={readCounts}
        />
      )}
      {passedAdminUsername
        ? openChatHead && (
            <AdminChatUsers
              passedUsername={passedUsername}
              messageSent={allMessages}
              setPassUserInfo={setPassUserInfo}
              isGender={isGender}
              setSelectedUser={setSelectedUser}
              readCounts={readCounts}
              setReadCounts={setReadCounts}
            />
          )
        : null}

      {/* 
      {openChatHead && <AdminChatUsers passedUsername={passedUsername} />} */}
    </div>
  );
}

export default ChatField;
