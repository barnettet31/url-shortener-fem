import { FormInput } from "../formInput/formInput.component";
import { Formik, Form } from "formik";
import * as Yup from "yup";
interface ISignUpValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .length(6)
    .required("Username is required, and must be at least 6 chracters."),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .length(8)
    .required("Password is required and must be at leats 8 characters."),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Your passwords must match"),
});
export const SignUpForm = () => {
  const inputs = [
    {
      required: true,
      labelText: "Display Name",
      name: "displayName",
      placeholder: "Please enter your display name",
      type: "text",
    },
    {
      required: true,
      labelText: "Email",
      name: "email",
      placeholder: "Please enter email",
      type: "email",
    },
    {
      required: true,
      labelText: "Password",
      name: "password",
      placeholder: "Please enter your password",
      type: "password",
    },
    {
      required: true,
      labelText: "Confirm Password",
      name: "confirmPassword",
      placeholder: "Please confirm your password",
      type: "password",
    },
  ];
  const initialValues: ISignUpValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSignUpSubmit = function (values: ISignUpValues) {
    console.log(values);
  };

  return (
    <div className="max-w-lg px-8 py-6 mx-auto bg-white rounded-lg shadow-sm ">
      <h1 className="text-3xl font-bold text-center text-[#2bd0d0] mb-4">
        Sign up for Shortly
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSignUpSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-6">
            <FormInput
              required={true}
              labelText="Username"
              name="username"
              placeholder="Username"
              type="text"
            />
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
