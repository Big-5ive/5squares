import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data: [],
    Cart: ["Hello World"],
    loggedInUser: {},
    loggedInUserToken: " ",
    userProfile: [],
};

const ProductState = createSlice({
    name:"product",
    initialState,
    reducers:{
        DB:(state, {payload})=>{
            state.data = payload
            console.log(payload);
        },
        userProfile : (state, {payload}) => {
            state.userProfile = payload
            console.log(payload)
        }
    }
})

export const {DB, getAllStates, userProfile} = ProductState.actions;
export default ProductState.reducer;