import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, getAuth, signOut, signInWithPopup,signInWithRedirect, NextOrObserver, User, UserCredential, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
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
    prompt:'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);
  export const createAuthUserWithEmailAndPassword = async (
    email:string,
    password:string
  ): Promise <UserCredential | void> =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async (): Promise<void> => await signOut(auth);

  export const onAuthStateChangedListener = (callback:NextOrObserver<User>)=> onAuthStateChanged(auth, callback);

  export const getCurrentUser = (): Promise<User | null> =>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = onAuthStateChanged(auth, (userAuth)=>{
            unsubscribe();
            resolve(userAuth);
        },reject);
        
    });
  }