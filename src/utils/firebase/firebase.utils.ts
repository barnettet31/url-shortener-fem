import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyCIxPW6EGqgeCg9aTcuuwsKdwm1ZHt6mYo",

  authDomain: "url-shorty-fem.firebaseapp.com",

  projectId: "url-shorty-fem",

  storageBucket: "url-shorty-fem.appspot.com",

  messagingSenderId: "889416224483",

  appId: "1:889416224483:web:e326ba856d17199b8e7fd6"

};
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopUp = ()=>signInWithPopup(auth,googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth:any)=>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error:any){
      console.log(`error creating the user`, error.message);
    }
  }
return userDocRef;
}