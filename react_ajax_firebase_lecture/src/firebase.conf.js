import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRaOcA5avW8ZRFfp_OD5shSz0Y660yH9U",
  authDomain: "studynews-555.firebaseapp.com",
  projectId: "studynews-555",
  storageBucket: "studynews-555.appspot.com",
  messagingSenderId: "1014465985818",
  appId: "1:1014465985818:web:c5b775e555e3774cfa80a3",
  measurementId: "G-8NFX1K8VTD"
};
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage(); 