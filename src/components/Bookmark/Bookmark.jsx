import React from 'react';
import Link from 'next/link';
import heartIcon from "@/assets/icons/heart.svg"

import s from "./Bookmark.module.scss"
const Bookmark = ({title, url, photo, price}) => {
    return (
        <div className={s.bookmark}>
            <div className={s.bookmark__icon}>
                <img src={photo} alt=""/>
            </div>
            <div className={s.bookmark__details}>
                <h3 className={s.bookmark__title}>{title}</h3>
                <div className={s.bookmark__pricing}>
                    <h1 className={s.bookmark__price}>{price} сом</h1>
                    <p className={s.pricing__subtext}>цена за одну ночь</p>
                </div>
                    <Link href={`/hotels/${url}`} className={s.bookmark__link}>Детали</Link>
            </div>
        </div>
    );
};

export default Bookmark;