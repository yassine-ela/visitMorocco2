import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBc55rD6G1H5IkuoPX0p9rlVfdxDpWUCNo",
    authDomain: "projectionic-yass.firebaseapp.com",
    projectId: "projectionic-yass",
    storageBucket: "projectionic-yass.appspot.com",
    messagingSenderId: "139189520766",
    appId: "1:139189520766:web:f1361d6653e63de3d80b2f",
    measurementId: "G-RF0RSXM59W"
  }
};
initializeApp(environment.firebaseConfig);
export const db = getFirestore();