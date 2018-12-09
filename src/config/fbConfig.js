import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDuV36bwM8nDHIu2vfzIP3qUnRbyxnKxw",
    authDomain: "car-card-dudar.firebaseapp.com",
    databaseURL: "https://car-card-dudar.firebaseio.com",
    projectId: "car-card-dudar",
    storageBucket: "car-card-dudar.appspot.com",
    messagingSenderId: "828879465775"
};

firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;