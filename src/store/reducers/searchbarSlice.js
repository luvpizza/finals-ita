import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name: 'searchbar',
    initialState: {
        destination: "",
        dates: [],
        numberOfPeople: 1
    },
    reducers: {
        setSearchBar: (state) => {
            state = {...action.payload};

        },
        clearSearchBar: (state) => {
            state = {
                destination: "",
                dates: [],
                numberOfPeople: 1
            };
        }
    }
});

export const {
    login,
    logout
} = authSlice.actions;
export default authSlice.reducer;