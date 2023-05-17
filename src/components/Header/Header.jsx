import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {useSelector} from "react-redux"
import Link from 'next/link';
const Header = () => {
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <header className={s.header}>
            <div className={s.container}>
                <h2 className={s.logo}>LOGO</h2>
                <Link href="/login" className={s.to__login}>Войти</Link>
                {/* {isLoggedIn ? <p>logged</p> : <p>unlogged</p>} */}
            </div>
        </header>
    );
};

export default Header;