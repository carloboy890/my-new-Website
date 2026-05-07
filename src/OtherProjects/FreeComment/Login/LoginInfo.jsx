import React, { useState } from "react";
import CommentAppUsername from "./CommentAppUsername";
import CommentAppPassword from "./CommentAdminInputField";
import LoggingInComponent from "./LoggingInComponent";
import ChatField from "../ChatField";

function LoginInfo({
  setHideInfoField,
  setHideUserInfo,
  switchField,
  setPassedUsername,
  setToGender,
}) {
  const [username, setUsername] = useState("");
  const [errorMessSwitch, setErrorMessSwitch] = useState(null);
  const [loginCodeErrorMess, setLoginCodeErrorMess] = useState("");
  const [hideButton, setHideButton] = useState(true);
  const [status, setStatus] = useState("idle");
  const [logSuccess, setLogSuccess] = useState("");

  const step = "loginUser";

  function handleSuccessFlow(success) {
    setStatus("loading");
    setErrorMessSwitch(true);
    console.log(success);
    setTimeout(() => {
      setStatus("success");
      setLogSuccess(success);
      setStatus("loading");
    }, 2000);

    setTimeout(() => {
      setStatus("loggingIn");
      setHideButton(false);
    }, 3000);

    setTimeout(() => {
      setStatus("done");
      setHideInfoField(false);
      setHideUserInfo(false);
    }, 8000);
    setToGender(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (step === "loginUser") {
        const response = await fetch("http://localhost:5000/userLogin", {
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

        if (data.code === "USERNAME_REQUIRED") {
          setLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }

        if (data.code === "NO_USER_FOUND") {
          setLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }

        if (data.code === "INVALID_USERNAME") {
          setLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }

        if (data.code === "USER_LOGGED_IN") {
          handleSuccessFlow(data.message);
          setPassedUsername(data.username);
        }
      }
    } catch (err) {
      console.error("Error connecting to the server:", err);
    }
  };

  return (
    <>
      <div className="h-full relative z-10 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 items-center"
        >
          {step === "loginUser" &&
            (status === "loggingIn" ? (
              <LoggingInComponent />
            ) : (
              <CommentAppUsername
                username={username}
                setUsername={setUsername}
                logSuccess={logSuccess}
                errorMessSwitch={errorMessSwitch}
                loginCodeErrorMess={loginCodeErrorMess}
                switchField={switchField}
              />
            ))}
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

export default LoginInfo;

// 1. db.users.find({age: {$gt: 21}}, {name: 1, age: 1, _id: 0})
// 2. db.users.find({city: "Manila"}, {name: 1, course: 1, _id: 0})
// 3. db.users.find({age: {$gt : 20, $lt : 30}}, {name: 1, age: 1, city: 1, _id: 0})
// 4. db.users.find({course: {$in : [IT, CS]}}, {name: 1, course : 1, _id: 0})
// 5. db.users.find({city: {$ne : "Manila"}}, {name: 1, city: 1, _id: 0})
// 6. db.users.find({salary : {$gt : 20,000}}, {name: 1, salary: 1, _id: 0})
// 7. db.users.find({age : {$gte : 21}, city: "Manila"}, {name: 1, age: 1, _id: 0})
// 8. db.users.find({name : {$regex : "C"}}, {name: 1, _id: 0})
// 9. db.users.find({age : {$gt : 20, $lt : 25}, course: {$ne : "Engineering"}}, {name: 1, age: 1, course: 1, _id: 0})

// db.users.find({salary: {$gte : 20000, $lte: 30000}, city: { $in: ["Manila", "Cebu"]}, name: {$regex: "^J"}}, {name: 1, salary: 1, _id: 0})
