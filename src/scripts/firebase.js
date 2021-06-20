firebase.initializeApp({
  apiKey: "AIzaSyCDFazPZubHCKaSVn8dPvBZHvwJyd4cMZg",
  authDomain: "three-zero-club.firebaseapp.com",
  projectId: "three-zero-club",
  storageBucket: "three-zero-club.appspot.com",
  messagingSenderId: "777429204977",
  appId: "1:777429204977:web:0d79f1fbeaff747a884e50",
  measurementId: "G-1ZTS4B7X4H",
});

const auth = firebase.auth();
const db = firebase.firestore();

const sign_in_google = async () => {
  try{
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }catch (error){
    console.log(erro)
  }
}
