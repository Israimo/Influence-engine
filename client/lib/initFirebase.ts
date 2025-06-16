import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFeYMHAYAkwG4RmwMTezPPpD1juj9g2NQ",
  authDomain: "maven-engine.firebaseapp.com",
  projectId: "maven-engine",
  storageBucket: "maven-engine.appspot.com",
  messagingSenderId: "960950688648",
  appId: "1:960950688648:web:f941494b053ca09415383d",
  measurementId: "G-7L0B5JVKEL",
};

const app = initializeApp(firebaseConfig);
export default app;
