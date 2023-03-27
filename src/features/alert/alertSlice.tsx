import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    message: '',
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openAlert: (state, action) => {
            console.log('openAlert', action.payload)
            state.open = true;
            state.message = action.payload;
        },
        closeAlert: (state) => {
            state.open = false;
            state.message = '';
        },
    },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
