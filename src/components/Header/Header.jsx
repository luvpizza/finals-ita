import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <h2 className={s.logo}>LOGO</h2>
            </div>
        </header>
    );
};

export default Header;