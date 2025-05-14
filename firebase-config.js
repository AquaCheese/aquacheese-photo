// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKe84a_3xgi3xv3DRkRTk6cXyNbCtX-Wo",
  authDomain: "aquacheese-photography-site.firebaseapp.com",
  projectId: "aquacheese-photography-site",
  storageBucket: "aquacheese-photography-site.firebasestorage.app",
  messagingSenderId: "671895809880",
  appId: "1:671895809880:web:4ee9031d2041f83ae57f2d",
  measurementId: "G-EJKMML5E3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);