import React from 'react';
import Header from '@/components/Header/Header';
import SearchMain from '@/components/sections/SearchMain/SearchMain';
import SearchInfo from '@/components/sections/SearchInfo/SearchInfo';
import Footer from '@/components/Footer/Footer';

const Search = () => {
    return (
        <div>
            <Header/>
            <SearchMain/>
            <SearchInfo/>
            <Footer/>
        </div>
    );
};

export default Search;