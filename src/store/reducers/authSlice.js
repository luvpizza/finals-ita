import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    authState: false,
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
            state.authState = true;
        },
        clearToken: (state) => {
            state.token = '';
            localStorage.removeItem('token');
            state.authState = false;
        }
    }
});

export const {
    setToken,
    clearToken
} = authSlice.actions;

export default authSlice.reducer;