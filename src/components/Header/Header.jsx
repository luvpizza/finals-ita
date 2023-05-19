import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import s from './Header.module.scss'
const Header = () => {
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href="/search" className={s.logo}>LOGO</Link>
                <Link href="/login" className={s.to__login}>Войти</Link>
                {/* {isLoggedIn ? <p>logged</p> : <p>unlogged</p>} */}
            </div>
        </header>
    );
};

export default Header;