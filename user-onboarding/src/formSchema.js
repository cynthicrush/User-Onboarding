import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Username is required, please fill out')
        .min(1, 'Username must be 1 characters or longer'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be 8 characters or longer'),
    tos: yup.boolean()
})
export default formSchema;