import { NextOrObserver, User } from "firebase/auth";
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";

export const handleAuthStateChanged =  (callback:NextOrObserver<User>)=>{
    onAuthStateChangedListener(callback);

}

