import { Field } from "formik";

interface IFormInput {
  required: boolean;
  labelText: string;
  name: string;
  placeholder: string;
  type:string;
  
}
export const FormInput = ({
  labelText,
  name,
  placeholder,
  type,
 

}: IFormInput) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="hidden text-sm font-medium text-[#34313D] text-semi-bold md:block" htmlFor={name}>{labelText}</label>
      <div className="">
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className="block w-full px-2 py-2 border-gray-500 border rounded-lg shadow-sm outline-0 focus:outline-[#2bd0d0] md:placeholder:text-white"
        ></Field>
        
      </div>
    </div>
  );
};
