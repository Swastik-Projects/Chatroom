const firebaseConfig = {
  apiKey: "AIzaSyACoXBpmm-poPl3Auk0dE-1ajdL_ufclrE",
  authDomain: "sub-projects.firebaseapp.com",
  databaseURL: "https://sub-projects-default-rtdb.firebaseio.com",
  projectId: "sub-projects",
  storageBucket: "sub-projects.appspot.com",
  messagingSenderId: "321350857017",
  appId: "1:321350857017:web:d64c0a7e40dcf99294f8e8",
  measurementId: "G-DLVY432WM9"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();