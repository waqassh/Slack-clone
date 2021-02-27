import firebase from 'firebase';

//configuratie van database
const firebaseConfig = {
    apiKey: "AIzaSyDht0Js1XottrWkixZ69u1SofFkCF-FsUo",
    authDomain: "slack-clone-921f4.firebaseapp.com",
    projectId: "slack-clone-921f4",
    storageBucket: "slack-clone-921f4.appspot.com",
    messagingSenderId: "546535064670",
    appId: "1:546535064670:web:c9dc84a80a459d18c8e0cf"
  };

    //initializeren van databse
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    //databse toekennen 
    const Db = firebaseApp.firestore();
    //exporten van database om gebruik te maken 
export default Db;