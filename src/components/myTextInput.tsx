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
    <div className="p-6">
      <label htmlFor={name} >{label}</label>
      <Field {...fieldProps} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default MyTextInput;
