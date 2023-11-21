// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1v8Q19i9WV2UZLlQPLWHxOrWGfKF8tB4",
    authDomain: "heimnet-95306.firebaseapp.com",
    databaseURL: "https://heimnet-95306-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "heimnet-95306",
    storageBucket: "heimnet-95306.appspot.com",
    messagingSenderId: "919356303287",
    appId: "1:919356303287:web:83e57a5adebbed90852a32",
    measurementId: "G-8YWJ0BE4WB"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create a reference to the properties collection
const propertiesRef = collection(db, "properties");