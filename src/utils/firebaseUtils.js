import firebase from 'firebase';

const devConfig = {
    apiKey: "AIzaSyBogbgeM2Uo4sMlTbR9C9B7x0J2fyNgTOI",
    authDomain: "doctor-laudos.firebaseapp.com",
    databaseURL: "https://doctor-laudos.firebaseio.com",
    projectId: "doctor-laudos",
    storageBucket: "doctor-laudos.appspot.com",
    messagingSenderId: "833924439377",
};

const prodConfig = {
    apiKey: "AIzaSyBogbgeM2Uo4sMlTbR9C9B7x0J2fyNgTOI",
    authDomain: "doctor-laudos.firebaseapp.com",
    databaseURL: "https://doctor-laudos.firebaseio.com",
    projectId: "doctor-laudos",
    storageBucket: "doctor-laudos.appspot.com",
    messagingSenderId: "833924439377",
};


const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();