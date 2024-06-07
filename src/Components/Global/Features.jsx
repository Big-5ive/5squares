import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data: [],
    Cart: ["Hello World"],
    loggedInUser: {},
    loggedInUserToken: " ",
    allStates: []
};

const ProductState = createSlice({
    name:"product",
    initialState,
    reducers:{
        DB:(state, {payload})=>{
            state.data = payload
            console.log(payload);
        },
        getAllStates :(state, {payload})=>{
            state.allStates = payload
            console.log(payload)
        }
    }
})

export const {DB, getAllStates} = ProductState.actions;
export default ProductState.reducer;