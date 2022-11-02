import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  UserCredential
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  arrayUnion,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { IUrl } from "../../api/urlShortener";
import { IArrayOfUrls } from "../../components/copyItemList/copyItemList.component";

const firebaseConfig = {
  apiKey: "AIzaSyCIxPW6EGqgeCg9aTcuuwsKdwm1ZHt6mYo",

  authDomain: "url-shorty-fem.firebaseapp.com",

  projectId: "url-shorty-fem",

  storageBucket: "url-shorty-fem.appspot.com",

  messagingSenderId: "889416224483",

  appId: "1:889416224483:web:e326ba856d17199b8e7fd6",
};
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export type AdditionalInformation = {
  username?:string;
}
export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation:AdditionalInformation= {} as AdditionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error: any) {
      console.log(`error creating the user`, error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
):Promise<UserCredential | void> => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async(email:string, password:string):Promise<UserCredential | void> =>{
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = async ():Promise<void>=>await signOut(auth);
export const onAuthStateChangedListener = (callback:NextOrObserver<User>)=>{
  onAuthStateChanged(auth, callback);
}
export const getCurrentUser = ():Promise<User | null>=>{
  return new Promise ((resolve, reject)=>{
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth)=>{
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const getUrlDocs = async(userAuth:User)=>{
if(!userAuth) return null;
const urlDocRef = doc(db,"urls", userAuth.uid);
const urlDocSnapShot = await getDoc(urlDocRef);
if(!urlDocSnapShot.exists()) return []
return urlDocSnapShot.data()["urls"]

}
export const setUrlDocs = async(userAuth:User, urlInfo:IUrl)=>{
if(!userAuth) return null; 
const urlDocRef = doc(db, "urls", userAuth.uid);
const urlDocSnapShot = await getDoc(urlDocRef);
if(urlDocSnapShot.exists()){
 try{
  return await updateDoc(urlDocRef, {
    urls:arrayUnion(urlInfo)
  })
  }
  catch(e){
    throw e;
  }
}else{
  try{
    await setDoc(urlDocRef, {
      urls:arrayUnion(urlInfo)
    })
  }catch(e){
    throw e;
  }
}

 

}