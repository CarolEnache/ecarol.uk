import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCiEeaQqzYxB9VRxiywoRGeXlV5A2g20_w',
    authDomain: 'ecarol-567f7.firebaseapp.com',
    databaseURL: 'https://ecarol-567f7.firebaseio.com',
    projectId: 'ecarol-567f7',
    storageBucket: 'ecarol-567f7.appspot.com',
    messagingSenderId: '451167127745'
};
firebase.initializeApp(config);

export const database = firebase.database();