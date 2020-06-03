import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3hCYw-0-YzPtBPLJiC1uzpRvTWcX0R1E",
  authDomain: "e-clothing-db-99ba3.firebaseapp.com",
  databaseURL: "https://e-clothing-db-99ba3.firebaseio.com",
  projectId: "e-clothing-db-99ba3",
  storageBucket: "e-clothing-db-99ba3.appspot.com",
  messagingSenderId: "742988137112",
  appId: "1:742988137112:web:019ebab61b8d48f0e486ed",
  measurementId: "G-BSR2VD2FL7",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const loginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
