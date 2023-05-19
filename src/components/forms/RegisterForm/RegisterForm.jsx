import {DatePicker} from 'antd'
import {useFormik} from 'formik';

import TextInput from '@/components/UI/inputs/TextInput/TextInput';
import Link from 'next/link';
import React from 'react';

import s from './RegisterForm.module.scss'

const RegisterForm = ({config, type}) => {
    const formik = useFormik(config)
    const handleDateChange = value => {
        formik.setFieldValue("dateOfBirth", value)
    }

    return (
        <form className={`form__${type} ${s.register__form} `} onSubmit={formik.handleSubmit}>
            <h1 className={s.form__title}>Создайте аккаунт</h1>
            <div className={s.form__inputs}>

                {formik.touched.firstName && formik.errors.firstName
                    ? <p className={s.form__error}>{formik.errors.firstName}</p>
                    : null}
                <TextInput placeholder="Имя"
                type="text"
                name="firstName"
                value={formik.values.firstName} 
                onChange={formik.handleChange}/>

                {formik.touched.lastName && formik.errors.lastName
                    ? <p className={s.form__error}>{formik.errors.lastName}</p>
                    : null}
                <TextInput placeholder="Фамилия"
                type="text"
                name="lastName"
                value={formik.values.lastName} 
                onChange={formik.handleChange}/>

                {formik.touched.email && formik.errors.email
                    ? <p className={s.form__error}>{formik.errors.email}</p>
                    : null}
                <TextInput placeholder="Адрес электронной почты"
                type="email"
                name="email"
                value={formik.values.email} 
                onChange={formik.handleChange}/>

                {formik.touched.dateOfBirth && formik.errors.dateOfBirth
                    ? <p className={s.form__error}>{formik.errors.dateOfBirth}</p>
                    : null}
                <DatePicker className={s.form__datepicker}
                format={'DD / MM / YYYY'}
                name='dateOfBirth'
                value={formik.values.dateOfBirth}
                placeholder="Дата рождения"
                onChange={handleDateChange}/>

                {formik.touched.password && formik.errors.password
                    ? <p className={s.form__error}>{formik.errors.password}</p>
                    : null}
                <TextInput placeholder="Пароль"
                type="password"
                name="password"
                value={formik.values.password} 
                onChange={formik.handleChange}/>

                {formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? <p className={s.form__error}>{formik.errors.confirmPassword}</p>
                    : null}
                <TextInput placeholder="Подтвердите пароль"
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword} 
                onChange={formik.handleChange}/>

            </div>

            <button type='submit' className={s.btn__submit} onClick={formik.handleSubmit}>{type == "client" ? "Создать аккаунт" : "Стать партнером"}</button>

            <Link className={s.member} href="/login">Есть аккаунт? Войдите</Link>
        </form>
    );
};

export default RegisterForm;