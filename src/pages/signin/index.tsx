import { ErrorMessage, Field, Formik, Form } from "formik";
import MyTextInput from "@/components/myTextInput";

interface FormValues {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
  }

export default function SignIn() {

  const validatehandler = (values: FormValues): FormErrors => {
    let errors: FormErrors = {};
    if (!values.username) errors.username = 'Username is required';
   if (!values.password) errors.password = 'Password is required';
   return errors;
  };

  const submithandler = (values: FormValues) => {
    console.log(values);
    alert("Form Submitted Successfully!");
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-red-600">
      <div className="w-full max-w-lg bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">


        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Sign In</h1>
          <p className="text-blue-100 text-sm">Sign in to your account</p>
        </div>


        <div className="p-8">
          <Formik
            initialValues={{
             username: '',
              password: '',
            }}
            validate={validatehandler}
            onSubmit={submithandler}
          >
            <Form className="space-y-5">
                <MyTextInput name='username' label='Username' type='text' placeholder='Enter your username' />
                <MyTextInput name='password' label='Password' type='password' placeholder='Enter your password' />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500"
              >
                Sign In
              </button>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
