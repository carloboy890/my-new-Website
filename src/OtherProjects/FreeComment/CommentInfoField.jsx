import React, { useState } from "react";
import RegistrationField from "./Registration/RegistrationField";
import LoginInfo from "./Login/LoginInfo";
import AdminLoginInfo from "./Login/adminLoginInfo";
import ChatField from "./ChatField";

function CommentInfoField({
  setHideUserInfo,
  setPassedUsername,
  setPassedAdminUsername,
  setToGender,
}) {
  const [switchField, setSwitchField] = useState("");
  const [hideInfoField, setHideInfoField] = useState(true);

  return (
    <>
      {hideInfoField && (
        <div className="h-full flex justify-center items-center z-20 space-x-4">
          <button
            onClick={() => {
              setHideInfoField(false);
              setSwitchField("Register");
            }}
            className="bg-amber-100 font-Coiny text-2xl rounded-3xl h-20 w-40 text-black px-4 py-2 transition duration-150 hover:bg-red-600 active:scale-95 z-10"
          >
            Register
          </button>
          <button
            onClick={() => {
              setHideInfoField(false);
              setSwitchField("Login");
            }}
            className="bg-amber-100 font-Coiny text-2xl rounded-3xl h-20 w-40 text-black px-4 py-2 transition duration-150 hover:bg-red-600 active:scale-95 z-10"
          >
            Login
          </button>
          <button
            onClick={() => {
              setHideInfoField(false);
              setSwitchField("AdminLogin");
            }}
            className="bg-amber-100 font-Coiny text-2xl rounded-3xl h-20 w-40 text-black px-4 py-2 transition duration-150 hover:bg-red-600 active:scale-95 z-10"
          >
            Admin Login
          </button>
        </div>
      )}

      {switchField === "Register" && !hideInfoField && (
        <RegistrationField
          setHideUserInfo={setHideUserInfo}
          setHideInfoField={setHideInfoField}
          hideInfoField={hideInfoField}
          switchField={switchField}
        />
      )}
      {switchField === "Login" && !hideInfoField && (
        <LoginInfo
          setHideUserInfo={setHideUserInfo}
          setHideInfoField={setHideInfoField}
          switchField={switchField}
          hideInfoField={hideInfoField}
          setPassedUsername={setPassedUsername}
          setToGender={setToGender}
        />
      )}
      {switchField === "AdminLogin" && !hideInfoField && (
        <AdminLoginInfo
          setHideUserInfo={setHideUserInfo}
          setHideInfoField={setHideInfoField}
          switchField={switchField}
          setPassedAdminUsername={setPassedAdminUsername}
        />
      )}
    </>
  );
}

export default CommentInfoField;
