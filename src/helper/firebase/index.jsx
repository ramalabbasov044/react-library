import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCfPcXe-_liGYFgvkXDU8ZypolqYqmV4_U",
  authDomain: "react-bookstore-3cc9a.firebaseapp.com",
  projectId: "react-bookstore-3cc9a",
  storageBucket: "react-bookstore-3cc9a.appspot.com",
  messagingSenderId: "600209878842",
  appId: "1:600209878842:web:69f3b55450b26f678c6a03"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);