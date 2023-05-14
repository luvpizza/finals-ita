import RouteButton from '@/components/UI/buttons/RouteButton/RouteButton';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Find.module.scss'
const Find = () => {
    const router = useRouter()
    return (
        <section className={s.find}>
            <RouteButton className={s.hero_btn} onClick={()=>{router.push('/search')}}>Найти отель</RouteButton>
        </section>
    );
};

export default Find;