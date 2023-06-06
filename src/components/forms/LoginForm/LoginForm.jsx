import React from 'react';
import * as Yup from 'yup'
import TextInput from '@/components/UI/inputs/TextInput/TextInput';
import Link from 'next/link';

import {useFormik} from 'formik';
import {useLoginMutation} from '@/api/mock/dummyAuthLogin';
import {useDispatch} from 'react-redux';
import {setToken} from '@/store/reducers/authSlice';
import {message} from 'antd';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

import s from './LoginForm.module.scss';

const LoginForm = () => {
    const [messageApi,
        contextHolder] = message.useMessage();
    const antIcon = <LoadingOutlined style={{
        fontSize: 24
    }} spin/>;

    const dispatch = useDispatch();
    const [login, {
            isLoading,
            isError
        }
    ] = useLoginMutation();

    // atuny0 9uQFF1Lh
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async(values) => {
            try {
                const {username, password} = values;
                const credentials = JSON.stringify({username, password});
                const result = await login(credentials);
                const token = result.data.token;
                dispatch(setToken(token));
                messageApi.open({type: 'success', content: 'Вы успешно вошли в аккаунт'});
            } catch (error) {
                console.error('Login failed:', error);
                messageApi.open({type: 'error', content: 'Ошибка. Пользователь не найден'});
            }
        },
        validationSchema: Yup.object({
            username: Yup
                .string()
                .required('Поле обязательно для заполнения'),
            password: Yup
                .string()
                .required('Введите пароль')
        })
    });

    return (
        <form className={s.login__form} onSubmit={formik.handleSubmit}>
            {contextHolder}
            <h1 className={s.form__title}>Войдите в профиль</h1>
            <div className={s.form__inputs}>
                <TextInput
                    placeholder="Имя пользователя"
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}/>
                <TextInput
                    placeholder="Пароль"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}/>
                <button type="submit" className={s.btn__submit}>
                    {isLoading ? <Spin indicator={antIcon}/> : "Войти"}
                </button>

                <Link className={s.member} href="/register">
                    Нет аккаунта? Зарегистрируйтесь
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
