import { ErrorMessage, Field, Formik, useFormik , Form } from "formik";
import MyTextInput from "@/components/myTextInput";

export default function SignUp(){

  interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  about?: string;
  gender?: string;
  rule?: boolean;
}
  interface FormErrors {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  [key: string]: any;
}

const validatehandler = (values: FormValues): FormErrors => {
  let errors: FormErrors = {};

      if(values.name===''){
        errors.name='This field is required'
      }else if (values.name.length<3) {
        errors.name='Name must be more than 3 chars '
      }
      if(values.username===''){
        errors.username='This field is required'
      }else if (values.username.length<6) {
        errors.username='Username must be more than 6 chars '
      }
      if(values.password===''){
        errors.password='This field is required'
      }else if (values.password.length<8) {
        errors.password='Password is too weak '
      }
    if(values.email===''){
      errors.email='this field is required'
    }else if(values.email.length<5){
      errors.email= 'please enter a vailid email address'
    } else if (! /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,4}$/i.test(values.email)){
      errors.email= ' please enter a vailid email address'
    }

    if (!values.rule) {
    errors.rule = 'You must accept the rules to continue.';
    }
      console.log(errors)
      return errors;
    }
    const submithandler= (values:any)=>{
      console.log(values)
    }

    return(
        <>
        <Formik
      initialValues={{
      name:'',
      username:'',
      email:'',
      password:''
    }}
    validate={validatehandler}
    onSubmit={submithandler}
      >
        <Form  className="bg-gray-900  p-10">
        <div>
          <MyTextInput name='name' label='Name:' type='text' placeholder='Please Enter your name...'/>
        </div>
        <div>
          <MyTextInput name='username' label='Username:' type='text' placeholder='Please Enter your username...'/>
        </div>
        <div>
          <MyTextInput name='email' label='Email:' type='email' placeholder='Please Enter your Email...'/>
        </div>
        <div>
          <MyTextInput name='password' label='Password:' type='password' placeholder='Please Enter your password...'/>
        </div>
        <div>
          <MyTextInput name='about' label='About Me:' type='textarea' placeholder='Tell Us about yourself...'/>
        </div>
        <div>
          <label htmlFor="gender">Sex</label>
          <Field name='gender' as='select' className='bg-gray-100 mx-4 text-black'>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Field>
          <ErrorMessage name='gender'/>
        </div>
        <div>
          <label htmlFor="rule">I have read and accept the rules.</label>
          <Field type='checkbox' name='rule'/>
          <ErrorMessage name='rule'/>
        </div>
        <button type="submit" className="bg-gray-600 p-2 rounded bordered border-red-500 m-auto ">Send</button>
      </Form>
      </Formik>
        </>
    )
}
