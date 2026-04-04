import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Input from "../../components/shared/form/input"
import { RegisterFormValuesInterface } from "../../contracts";


const InnerRegisterForm = (props : FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form className="space-y-5 md:space-y-6">
            <Input
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your name"
            />


            <Input
              name="username"
              label="Username"
              type="text"
              placeholder="Enter your username"
            />

            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <Input
              name="about"
              label="About Me"
              type="textarea"
              placeholder="Tell us about yourself"
            />
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
    )
}

export default InnerRegisterForm;
