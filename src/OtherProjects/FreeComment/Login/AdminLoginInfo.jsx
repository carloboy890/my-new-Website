import React, { useState } from "react";
import CommentAppUsername from "./CommentAppUsername";
import CommentAdminInputField from "./CommentAdminInputField";
import LoggingInComponent from "./LoggingInComponent";

function AdminLoginInfo({
  setHideInfoField,
  switchField,
  setHideUserInfo,
  setPassedAdminUsername,
}) {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errorMessSwitch, setErrorMessSwitch] = useState(null);
  const [adminLoginCodeErrorMess, setAdminLoginCodeErrorMess] = useState("");
  const [hideButton, setHideButton] = useState(true);
  const [status, setStatus] = useState("idle");
  const [adminlogSuccess, setLogSuccess] = useState("");

  const step = "loginAdmin";

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (step === "loginAdmin") {
        const response = await fetch("http://localhost:5000/adminLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ adminUsername, adminPassword }),
        });

        const data = await response.json();
        console.log("Users:", data.data);
        console.log("Admin:", data.adminData);
        console.log("Message:", data.message);

        if (data.code === "USERNAME_REQUIRED") {
          setAdminLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }
        if (data.code === "PASSWORD_REQUIRED") {
          setAdminLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }
        if (data.code === "INVALID_PASSWORD") {
          setAdminLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }

        if (data.code === "NO_ADMIN_FOUND") {
          setAdminLoginCodeErrorMess(data.message);
          setErrorMessSwitch(false);
        }

        if (data.code === "ADMIN_LOGGED_IN") {
          handleSuccessFlow(data.message);
          setPassedAdminUsername(data.adminUsername);
        }
      }
    } catch (err) {
      console.error("Error connecting to the server:", err);
    }
  };

  return (
    <>
      <div className="h-full relative z-10 flex flex-col items-center justify-center border-1">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {step === "loginAdmin" &&
            (status === "loggingIn" ? (
              <LoggingInComponent />
            ) : (
              <>
                <CommentAdminInputField
                  adminUsername={adminUsername}
                  setAdminUsername={setAdminUsername}
                  adminLogSuccess={adminlogSuccess}
                  errorMessSwitch={errorMessSwitch}
                  adminLoginCodeErrorMess={adminLoginCodeErrorMess}
                  switchField={switchField}
                  adminPassword={adminPassword}
                  setAdminPassword={setAdminPassword}
                />
              </>
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

export default AdminLoginInfo;
