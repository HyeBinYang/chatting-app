import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../config/firebase";

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
