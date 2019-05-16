import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDinzu-G-KbhGC3D4eT88UWZNTMMtaqtrg",
    authDomain: "the-adder.firebaseapp.com",
    databaseURL: "https://the-adder.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;