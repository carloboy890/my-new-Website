import React from "react";
import styles from "./LoginInfo.module.css";

function CommentAppUsername({
  username,
  setUsername,
  regCodeErrorMess,
  regSuccess,
  errorMessSwitch,
  switchField,
  logSuccess,
  loginCodeErrorMess,
}) {
  return (
    <div className="space-y-5 h-35 flex flex-col text-center">
      <div className="flex flex-col justify-between h-full">
        <p className="text-3xl font-Coiny font-bold">Type Your Username :</p>
        <p className="text-l text-center text-red-700">
          {switchField === "Register" &&
            (errorMessSwitch ? regSuccess : regCodeErrorMess)}
          {switchField === "Login" &&
            (errorMessSwitch ? logSuccess : loginCodeErrorMess)}
        </p>
      </div>
      <input
        type="text"
        value={username}
        className={styles.input}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}

export default CommentAppUsername;
