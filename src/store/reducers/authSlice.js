import {createSlice} from "@reduxjs/toolkit"

const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: isLocalStorageAvailable
            ? !!localStorage.getItem('token')
            : false
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;

        },
        logout: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const {
    login,
    logout
} = authSlice.actions;
export default authSlice.reducer;