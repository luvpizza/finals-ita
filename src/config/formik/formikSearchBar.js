import * as Yup from 'yup'
export const formikSearchBar = {
    initialValues: {
        destination: "",
        dates: [],
        numberOfPeople: 1
    },
    onSubmit: (values) => {
        console.log("your values: ", values);
    },
    validationSchema: Yup.object({
        destination: Yup
            .string()
            .required("Укажите пункт назначения"),
        dates: Yup
            .array()
            .required("Заполните значения"),
        numberOfPeople: Yup
            .number()
            .required("Укажите количество вьезжающих")
    })
}
