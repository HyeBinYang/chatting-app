import React, { useContext } from "react";
import Header from "../../Header";
import ChatRoom from "./ChatRoom";
import InvitationPopup from "./InvitationPopup";
import { PopupContext } from "../../../../store/PopupStore";

const ChatRooms = () => {
  const popupContext = useContext(PopupContext);

  return (
    <div className="chatroom-container">
      <Header />
      <div className="chatrooms">
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </div>
      {popupContext.invitationPopup && <InvitationPopup />}
    </div>
  );
};

export default ChatRooms;
