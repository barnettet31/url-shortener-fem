import { useContext } from "react";
import { ISignUpValues, SignUpForm } from "../../components/sign-up/signUpForm.component";
import { UserContext } from "../../services/authentication/auth.context";
interface ISignUp {
  isShown: boolean;
  handleToggleShow: () => void;
}
export const SignUp = ({ isShown, handleToggleShow }: ISignUp) => {
  const context = useContext(UserContext)
  const handleSubmit = ({email, password, confirmPassword}:ISignUpValues)=>{
    context?.handleSignUp?.(email, password);
  }
  return (
    <div
      className={`fixed z-20 top-0 flex flex-col h-screen w-screen justify-center items-center align-items start bg-slate-800/75 ${
        isShown ? "block" : "hidden"
      }`}
    >
      <div
        className={`transition-all max-w-lg ease-in-out duration-300 ${
          isShown ? "opacity-100 scale-y-100" : "hidden opacity-70 scale-y-75"
        }`}
      >
        <SignUpForm handleSubmit={handleSubmit} handleSignUpFormToggle={handleToggleShow} />
      </div>
    </div>
  );
};
