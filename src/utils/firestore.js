import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAb0yQkmjZyXREYv4FRTwuUS86SwwGutQ",
  authDomain: "tienda-naike.firebaseapp.com",
  projectId: "tienda-naike",
  storageBucket: "tienda-naike.appspot.com",
  messagingSenderId: "1049092345472",
  appId: "1:1049092345472:web:ef225477656d2fdbd0a065"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);