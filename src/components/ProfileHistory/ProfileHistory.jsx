import React, { useEffect, useState } from 'react';
import s from './ProfileHistory.module.scss'

const ProfileHistory = (bookings) => {
    return (
        <section className={s.history}>
            <h1 className={s.history__title}>Ваша история</h1>
        </section>
    );
};

export default ProfileHistory;