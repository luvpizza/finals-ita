import RouteButton from '@/components/UI/buttons/RouteButton/RouteButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Find.module.scss'
const Find = () => {
    const router = useRouter()
    return (
        <section className={s.find}>
            <Link href={'/search'}><RouteButton className={s.hero_btn}>Найти отель</RouteButton></Link>
        </section>
    );
};

export default Find;