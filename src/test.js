import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("SdIsYYI7UVjNJmoZroM6")
  .collection("cartItems")
  .doc("I2xgpWqj1P0sbtfvfCJ3");

firestore.doc("/users/SdIsYYI7UVjNJmoZroM6/cartItems/I2xgpWqj1P0sbtfvfCJ3");
firestore.collection("/users/SdIsYYI7UVjNJmoZroM6/cartItems");
