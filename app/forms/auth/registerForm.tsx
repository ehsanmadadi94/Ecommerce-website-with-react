import { withFormik } from "formik";
import { RegisterFormValuesInterface } from "../../contracts";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import { boolean, object, string } from "yup";

const registerFormSchema = object({
    name: string().required("Required").min(3, "At least 3 characters"),
    username: string().required("Required").min(6, "At least 6 characters"),
    email: string().required("Required").email("Invalid email"),
    password: string().required("Required").min(8, "At least 8 characters"),
    about: string().required("Required"),
    gender: string().required("Required").matches(/(male|female)/),
    // rule: boolean().oneOf([true], "You must accept the rules"),
  });

interface InputPropsnewProps {
}

const RegisterForm = withFormik<InputPropsnewProps , RegisterFormValuesInterface>({
    mapPropsToValues : props => ({
            name : '',
            email : '',
            label: '',
            type: '',
            placeholder:'',
        }),
    validationSchema: registerFormSchema,
    handleSubmit : (values) => {
        console.log(values);
    }
})(InnerRegisterForm)

export default RegisterForm;
