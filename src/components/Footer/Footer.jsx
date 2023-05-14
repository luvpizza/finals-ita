import React from 'react';
import s from "./Footer.module.scss"
const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footer__text}>
                    <h1 className={s.footer__logo}>LOGO</h1>
                    <p className={s.footer__subtext}>2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;