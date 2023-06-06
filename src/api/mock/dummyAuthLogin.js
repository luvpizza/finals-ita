import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiAuth = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: credentials
            })
        })
    })
});

export const {
    useLoginMutation
} = apiAuth;

export default apiAuth;