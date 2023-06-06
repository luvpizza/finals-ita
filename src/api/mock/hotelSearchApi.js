import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hotelSearchApi = createApi({
  reducerPath: 'hotelSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: () => '/results?id=274',
    }),
  }),
});

export const { useGetSearchResultsQuery } = hotelSearchApi;

export default hotelSearchApi;