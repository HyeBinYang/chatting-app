import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatRooms.scss";

function ChatRoom() {
  const navigate = useNavigate();

  const enterRoom = () => {
    navigate("/room/123");
  };

  return (
    <div onDoubleClick={enterRoom} className="ChatRooms__room">
      <div className="room__container">
        <div className="room__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <div className="room__info">
          <div className="info__top">
            <span className="info__title">문어햄</span>
            <span className="info__period">오후 3:13</span>
          </div>
          <div className="info__bottom">
            <span className="info__recent-message">
              메세지 내용제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에
              의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다. 타인의
              범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수
              있다. 군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
