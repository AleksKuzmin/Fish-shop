import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFDBFWdyPqVgccxkFI8-98b761Uk2r0dM",
  authDomain: "fish-shop-2b1a4.firebaseapp.com",
  databaseURL: "https://fish-shop-2b1a4-default-rtdb.firebaseio.com",
  //   projectId: "fish-shop-2b1a4",
  //   storageBucket: "fish-shop-2b1a4.appspot.com",
  //   messagingSenderId: "355201545952",
  //   appId: "1:355201545952:web:5ca77481ecf70f8e0f0285",
  //   measurementId: "G-DLLC9HZK0Q",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;