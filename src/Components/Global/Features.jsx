import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data: [],
    Cart: ["Hello World"]
};

const ProductState = createSlice({
    name:"product",
    initialState,
    reducers:{
        DB:(state, {payload})=>{
            console.log(payload);
            state.data = payload
        }
    }
})

export const {DB} = ProductState.actions;
export default ProductState.reducer;