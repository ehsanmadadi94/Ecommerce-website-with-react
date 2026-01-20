import { ErrorMessage, Field } from "formik";

type MyTextInputProps = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  [key: string]: any;
};

const MyTextInput = ({ name, label, type, placeholder, ...rest }: MyTextInputProps) => {
  const fieldProps: any = {
    name: name,
    placeholder: placeholder,
    className: "bg-gray-100 text-red-600 rounded ms-2 p-1",
    ...rest
  };

  if (type === 'textarea') {
    fieldProps.as = 'textarea';
  } else {
    fieldProps.type = type;
  }

  return (
    <>
    <label className="block" htmlFor={name} >{label}</label>
    <Field className="block" {...fieldProps} />
    <ErrorMessage className="block" name={name} />
    </>
  );
};

export default MyTextInput;
