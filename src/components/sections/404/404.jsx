import Link from 'next/link';
import React from 'react';

import s from "./404.module.scss"
const NotFound = () => {
    return (
        <div className={s.not_found}>
            <h1 className={s.nf__errorcode}>404</h1>
            <p className={s.nf__description}>Запрашиваемое содержимое не найдено</p>
            <Link href={"/search"} className={s.nf__link}>Перейти к странице поиска</Link>
        </div>
    );
};

export default NotFound;