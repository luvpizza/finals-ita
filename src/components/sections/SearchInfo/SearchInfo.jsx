import React from 'react';
import s from "./SearchInfo.module.scss"
const SearchInfo = () => {
    return (
        <section className={s.search__info}>
            <div className={s.container}>
                <h1 className={s.info__title}>текст текст текст</h1>
                <div className={s.info__grid}>
                    <div className={s.info__card}>card</div>
                    <div className={s.info__card}>card</div>
                    <div className={s.info__card}>card</div>
                    <div className={s.info__card}>card</div>
                </div>
            </div>
        </section>
    );
};

export default SearchInfo;