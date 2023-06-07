import React from 'react';
import s from "./SearchInfo.module.scss"
const SearchInfo = () => {
    return (
        <section className={s.search__info}>
            <div className={s.container}>
                <h1 className={s.info__title}>Популярные направления</h1>
                <div className={s.info__grid}>
                    <div className={s.info__card}>
                        <h2>Бишкек</h2>
                    </div>
                    <div className={s.info__card}>
                        <h2>Бишкек</h2>
                    </div>
                    <div className={s.info__card}>
                        <h2>Бишкек</h2>
                    </div>
                    <div className={s.info__card}>=
                        <h2>Бишкек</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchInfo;