import React, {useEffect, useState} from 'react';
import {mockGetSearchResults} from '@/api/mock/mockGetSearchResults';
import {formikSearchBar} from '@/config/formik/formikSearchBar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ResultsBanner from '@/components/sections/ResultsBanner/ResultsBanner';
import ResultsMap from '@/components/UI/maps/ResultsMap/ResultsMap';
import SearchBar from '@/components/SearchBar/SearchBar';
import SearchResult from '@/components/SearchResult/SearchResult';

import s from "./results.module.scss"
const Results = ({ city = "Бишкек" }) => {
    // mock
    const [resultHotels,
        setResultHotels] = useState([]);
    const [mapCenter,
        setMapCenter] = useState([0, 0]);
    const [isDataFetched,
        setIsDataFetched] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            mockGetSearchResults().then((res) => {
                console.log(res);
                setResultHotels(res);
                setMapCenter(res[0].location.lon_lat);
                setIsDataFetched(true);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);
    // mock end

    return (
        <div>
            <Header/>
            <ResultsBanner city={city}/>
            <section className={s.results}>
                <div className={s.container}>
                    <div className={s.results__grid}>
                        <div className={s.results__list}>
                            <SearchBar className={s.results__sb}/> {resultHotels.length
                                ? resultHotels.map((hotel) =>< SearchResult key = {
                                    hotel.id
                                }
                                id = {
                                    hotel.id
                                }
                                title = {
                                    hotel.title
                                }
                                mainImageURL = {
                                    hotel.photos_url.length
                                        ? hotel.photos_url[0]
                                        : null
                                }
                                rating = {
                                    hotel.reviews.rating
                                }
                                reviewCount = {
                                    hotel.reviews.count
                                }
                                city = {
                                    city
                                }
                                price = {
                                    hotel.price
                                } />)
                                : "Результатов нет"
}
                        </div>
                        {isDataFetched && (<ResultsMap
                            className={s.results__map}
                            hotels={resultHotels}
                            mapCenter={mapCenter}/>)}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    );
};

export default Results;
