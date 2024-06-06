import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data: [],
    Cart: ["Hello World"],
    loggedInUser: {},
    loggedInUserToken: " ",
};

const ProductState = createSlice({
    name:"product",
    initialState,
    reducers:{
        DB:(state, {payload})=>{
            state.data = payload
            console.log(payload);
        }
    }
})

export const {DB} = ProductState.actions;
export default ProductState.reducer;