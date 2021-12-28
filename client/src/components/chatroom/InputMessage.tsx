import { getDatabase, onValue, push, ref, set } from "firebase/database";
import React, { useContext, useState } from "react";

function InputMessage({
  messages,
  setMessages,
}: {
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  // const context = useContext();
  const [messageInput, setMessageInput] = useState("");

  const inputMessage = (e: any) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();
    const db = getDatabase();

    push(ref(db, "chatrooms/"), {
      members: ["asd", "erer"],
    }).then((res) => {
      push(ref(db, `chatrooms/${res.key}/messages/`), {
        message: messageInput,
        from: "sds",
        to: "wewe",
        date: Date.now(),
      });
    });

    setMessages([...messages, messageInput]);
  };

  return (
    <div className="InputMessage">
      <form className="InputMessage__form" onSubmit={sendMessage}>
        <textarea onChange={inputMessage} className="form__textarea" name="" id="" />
        <div className="form_submit">
          <button type="submit" className="submit__btn">
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputMessage;
