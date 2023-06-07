import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken, setToken} from '@/store/reducers/authSlice';
import Link from 'next/link';

import s from './Header.module.scss'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter()
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setToken(localStorage.getItem('token') || ''))
    }, []);

    const handleLogout = () => {
        dispatch(clearToken());
        router.push("/")
    };
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href="/search" className={s.logo}>LOGO</Link>
                {token
                    ?  <ProfileDropdown logout={handleLogout}/>
                    : <Link href="/login" className={s.to__login}>Войти</Link>}

            </div>
        </header>
    );
};

export default Header;