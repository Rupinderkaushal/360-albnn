import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isVisible:false,
}

const hamSlice = createSlice({
    name:'ham',
    initialState,
    reducers:{
        hamHandler :(state) =>{
            state.isVisible =  !state.isVisible;
            console.log('###### isActive #######',state)
        }
    }
});

export const {hamHandler}= hamSlice.actions;
export default hamSlice.reducer;