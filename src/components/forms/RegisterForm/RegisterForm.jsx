import {DatePicker} from 'antd'
import {useFormik} from 'formik';
import TextInput from '@/components/UI/inputs/TextInput/TextInput';
import Link from 'next/link';
import React from 'react';
import s from './RegisterForm.module.scss'

const RegisterForm = ({config}) => {
    const formik = useFormik(config)
    const handleDateChange = value => {formik.setFieldValue("dateOfBirth", value)}

    return (
        <form className={s.register__form} onSubmit={formik.handleSubmit}>
            <h1 className={s.form__title}>Создайте аккаунт</h1>

            <div className={s.form__inputs}>
                {formik.touched.firstName && formik.errors.firstName ? <p className={s.form__error}>{formik.errors.firstName}</p> : null}
                
            </div>

            <Link className={s.member} href="/login">Есть аккаунт? Войдите</Link>
        </form>
    );
};

export default RegisterForm;