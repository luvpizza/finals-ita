import SearchBar from '@/components/SearchBar/SearchBar';
import { formikSearchBar } from '@/config/formik/formikSearchBar';
import React from 'react';
import s from './SearchMain.module.scss'

const SearchMain = () => {
    return (
        <section className={s.search}>
            <h1 className={s.search__title}>йоу йоу йоу йоу</h1>
            <SearchBar config={formikSearchBar}/>
        </section>
    );
};

export default SearchMain;