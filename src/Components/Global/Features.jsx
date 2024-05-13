import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data: [],
};

const ProductState = createSlice({
    name:"product",
    initialState,
    reducers:{
        DB:(state, {payload})=>{
            state.data = payload
        }
    }
})

export const {DB} = ProductState.actions;
export default ProductState.reducer;