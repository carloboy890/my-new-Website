import React from "react";
import styles from "./LoginInfo.module.css";

function CommentAdminInputField({
  adminPassword,
  setAdminPassword,
  errorMessSwitch,
  switchField,
  adminUsername,
  setAdminUsername,
  adminLogSuccess,
  adminLoginCodeErrorMess,
}) {
  return (
    <>
      <div className="h-65 flex flex-col justify-around">
        <p className="text-md h-6 text-center text-red-700">
          {errorMessSwitch ? adminLogSuccess : adminLoginCodeErrorMess}
        </p>
        <div>
          <div className="space-y-2 h-23">
            <p className="text-lg text-center font-Coiny font-bold">
              Admin Username
            </p>

            <input
              type="text"
              value={adminUsername}
              className={`${styles.input} ${switchField === "AdminLogin" ? "h-10" : ""}`}
              onChange={(e) => {
                setAdminUsername(e.target.value);
              }}
            />
          </div>
          <div className="space-y-2 h-23">
            <p className="text-lg text-center font-Coiny font-bold">
              Admin Password
            </p>
            <input
              type="password"
              value={adminPassword}
              className={`${styles.input} ${switchField === "AdminLogin" ? "h-10" : ""}`}
              onChange={(e) => {
                setAdminPassword(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentAdminInputField;
