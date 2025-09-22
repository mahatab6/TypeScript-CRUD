import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";


type todo = {
    id: number;
    name: string;
}

type TodoState = {
    todos : todo[];
    isLoading: boolean;
    error: undefined | string | null;
}


const initialState:TodoState ={
    todos: [],
    isLoading: false,
    error: null,
}

export const fetchProduct = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const res = await axios.get('http://localhost:3000/products');
        return res.data;
    }
);

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) =>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProduct.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.todos = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) =>{
                state.error = action.error.message
            })

         
    },
})

export default todoSlice.reducer;