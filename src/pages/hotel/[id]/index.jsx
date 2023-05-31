import React, {useEffect} from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import heartSVG from '@/assets/icons/heart.svg'
import {mockGetHotel} from '@/api/mock/mockGetHotel';
import {useRouter} from 'next/router';
import {useState} from 'react';

import s from './hotel.module.scss'
import NotFound from '@/components/sections/404/404';
const HotelByID = () => {
    const router = useRouter();
    const {id} = router.query;

    const [hotelData,
        setHotelData] = useState(null);
    const [isLoading,
        setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            mockGetHotel(id).then(res => {
                console.log(res)
                setHotelData(res)
            }).catch(error => {
                console.error(error);
                setHotelData(null)
            }). finally(() => {
                setIsLoading(false)
            })
        }
    }, [id]);
    return (
        <div>
            <Header/>
            <div className={s.hotel}>
                <div className={s.hotel__container}>
                    {isLoading
                        ? "Loading..."
                        : ""}
                    {!isLoading && !hotelData && <NotFound/>}
                    {!isLoading && hotelData && 
                    <div className={s.hotel__main}>
                        <div className={s.hotel__credentials}>
                            <h1 className={s.hotel__title}>{hotelData.title ? hotelData.title : "Безымянный отель"}</h1>
                            <h3 className={s.hotel__location}>{hotelData.location.full ? hotelData.location.full : "Адрес не указан"}</h3>
                        </div>
                       
                    </div>}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HotelByID;