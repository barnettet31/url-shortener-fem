import { SignUpForm } from "../../components/sign-up/signUpForm.component";
interface ISignUp{
    isShown:boolean;
}
export const SignUp = ({isShown}:ISignUp) => {

  //TODO handle transition in shown condition
  //TODO wrap in a container to hide background 
  return (

      <aside className={`fixed top-0 left-0 justify-center w-screen h-screen items center ease-in-out ${isShown ? 'flex flex-col opacity-100 scale-y-100':'hidden opacity-70 scale-y-75'}`}>
        <SignUpForm />
      </aside>
 
  );
};
