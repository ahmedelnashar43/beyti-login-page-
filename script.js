// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_46vg2dSAlE2G9ma8vyOdv2Uac2Rpe8w",
  authDomain: "beyti-login.firebaseapp.com",
  projectId: "beyti-login",
  storageBucket: "beyti-login.appspot.com",
  messagingSenderId: "214736961866",
  appId: "1:214736961866:web:36a6caf135855c40b8c1b3",
  measurementId: "G-LBKHTZSVQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth();

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful, redirect to the target page
        window.location.href = 'https://beytisystem.vercel.app/';
      })
      .catch((error) => {
        // Check the specific error code and customize the error message
        let errorMessage;
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          errorMessage = 'Invalid username or password.';
        } else {
          errorMessage = 'Invalid username or password.';
        }
        document.getElementById('loginStatus').innerHTML = errorMessage;
        document.getElementById('loginStatus').style.color = 'red';
      });
  } else {
    alert('Please enter both email and password.');
  }
});
