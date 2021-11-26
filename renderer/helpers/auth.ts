import { auth } from "../services/firebase";

export function signup(email: string, password: string): Promise<any> {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function login(email: string, password: string): Promise<any> {
  return auth().signInWithEmailAndPassword(email, password);
}

export function logout(): Promise<any> {
  return auth().signOut();
}
