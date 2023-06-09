import React, {useEffect, useState} from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import s from './profile.module.scss'
import profileIcon from '@/assets/icons/profile-icon.svg'
import ProfileHistory from '@/components/ProfileHistory/ProfileHistory';
import { mockGetBookmarks } from '@/api/mock/mockGetBookmarks';
import BookmarkContainer from '@/components/BookmarkContainer/BookmarkContainer';

const Profile = () => {
    // change mock to real API!
    const [userBookmarks, setUserBookmarks] = useState([])
    const [navSelected,
        setNavSelected] = useState(1)
    const navElements = [
        {
            name: "Избранное",
            id: 1
        }, {
            name: "История",
            id: 2
        }, {
            name: "Отзывы",
            id: 3
        }
    ]

    
    useEffect(()=>{
        mockGetBookmarks().then(res => setUserBookmarks(res))
    },[])

    return (
        <div>
            <Header/>
            <section className={s.profile}>
                <div className={s.container}>
                    <div className={s.profile__container}>
                        <div className={s.profile__navbar}>
                            <h3 className={s.navbar__title}>Профиль</h3>
                            <div className={s.navbar__btns}>
                                {navElements.map((item) => <button
                                    key={item.id}
                                    className={`${item.id === navSelected
                                    ? s.active
                                    : ""} ${s.navbar__btn}`}
                                    onClick={() => setNavSelected(item.id)}>{item.name}</button>)}
                            </div>
                        </div>

                        <div className={s.profile__content}>
                            <div className={s.profile__credentials}>
                                <div className={s.credentials__icon}>
                                    {<img src={profileIcon.src}></img>}
                                </div>
                                <h1 className={s.credentials__name}>Али Аюпов</h1>
                            </div>
                            {/* content */}
                            {navSelected === 1 ? <BookmarkContainer bookmarks={userBookmarks}/> : navSelected === 2 ? <ProfileHistory/> : ""}
                            {/* content */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    );
};

export default Profile;