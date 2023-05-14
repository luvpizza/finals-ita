import ProsCard from '@/components/ProsCard/ProsCard';
import React from 'react';
import s from "./Pros.module.scss"
import map from "../../../assets/icons/map.svg"
import loupe from "../../../assets/icons/loupe.svg"
const Pros = () => {
    return (
        <section className={s.pros}>
            <div className={s.container}>
                <h2 className={s.pros__title}>Наши возможности</h2>
                <div className={s.pros__list}>
                    <ProsCard title={"Бронируйте отели из любой точки мира"} iconURL={map}>%name%
                        предлагает возможность онлайн-бронирования номеров в отелях по выгодным ценам.
                        Читайте отзывы, смотрите фото и сохраняйте любимые отели в избранном.</ProsCard>
                    <ProsCard title={"Изучайте отзывы и выбирайте лучшие отели"} iconURL={loupe}>%name%
                        предлагает возможность онлайн-бронирования номеров в отелях по выгодным ценам.
                        Читайте отзывы, смотрите фото и сохраняйте любимые отели в избранном.</ProsCard>
                    <ProsCard title={"Изучайте отзывы и выбирайте лучшие отели"} iconURL={map}>%name%
                        предлагает возможность онлайн-бронирования номеров в отелях по выгодным ценам.
                        Читайте отзывы, смотрите фото и сохраняйте любимые отели в избранном.</ProsCard>
                </div>
            </div>
        </section>
    );
};

export default Pros;