import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBogbgeM2Uo4sMlTbR9C9B7x0J2fyNgTOI",
    authDomain: "doctor-laudos.firebaseapp.com",
    databaseURL: "https://doctor-laudos.firebaseio.com",
    projectId: "doctor-laudos",
    storageBucket: "doctor-laudos.appspot.com",
    messagingSenderId: "833924439377",
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();