import Link from 'next/link';
import React from 'react';

import s from "./SearchResult.module.scss"

const SearchResult = ({
    id,
    title,
    price,
    mainImageURL,
    rating,
    reviewCount,
    city
}) => {
    console.log(mainImageURL);
    return (
        <div className={s.result__hotel}>
            <div className={s.hotel__img}>
                <img src={mainImageURL} alt="no pic"/>
            </div>
            <div className={s.hotel__description}>
                <h2 className={s.hotel__title}>{title}</h2>
                <div className={s.hotel__reviews}>
                    <p
                        className={`${s.rating} ${rating < 3.35
                        ? s.rating__yellow
                        : s.rating__green}`}>{rating}</p>
                    <span>{reviewCount} {"отзыв"}</span>
                    <span className={s.subtext__grey}>-а/-ов</span>
                </div>
                <h2 className={s.hotel__location}>{city}</h2>
            </div>
            <div className={s.hotel__pricing}>
                <h2 className={s.hotel__price}>{price} сом</h2>
                <Link href={`/hotel/${id }`} className={s.hotel__btn_choose}>Выбрать</Link>
            </div>
        </div>
    );
};

export default SearchResult;