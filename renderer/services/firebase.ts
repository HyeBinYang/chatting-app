import firebase from "firebase";
import { fbConfig } from "../config/firebase";

const firebaseConfig = {
  apiKey: fbConfig.API_KEY,
  authDomain: fbConfig.AUTH_DOMAIN,
  databaseURL: fbConfig.DATABASE_URL,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = firebase.auth;
export const database = firebase.database();
