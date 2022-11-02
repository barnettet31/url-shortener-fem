import React, { createContext, useState, useEffect } from "react";
import {  User } from "firebase/auth";
import { handleAuthStateChanged } from "./auth.services";
import { ISignInValues } from "../../components/sign-in/signIn.component";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
  createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import { ErrorPopUp } from "../../components/errorPopUp/errorPopUp.component";
type IUserContext = {
  user: User | null;
  error: string | null;
  handleManualSignIn: ({ email, password }: ISignInValues) => void;
  handleGoogleSignIn: (() => void )| undefined;
  handleSignUp?:(email:string, password:string)=>void;
};

export const UserContext = createContext<IUserContext | null>(null);

interface IProps {
  children?: React.ReactNode;
}
export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleManualSignIn = async ({ email, password }: ISignInValues) => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (e: unknown) {
       setError("An Error Occurred While Trying To Login.")
      
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      signInWithGooglePopUp();
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  const handleSignUp = async (email:string, password:string)=>{
  try{
    await createAuthUserWithEmailAndPassword(email, password);
  }catch(e){
    if(e instanceof Error){
        setError("An Error Occurred While Trying To Sign Up")
    }
  }
  }

  const value = {
    user,
    error,
    handleManualSignIn,
    handleGoogleSignIn,
    handleSignUp
  };
  useEffect(() => {
    handleAuthStateChanged((user)=>{
        setUser(user)
    });
  }, []);

  return (
    <UserContext.Provider value={value}>
      <>
        {children}
        {error && (
          <ErrorPopUp message={error} clearPopUp={() => setError(null)} />
        )}
      </>
    </UserContext.Provider>
  );
};
