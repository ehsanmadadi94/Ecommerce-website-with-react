import { ErrorMessage, Field } from "formik";

type MyTextInputProps = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
};

const MyTextInput = ({
  name,
  label,
  type,
  placeholder,
}: MyTextInputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <Field
        name={name}
        as={type === "textarea" ? "textarea" : "input"}
        type={type !== "textarea" ? type : undefined}
        placeholder={placeholder}
        className="
          block w-full rounded-lg border border-slate-300
          bg-white px-3 py-2 text-slate-900
          placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          focus:border-indigo-500
          transition
          min-h-[42px]
          resize-none
        "
      />

      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default MyTextInput;
