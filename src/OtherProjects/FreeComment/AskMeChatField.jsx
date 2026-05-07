import React from "react";
import ChatField from "./ChatField";

function AskMeChatField({ switchField }) {
  return (
    <div>
      <ChatField switchField={switchField} />
    </div>
  );
}

export default AskMeChatField;
