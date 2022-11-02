import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
interface InputValues {
  domainName: string;
}
const URL =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const DomainSchema = Yup.object().shape({
  domainName: Yup.string().matches(URL, "Please add a link."),
});
interface IShortenInputProps {
  handleSubmit:(link:string)=>void;
}
export const ShortenInput = ({handleSubmit}:IShortenInputProps) => {
  const initialValues: InputValues = {
    domainName: "",
  };
  return (
    <div id="shorten-links" className="w-[87%] absolute -bottom-32 lg:-bottom-24 max-w-[1108px] lg:w-full mx-auto  bg-mobile-shorten lg:bg-desktop-shorten bg-no-repeat bg-top lg:bg-right bg-cover bg-[#3A3054]  py-[3.25rem] rounded-[10px] px-6 lg:px-16">
      <Formik
        initialValues={initialValues}
        onSubmit={(values:InputValues, {resetForm}) => {
         handleSubmit(values.domainName);
         resetForm();
        }}
        validationSchema={DomainSchema}
      >
        {({ errors, touched }) => (
          <>
            <Form className="flex flex-col items-center justify-center gap-6 lg:flex-row">
              <div className="relative flex flex-col w-full">
                <Field
                  placeholder="Shorten a link here..."
                  className={`rounded-[10px] w-full py-3 px-6 outline-none ${
                    touched &&
                    errors.domainName &&
                    "placeholder:text-[#F46363] border-[#F46363] border-[3px]"
                  }`}
                  name="domainName"
                />
                {errors.domainName && (
                  <p className="text-[#f46363] mt-1 italic text-xs font-medium absolute -bottom-6">
                    Please add a link.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="py-3 px-4 w-full lg:w-[188px] text-center bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3] text-white rounded-[10px]"
              >
                Shorten It!
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
