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

//NOTE: CREATE SNAPSHOT
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // const collectionRef = firestore.collection("users");
  // const collectionSnapShot = await collectionRef.get();
  // console.log({ collection: collectionSnapShot.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error  creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const loginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
