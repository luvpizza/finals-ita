import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import s from "./results.module.scss"
import ResultsBanner from '@/components/sections/ResultsBanner/ResultsBanner';

const Results = ({city = "Бишкек"}) => {
    return (
        <>
            <Header/>
                <ResultsBanner city={city}/>
                <section className={s.results}>

                </section>
            <Footer/>    
        </>
    );
};

export default Results;