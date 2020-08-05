import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
//db

var firebaseConfig = {
    apiKey: "AIzaSyC2y_M1slWmgT8K4u6zlSIPSurVrhVuuh0",
    authDomain: "uploadproject-8b912.firebaseapp.com",
    databaseURL: "https://uploadproject-8b912.firebaseio.com",
    projectId: "uploadproject-8b912",
    storageBucket: "uploadproject-8b912.appspot.com",
    messagingSenderId: "325821064943",
    appId: "1:325821064943:web:1dd6186ab78bc2ec4b9d1a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
