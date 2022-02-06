import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, FieldPath, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, database } from "../api/firebase";
import UserList from "../components/home/Main/UserList";
import Sidebar from "../components/home/Sidebar";
import { UserContext } from "../store/UserStore";
import "../styles/home.scss";

const Users = () => {
  const [loading, setLoading] = useState(true);

  const userContext = useContext(UserContext);

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
      setLoading(false);
      unsubscribeAuth();
      userContext.setFriends([]);
    };
  }, []);

  return (
    <div className="home">
      <Sidebar />
      {loading ? null : <UserList />}
    </div>
  );
};

export default Users;
