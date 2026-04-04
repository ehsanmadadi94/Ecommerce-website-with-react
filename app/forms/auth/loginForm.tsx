import {  withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contracts";
import InnerLoginForm from "../../components/auth/innerLoginForm";

const loginFormValidationSchema = yup.object().shape({
    email : yup.string().required().email(),
    password : yup.string().required().min(8)
    })

interface LoginFormProps {
}

const LoginForm = withFormik<LoginFormProps , LoginFormValuesInterface>({
    mapPropsToValues : props => ({
        email : '',
        password : ''
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit : (values) => {
        console.log(values);
    }
})(InnerLoginForm)

export default LoginForm;
