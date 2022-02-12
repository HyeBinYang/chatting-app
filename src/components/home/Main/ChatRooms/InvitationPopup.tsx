import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, database } from "../../../../api/firebase";
import { PopupContext } from "../../../../store/PopupStore";
import { UserContext } from "../../../../store/UserStore";

const InvitationPopup = () => {
  const popupContext = useContext(PopupContext);
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const getUserName = async (uid: string) => {
    const docSnap = await getDoc(doc(database, "Users", uid));

    if (docSnap.exists()) {
      userContext.setName(docSnap.data().name);
    }
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        userContext.setUid(user.uid);
        await getUserName(user.uid);

        const q = query(collection(database, "Users"), where("id", "!=", user.uid));
        const snapShot = await getDocs(q);

        snapShot.forEach((doc) => {
          const friend = {
            id: doc.data().id,
            email: doc.data().email,
            name: doc.data().name,
          };

          userContext.setFriends([...userContext.friends, friend]);
        });

        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      userContext.setFriends([]);
    };
  }, []);

  return (
    <>
      {loading ? null : (
        <div className="popup">
          <div className="popup__search">
            <h3>대화상대 선택</h3>
            <input className="textbox" type="text" placeholder="이름으로 검색" />
          </div>
          <ul className="popup__userlist">
            {userContext.friends.map((friend) => (
              <li className="user" key={friend.id}>
                <div className="user__info">
                  <img src="https://picsum.photos/200" alt="" />
                  <span className="user__name">{friend.name}</span>
                </div>
                <div className="user__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
              </li>
            ))}
          </ul>
          <div className="popup__buttons">
            <button onClick={() => popupContext.setInvitationPopup(false)}>취소</button>
            <button>확인</button>
          </div>
        </div>
      )}
    </>
  );
};

export default InvitationPopup;
