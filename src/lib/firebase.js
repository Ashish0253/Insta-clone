import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//here seed file will be imported
// import { seedDatabase } from "../seed";
//used it to seed data in firestore

const config = {
  apiKey: "AIzaSyC2pU6LPFTc6SM-X3t6jfAoYv1YLcIfqTA",
  authDomain: "instagram-e7c16.firebaseapp.com",
  projectId: "instagram-e7c16",
  storageBucket: "instagram-e7c16.appspot.com",
  messagingSenderId: "303769117395",
  appId: "1:303769117395:web:44566a8f527d5f95caea26",
  measurementId: "G-R848EDEWJT",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here seed file will be called (only once)
// seedDatabase(firebase);

console.log("firebase", firebase);

export { firebase, FieldValue };
