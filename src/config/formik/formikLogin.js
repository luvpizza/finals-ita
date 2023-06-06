import * as Yup from 'yup'

export const formikLogin = {
    initialValues: {
        email: "",
        password: "",
    },
    onSubmit: (values) => {
        console.log("your values: ", values);
    },
    validationSchema: Yup.object({
        email: Yup
            .string()
            .required("Поле обязательно для заполнения")
            .email("Введите корректный e-mail"),
        password: Yup
            .string()
            .required("Введите пароль")
    })
}
