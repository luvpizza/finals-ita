import authApi from '@/api/mock/dummyAuthLogin';
import hotelSearchApi from '@/api/mock/hotelSearchApi';
import authReducer from './reducers/authSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [hotelSearchApi.reducerPath]: hotelSearchApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(hotelSearchApi.middleware)
});

export default store;