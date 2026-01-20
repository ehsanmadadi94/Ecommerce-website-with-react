import { ErrorMessage, Field, Form, Formik } from "formik";
import MyTextInput from "@/components/MyTextInput";
import { boolean, object, string } from "yup";

export default function SignUp() {
  const registerFormSchema = object({
    name: string().required("Required").min(3, "At least 3 characters"),
    username: string().required("Required").min(6, "At least 6 characters"),
    email: string().required("Required").email("Invalid email"),
    password: string().required("Required").min(8, "At least 8 characters"),
    about: string().required("Required"),
    gender: string().required("Required").matches(/(male|female)/),
    rule: boolean().oneOf([true], "You must accept the rules"),
  });

  const submithandler = (values: any) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Create Account
        </h1>

        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            about: "",
            gender: "",
            rule: false,
          }}
          validationSchema={registerFormSchema}
          onSubmit={submithandler}
        >
          <Form className="space-y-5 md:space-y-6">
            <MyTextInput
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your name"
            />

            <MyTextInput
              name="username"
              label="Username"
              type="text"
              placeholder="Enter your username"
            />

            <MyTextInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <MyTextInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <MyTextInput
              name="about"
              label="About Me"
              type="textarea"
              placeholder="Tell us about yourself"
            />

            {/* Gender */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-700">
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="
                  w-full rounded-lg border border-slate-300
                  bg-white px-3 py-2 text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                "
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Rules */}
            <div className="flex items-start gap-2">
              <Field
                type="checkbox"
                name="rule"
                className="
                  mt-1 h-4 w-4 rounded
                  text-indigo-600 focus:ring-indigo-500
                "
              />
              <label className="text-sm text-slate-700">
                I have read and accept the rules.
              </label>
            </div>
            <ErrorMessage
              name="rule"
              component="p"
              className="text-sm text-red-500"
            />

            <button
              type="submit"
              className="
                w-full rounded-lg bg-indigo-600
                py-2.5 text-white font-semibold
                hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition
              "
            >
              Create Account
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
