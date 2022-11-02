interface ILogInSignUpButtons{
    handleAuthClick:(handleMethod:()=>void)=>void;
        
handleShowSignIn:()=>void;
handleShowSignUp:()=>void;
}
export const LogInSignUpButtons = ({handleAuthClick, handleShowSignIn, handleShowSignUp}:ILogInSignUpButtons)=>{
    return (
        <>
        <p onClick={()=>handleAuthClick(handleShowSignIn)} className="w-[85%] self-center text-center lg:hover:text-black cursor-pointer">
            Login
          </p>
          <button
            id="sigup-button"
            onClick={()=>handleAuthClick(handleShowSignUp)}
            className=" cursor-pointer w-full h-full lg:px-4 text-center py-3 bg-[#2bd0d0] rounded-[28px] lg:text-white hover:bg-[#9AE3E3] lg:py-1"
          >
            Sign Up
          </button></>
    )
}

interface ISignOutButton {
handleAuthClick:(handleMethod:()=>void)=>void;
handleSignOut:()=>void;
}
export const SignOutButton = ({handleAuthClick, handleSignOut}:ISignOutButton)=>{
    return  <button
       
    onClick={()=>handleAuthClick(handleSignOut)}
    className=" cursor-pointer w-full h-full block lg:inline lg:w-auto lg:px-6 text-center py-3 bg-[#2bd0d0] rounded-[28px] lg:text-white hover:bg-[#9AE3E3] lg:py-1"
  >
    <p>Sign Out</p>
  </button>
}