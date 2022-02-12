import React from "react";

const InvitationPopup = () => {
  return (
    <div className="popup">
      <div className="popup__search">
        <h3>대화상대 선택</h3>
        <input className="textbox" type="text" placeholder="이름으로 검색" />
      </div>
      <ul className="popup__userlist">
        <li className="user">
          <div className="user__info">
            <img src="https://picsum.photos/200" alt="" />
            <span className="user__name">로빈</span>
          </div>
          <div className="user__checkbox">
            <input onChange={() => console.log("sda")} className="checkbox" type="checkbox" id="user" />
          </div>
        </li>
        <li className="user">
          <div className="user__info">
            <img src="https://picsum.photos/200" alt="" />
            <span className="user__name">로빈</span>
          </div>
          <div className="user__checkbox">
            <input onChange={() => console.log("sda")} className="checkbox" type="checkbox" id="user" />
          </div>
        </li>
        <li className="user">
          <div className="user__info">
            <img src="https://picsum.photos/200" alt="" />
            <span className="user__name">로빈</span>
          </div>
          <div className="user__checkbox">
            <input onChange={() => console.log("sda")} className="checkbox" type="checkbox" id="user" />
          </div>
        </li>
        <li className="user">
          <div className="user__info">
            <img src="https://picsum.photos/200" alt="" />
            <span className="user__name">로빈</span>
          </div>
          <div className="user__checkbox">
            <input onChange={() => console.log("sda")} className="checkbox" type="checkbox" id="user" />
          </div>
        </li>
      </ul>
      <div className="popup__buttons">
        <button>취소</button>
        <button>확인</button>
      </div>
    </div>
  );
};

export default InvitationPopup;
