import authApi from '@/api/mock/dummyAuthLogin';
import hotelSearchApi from '@/api/mock/hotelSearchApi';
import admin from '@/api/mock/adminQuery';
import authReducer from './reducers/authSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [hotelSearchApi.reducerPath]: hotelSearchApi.reducer,
        [admin.reducerPath]: admin.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(hotelSearchApi.middleware)
        .concat(admin.middleware)
});

export default store;