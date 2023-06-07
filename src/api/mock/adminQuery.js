import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const admin = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001'}),
    endpoints: (builder) => ({
        getHotelByID: builder.query({
            query: (id) => `hotels/${id}`
        }),
        getOwnerByID: builder.query({
            query: (id) => `owners/${id}`
        })
    })
});

export const {
    useGetHotelByIDQuery, useGetOwnerByIDQuery
} = admin;

export default admin;