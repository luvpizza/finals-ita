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
                    <ProsCard title={"Бронируйте отели из любой точки мира"} iconURL={map}>LOGO
                        предлагает возможность онлайн-бронирования номеров в отелях по выгодным ценам.
                        Читайте отзывы, смотрите фото и сохраняйте любимые отели в избранном.</ProsCard>
                    <ProsCard title={"Изучайте отзывы и выбирайте лучшие номера"} iconURL={loupe}>
                        Смотрите, что другие пользователи пишут про отели в городах по всему миру и делайте
                        самый оптимальный выбор.
                    </ProsCard>
                    <ProsCard title={"Становитесь партнерами и сотрудничайте с нами"} iconURL={map}>LOGO
                        представляет площадку для менеджеров отелей - регистрируйтесь, добавляйте свой
                        отель в нашу систему и расширяйте бизнес.</ProsCard>
                </div>
            </div>
        </section>
    );
};

export default Pros;