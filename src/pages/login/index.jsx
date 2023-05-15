import React from 'react';
import s from "./login.module.scss"
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LoginForm from '@/components/forms/LoginForm/LoginForm';
import {formikLogin} from '@/config/formik/formikLogin';
const Login = () => {
    return (
        <div>
            <Header/>
            <section className={s.login}>
                <div className={s.login__content}>
                    <LoginForm config={formikLogin}/>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Login;