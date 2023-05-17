import Header from '@/components/Header/Header';
import s from './profile.module.scss'
import React from 'react';
import Footer from '@/components/Footer/Footer';

const Profile = () => {
    // tokencheck, role check
    return (
        <div>
            <Header/>
            <section className={s.profile}>
                <div className={s.container}>
                    
                </div>
            </section>
            <Footer/>
        </div>

    );
};

export default Profile;