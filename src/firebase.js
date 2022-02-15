import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNN3TeXDtARVOkajVfEHm6IjdETMN5nMs",
  authDomain: "todos-34eb6.firebaseapp.com",
  projectId: "todos-34eb6",
  storageBucket: "todos-34eb6.appspot.com",
  messagingSenderId: "1030374827112",
  appId: "1:1030374827112:web:ef0ec1c173c272082707dd",
  measurementId: "G-DRF5VEB2WF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db };
