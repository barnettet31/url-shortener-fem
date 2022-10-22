import { FormInput } from "../formInput/formInput.component";
import { Formik, Form } from "formik";
import * as Yup from "yup";
export interface ISignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, 'password needs to be at least 8 characters long')
    .required("Password is required and must be at leats 8 characters."),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Your passwords must match"),
});
interface ISignUpFormToggle {
  handleSignUpFormToggle:()=>void;
  handleSubmit:(values:any)=>void;
}
export const SignUpForm = ({handleSignUpFormToggle, handleSubmit}:ISignUpFormToggle) => {

  const initialValues: ISignUpValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSignUpSubmit = function (values: ISignUpValues) {
    handleSubmit(values);
    handleSignUpFormToggle();
  };

  return (
    <div className="relative w-11/12 max-w-lg px-8 py-6 mx-auto bg-white rounded-lg shadow-sm lg:max-w-xl">
      <div className="flex justify-center gap-5">
        <h1 className="text-xl lg:text-2xl font-bold text-center text-[#2bd0d0] mb-4">
        Sign up for Shortly
      </h1>
      <svg onClick={handleSignUpFormToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-6 h-6 cursor-pointer top-7 right-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values,{resetForm}) => {
          handleSignUpSubmit(values)
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-6">
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
            <FormInput
              required={true}
              labelText="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
             <button
                type="submit"
                className="py-3 px-4 w-full text-center bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3] text-white rounded-[10px]"
              >
                Sign Up!
              </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
