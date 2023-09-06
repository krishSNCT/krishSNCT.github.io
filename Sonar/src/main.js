import './assets/main.css'

import { createApp } from 'vue'
import App from '../App.vue'

createApp(App).mount('#app')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByv67-Gj4jqdm8uwLaq2f7CV9q882mgls",
  authDomain: "sonar-c79df.firebaseapp.com",
  projectId: "sonar-c79df",
  storageBucket: "sonar-c79df.appspot.com",
  messagingSenderId: "222818953341",
  appId: "1:222818953341:web:c8026d5deee7ab44ece914",
  measurementId: "G-E2H4YVNJBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);