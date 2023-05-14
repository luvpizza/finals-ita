import * as Yup from 'yup';
export const formikPartnerRegister = {
    initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: ""
    },
    onSubmit: (values) => {
        console.log("your values: ", values);
    },
    validationSchema: Yup.object({
        firstName: Yup
            .string()
            .required("Поле обязательно для заполнения"),
        lastName: Yup
            .string()
            .required("Поле обязательно для заполнения"),
        email: Yup
            .string()
            .required("Введите корректный e-mail")
            .email("Введите корректный e-mail"),
        dateOfBirth: Yup
            .object()
            .required('Укажите Вашу дату рождения'),
        password: Yup
            .string()
            .required('Придумайте пароль'),
        confirmPassword: Yup
            .string()
            .required("Поле обязательно для заполнения")
            .oneOf([Yup.ref('password')], "Пароли не совпадают")
    })
}