import {useFormik} from 'formik';

import React from 'react';
import TextInput from '@/components/UI/inputs/TextInput/TextInput';
import Link from 'next/link';

import s from './LoginForm.module.scss'

const LoginForm = ({config}) => {
    const formik = useFormik(config)
    return (
        <form className={s.login__form} onSubmit={formik.handleSubmit}>
            <h1 className={s.form__title}>Войдите в профиль</h1>
            <div className={s.form__inputs}>
                <TextInput
                    placeholder="Адрес электронной почты"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}/>
                <TextInput
                    placeholder="Пароль"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}/>
                <button type='submit' className={s.btn__submit} onClick={formik.handleSubmit}>Войти</button>
                <Link className={s.member} href="/register">Нет аккаунта? Зарегистрируйтесь</Link>
            </div>
        </form>
    );
};

export default LoginForm;