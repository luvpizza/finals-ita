import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        clearToken: (state) => {
            state.token = '';
            localStorage.removeItem('token')
        }
    }
});

export const {
    setToken,
    clearToken
} = authSlice.actions;

export default authSlice.reducer;