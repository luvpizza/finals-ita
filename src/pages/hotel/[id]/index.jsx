import React, {useEffect} from 'react';
import {mockGetHotel} from '@/api/mock/mockGetHotel';
import {useRouter} from 'next/router';
import {useState} from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import NotFound from '@/components/sections/404/404';
import Link from 'next/link';
import HotelMap from '@/components/UI/maps/HotelMap/HotelMap';
import HotelReview from '@/components/HotelReview/HotelReview';

import s from './hotel.module.scss'
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
                    {!isLoading && hotelData && <div className={s.hotel__card}>

                        <div className={s.hotel__main}>
                            <div className={s.hotel__credentials}>
                                <h1 className={s.hotel__title}>{hotelData.title
                                        ? hotelData.title
                                        : "Безымянный отель"}</h1>
                                <h3 className={s.hotel__location}>{hotelData.location.full
                                        ? hotelData.location.full
                                        : "Адрес не указан"}</h3>
                            </div>
                            <div className={s.hotel__rating}>

                                <p
                                    className={`${s.rating} ${hotelData.rating.overall < 3.35
                                    ? s.rating__yellow
                                    : s.rating__green}`}>{hotelData.rating.overall}</p>
                                <Link href={"#reviews"} className={s.reviews__link}>{hotelData.rating.reviews.length && hotelData.rating.reviews
                                        ? `Посмотреть отзывы (${hotelData.rating.reviews.length})`
                                        : "Нет отзывов"}</Link>
                            </div>
                        </div>
                        {hotelData.photos_url && hotelData.photos_url.length
                            ? <div className={s.hotel__images}>
                                    <div className={s.images__main}>
                                        <div className={s.hotel__image}>
                                            <img src={hotelData.photos_url[2]}/>
                                        </div>
                                    </div>
                                    <div className={s.images__rest}>
                                        <div className={s.hotel__image}>
                                            <img src={hotelData.photos_url[0]}/>
                                        </div>
                                        <div className={s.hotel__image}>
                                            <img src={hotelData.photos_url[0]}/>
                                        </div>
                                    </div>
                                </div>
                            : <div className={s.hotel__noimage}>
                                <p>Фото отсутствует</p>
                            </div>}

                        <div className={s.hotel__about}>
                            <div className={s.description}>
                                <h2 className={s.description__title}>Об отеле</h2>
                                <p className={s.description__text} id="test">Здесь созданы все условия для комфортного
                                    проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в
                                    номерах, микроволновая печь, сейф, отопление, терраса, мини-бар. <br/><br/> В гостинице
                                    около 178 номеров — можно выбрать любой понравившийся и узнать подробнее, что в
                                    нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им
                                    будут рады!<br/><br/> В гостинице есть ресторан, бар, тренажёрный зал, сауна,
                                    конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите
                                    отдохнуть у бассейна — он тут тоже есть. Причём крытый, открытый. Есть
                                    возможность взять напрокат машину.<br/><br/> У каждого гостя будет доступ в интернет, вы
                                    сможете выложить фотографии, отправить файл или позвонить родным по видео.
                                    Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать
                                    нужно до 12:00. Лифт внутри есть. В гостинице есть и удобства для людей с
                                    ограниченными возможностями.<br/><br/> Если вы на машине, можете оставить её на парковке.
                                    Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой
                                    помощью обращайтесь на ресепшн.<br/><br/> К вашим услугам: химчистка, прачечная,
                                    обслуживание номеров, консьерж-сервис, камера хранения, ускоренная регистрация
                                    заезда/отъезда.</p>
                            </div>
                            <div className={s.hotel__map}>
                                <h2 className={s.map__title}>На карте</h2>
                                <h3 className={s.hotel__location}>{hotelData.location.full
                                        ? hotelData.location.full
                                        : "Адрес не указан"}</h3>
                                <div className={s.map__mapgl}>
                                    <HotelMap hotel={hotelData} mapCenter={hotelData.location.lon_lat}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.hotel__features}>
                            <h2 className={s.features__title}>Услуги и удобства</h2>
                            <div className={s.features__list}>
                                {hotelData.features && hotelData.features.length ? 
                                hotelData.features.map(item => <ul key={item}>• {item}</ul>)    
                            : "Информация о предоставленных услугах не найдена"}
                            </div>
                        </div>
                        <div className={s.hotel__reviews} id="reviews">
                            <h2 className={s.reviews__title}>Отзывы</h2>
                            {hotelData.rating.reviews && hotelData.rating.reviews.length ? 
                            hotelData.rating.reviews.map((item,idx) => 
                            <HotelReview key={idx} rating={item.rating} reviewName={item.firstName} reviewText={item.review_text}/>) : "Отзывов не найдено"} 
                            <HotelReview rating={4} reviewName={"Жанболот"} reviewText={"Приятные цены и хороший сервис. Номер отличного качества. Вернусь ещё!"}/>
                        </div>
                    </div>
                    
}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HotelByID;