import firebase from 'firebase';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcN2KOebYQKCDPiRdu0EzfVhHWI8n_Pjg",
    authDomain: "aztape-d1b45.firebaseapp.com",
    databaseURL: "https://aztape-d1b45.firebaseio.com",
    projectId: "aztape-d1b45",
    storageBucket: "aztape-d1b45.appspot.com",
    messagingSenderId: "536071254136",
    appId: "1:536071254136:web:bd64e54c54f6ba7878bd8d",
    measurementId: "G-Q00E9LWBF5"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;