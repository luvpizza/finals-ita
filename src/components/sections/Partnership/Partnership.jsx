import React from 'react';
import s from "./Partnership.module.scss";
const Partnership = () => {
    return (
        <section className={s.partnership}>
            <div className={s.container}>
                <div className={s.partnership__grid}>
                    <div className={s.partnership__description}>
                        <h1 className={s.partnership__title}>Станьте нашими партнерами</h1>
                        <p className={s.partnership__text}>Регистрируйте свой отель в нашей системе и получите доступ
                        к обширной базе клиентов нашего сервиса</p>
                    </div>
                    <div className={s.partnership__img}>
                        123
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnership;