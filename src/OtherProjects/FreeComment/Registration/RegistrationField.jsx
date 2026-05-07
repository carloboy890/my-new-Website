import React, { useState } from "react";
import CommentAppUsername from "../Login/CommentAppUsername";
import CommentAppPassword from "../Login/CommentAdminInputField";
import CommentInfoField from "../CommentInfoField";
import RedirectingComponent from "../RedirectingComponent";

function RegistrationField({ setHideInfoField, switchField }) {
  const [username, setUsername] = useState("");
  const [regCodeErrorMess, setRegCodeErrorMess] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [errorMessSwitch, setErrorMessSwitch] = useState(null);
  const [hideButton, setHideButton] = useState(true);
  const [status, setStatus] = useState("idle");

  const step = "regUsername";

  function handleSuccessFlow(success, message) {
    setStatus("loading");
    setErrorMessSwitch(true);
    console.log(success);
    setTimeout(() => {
      setStatus("success");
      setRegSuccess(message);
      setStatus("loading");
    }, 2000);

    setTimeout(() => {
      setStatus("redirect");
      setHideButton(false);
    }, 3000);

    setTimeout(() => {
      setStatus("done");
      setHideInfoField(true);
    }, 8000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (step === "regUsername") {
        const response = await fetch("http://localhost:5000/reg-username", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        });

        const data = await response.json();
        console.log("Users:", data.data);
        console.log("Admin:", data.adminData);
        console.log("Message:", data.message);

        if (data.code === "USER_EXISTS") {
          setRegCodeErrorMess(data.message);
          setErrorMessSwitch(false);
          return;
        }

        if (data.code === "USERNAME_REQUIRED") {
          setRegCodeErrorMess(data.message);
          setErrorMessSwitch(false);
          return;
        }

        if (data.code === "ADMIN_DETECTED") {
          return;
        }

        if (data.code === "USER_CREATED") {
          handleSuccessFlow(data.success, data.message1);
        }
      }

      // else if (step === "regAdminPassword") {
      //   const response = await fetch("http://localhost:5000/regAdminPassword", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ password }),
      //   });

      //   const data = await response.json();
      //   console.log("Message", data.message);

      //   if (data.code === "ADMIN_CREATED") {
      //     handleSuccessFlow(data.success);
      //   }
      // }
    } catch (err) {
      console.error("Error connecting to the server:", err);
    }
  };

  return (
    <>
      <div className="h-full relative z-10 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          {step === "regUsername" &&
            (status === "redirect" ? (
              <RedirectingComponent />
            ) : (
              <CommentAppUsername
                username={username}
                setUsername={setUsername}
                regSuccess={regSuccess}
                errorMessSwitch={errorMessSwitch}
                switchField={switchField}
                regCodeErrorMess={regCodeErrorMess}
              />
            ))}

          {/* {step === "regAdminPassword" &&
            (status === "redirect" ? (
              <RedirectingComponent />
            ) : (
              <CommentAppPassword
                password={password}
                setPassword={setPassword}
                userError={userError}
                userReq={userReq}
                errorMessSwitch={errorMessSwitch}
                regSuccess={regSuccess}
              />
            ))} */}
          {hideButton && (
            <button
              disabled={status === "loading"}
              type="submit"
              className={`inline-flex w-24 justify-center items-center gap-2 rounded border px-4 py-2 font-semibold
         ${
           status === "loading"
             ? "bg-gray-300 cursor-wait opacity-70"
             : "bg-gradient-to-b from-slate-50 to-slate-200 cursor-pointer hover:opacity-90"
         }`}
            >
              Enter
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default RegistrationField;
