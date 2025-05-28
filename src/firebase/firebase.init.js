import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaFkALgsGVSIIkF5AyUr925ydNXtDvfGk",
  authDomain: "job-portal-ab951.firebaseapp.com",
  projectId: "job-portal-ab951",
  storageBucket: "job-portal-ab951.firebasestorage.app",
  messagingSenderId: "994388436748",
  appId: "1:994388436748:web:ffd520fd974cb627c00b29",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
