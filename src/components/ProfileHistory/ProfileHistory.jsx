import React, { useEffect, useState } from 'react';
import s from './ProfileHistory.module.scss'

const ProfileHistory = (bookings) => {
    const [num, setNum] = useState();
    useEffect(()=>{
        setNum(Math.random())
    },[])
    return (
        <section className={s.history}>
            <h1 className={s.history__title}>Ваша история</h1>
            {num}
        </section>
    );
};

export default ProfileHistory;