import { signInWithEmailAndPassword } from "firebase/auth";
import { ISignInValues, SignInForm } from "../../components/sign-in/signIn.component";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

interface ISignIn {
    isShown: boolean;
    handleToggleShow: () => void;
  }
export const SignIn = ({isShown, handleToggleShow

}:ISignIn)=>{
    return(
        <div
      className={`fixed z-20 top-0 bottom-0 flex flex-col h-screen w-screen justify-center items-center align-items start bg-slate-800/75 ${
        isShown ? "block" : "hidden"
      }`}
    >
      <div
        className={`transition-all max-w-lg ease-in-out duration-300 ${
          isShown ? "opacity-100 scale-y-100" : "hidden opacity-70 scale-y-75"
        }`}
      >
<SignInForm handleSignInWithGoogle={signInWithGooglePopUp} handleSubmit={({email, password}:ISignInValues)=>signInAuthUserWithEmailAndPassword(email, password)} handleSignInFormToggle={handleToggleShow}/>
      </div></div>
    )
}