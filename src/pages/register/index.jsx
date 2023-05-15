import React, {useState} from 'react';
import {formikClientRegister} from '@/config/formik/formikClientRegister';
import { formikPartnerRegister } from '@/config/formik/formikPartnerRegister';
import s from './register.module.scss'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import RegisterForm from '@/components/forms/RegisterForm/RegisterForm';

const Register = () => {
    const [registerType,
        setRegisterType] = useState(true)
    const handleRegisterTypeClick = (e, type) => {
        e.preventDefault();
        setRegisterType(type);
    }
    return (
        <div>
            <Header/>
            <section className={s.register}>
                <div className={s.register__content}>
                    <div className={s.register__btns}>
                        <button
                            type='button'
                            className={registerType
                            ? s.register__btn_selected
                            : s.register__btn_unselected}
                            onClick={(e) => handleRegisterTypeClick(e, true)}>Клиент</button>
                        <button
                            type='button'
                            className={registerType
                            ? s.register__btn_unselected
                            : s.register__btn_selected}
                            onClick={(e) => handleRegisterTypeClick(e, false)}>Партнер</button>
                    </div>

                    {registerType
                        ? <RegisterForm type="client" config={formikClientRegister} />
                        : <RegisterForm type="partner" config={formikPartnerRegister}/>}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Register;