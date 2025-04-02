import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB79uxi1R-bBuy4kKLXps1IzfkieftDxk",
  authDomain: "latestmock-951e5.firebaseapp.com",
  databaseURL: "https://latestmock-951e5-default-rtdb.firebaseio.com",
  projectId: "latestmock-951e5",
  storageBucket: "latestmock-951e5.firebasestorage.app",
  messagingSenderId: "275309936451",
  appId: "1:275309936451:web:a9ec5645dcdabed2c2b9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database };


