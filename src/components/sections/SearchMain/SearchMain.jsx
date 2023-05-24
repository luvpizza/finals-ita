import SearchBar from '@/components/SearchBar/SearchBar';
import { formikSearchBar } from '@/config/formik/formikSearchBar';
import React from 'react';
import s from './SearchMain.module.scss'

const SearchMain = () => {
    return (
        <section className={s.search}>
            <h1 className={s.search__title}>Найдите и забронируйте номер в отеле</h1>
            <SearchBar/>
        </section>
    );
};

export default SearchMain;