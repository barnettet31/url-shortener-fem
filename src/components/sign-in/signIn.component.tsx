import { FormInput } from "../formInput/formInput.component";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { UserCredential } from "firebase/auth";
export interface ISignInValues {
  email: string;
  password: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .length(8)
    .required("Password is required and must be at leats 8 characters."),
});
interface ISignInFormToggle {
  handleSignInFormToggle: () => void;
  handleSubmit: ({
    email,
    password,
  }: ISignInValues) => Promise<UserCredential | undefined>;
  handleSignInWithGoogle: () => void;
}
export const SignInForm = ({
  handleSignInFormToggle,
  handleSubmit,
  handleSignInWithGoogle,
}: ISignInFormToggle) => {
  const initialValues: ISignInValues = {
    email: "",
    password: "",
  };
  const handleSignInSubmit = function (values: ISignInValues) {
    console.log(values);
  };

  return (
    <div className="relative w-11/12 max-w-lg px-8 py-6 mx-auto bg-white rounded-lg shadow-sm lg:max-w-xl">
      <div className="flex justify-center gap-5">
        <h1 className="text-xl lg:text-2xl font-bold text-center text-[#2bd0d0] mb-4">
          Sign up for Shortly
        </h1>
        <svg
          onClick={handleSignInFormToggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute w-6 h-6 cursor-pointer top-7 right-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSignInSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-6 mt-4">
            <FormInput
              required={true}
              labelText="Email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <FormInput
              required={true}
              labelText="Password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <div className="flex justify-between gap-4 px-1 mt-4 ">
              <button
                type="submit"
                className="py-3 px-4 w-full  text-sm text-center bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3] text-white rounded-[10px]"
              >
                Sign In!
              </button>
              <button
                className="py-1 px-4 w-full text-sm  text-center bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3] text-white rounded-[10px]"
                onClick={handleSignInWithGoogle}
              >
                Google Sign In
              </button>
            </div>
          </Form>  
        )}
      </Formik>
    </div>
  );
};
