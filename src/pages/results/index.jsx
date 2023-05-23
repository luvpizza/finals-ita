import React, { useEffect, useState } from 'react';
import { mockGetSearchResults } from '@/api/mock/mockGetSearchResults';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ResultsBanner from '@/components/sections/ResultsBanner/ResultsBanner';

import s from "./results.module.scss"
import ResultsMap from '@/components/UI/maps/ResultsMap/ResultsMap';

const Results = ({ city = "Бишкек" }) => {
    // mock
    const [resultHotels, setResultHotels] = useState([]);
    const [mapCenter, setMapCenter] = useState([0, 0]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        console.log("swag");
        if (typeof window !== 'undefined') {
            mockGetSearchResults()
                .then((res) => {
                    console.log(res);
                    setResultHotels(res);
                    setMapCenter(res[0].location.lon_lat);
                    setIsDataFetched(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);
    // mock end

    return (
        <>
            <Header />
            <ResultsBanner city={city} />
            <section className={s.results}>
                <div className={s.results__grid}>
                    <div className={s.results__list}>
                        results
                    </div>
                    {isDataFetched && (
                        <ResultsMap
                            className={s.results__map}
                            hotels={resultHotels}
                            mapCenter={mapCenter}
                        />
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Results;
