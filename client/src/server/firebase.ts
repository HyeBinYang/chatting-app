import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { firebaseConfig } from "../config/firebase";

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

console.log(firebase.firestore());

export const auth = firebase.auth;
export const database = firebase.database();
