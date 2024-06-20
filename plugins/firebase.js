import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyB2M_GRbaheY4gLvPEacUHPYd-bNK5SUAM",
    authDomain: "fir-pf-e14a1.firebaseapp.com",
    projectId: "fir-pf-e14a1",
    storageBucket: "fir-pf-e14a1.appspot.com",
    messagingSenderId: "940496518303",
    appId: "1:940496518303:web:4761a19437375c9d04b6aa",
    measurementId: "G-4MY80RSFDV"
  });
}

export default firebase;