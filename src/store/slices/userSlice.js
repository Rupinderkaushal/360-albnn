import { createSlice } from "@reduxjs/toolkit"; 

const initialState={
    filter:[],
};

const userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addFilter:(state,action)=>{
            const {payload} = action;
            state.filter.push(payload)
        },
    }
})




export const {addFilter} = userslice.actions
export default userslice.reducer