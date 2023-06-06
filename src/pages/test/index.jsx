import {useDispatch} from 'react-redux';
import {useGetSearchResultsQuery} from '@/api/mock/hotelSearchApi';
import Header from '@/components/Header/Header';
import React from 'react';
import ProfileDropdown from '@/components/ProfileDropdown/ProfileDropdown';
import { clearToken } from '@/store/reducers/authSlice';

const Test = () => {
    const dispatch = useDispatch();

    const {data: searchResults, isLoading: isSearchResultsLoading, isError: isSearchResultsError, refetch} = useGetSearchResultsQuery();
    

    return (
        <div>
            <Header/>
           
            <br/><br/><br/>
            <button disabled={isSearchResultsLoading}>
                Search
            </button>
            {isSearchResultsLoading && <p>Loading...</p>}
            {isSearchResultsError && <p>An error occurred while fetching the results.</p>}
            {searchResults && (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Test;
