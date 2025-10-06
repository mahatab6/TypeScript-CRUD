import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";


type todo = {
    id: number | string;
    name: string;
    productName: string;
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

export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (id: number | string) => {
        const res = await axios.delete(`http://localhost:3000/products/${id}`)
        return id;
    }
)

export const createProduct = createAsyncThunk<todo, todo>(
  "product/createProduct",
  async (newProduct) => {
    const res = await axios.post("http://localhost:3000/products", newProduct);
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
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            })
            .addCase(createProduct.fulfilled, (state, action: PayloadAction<todo>) => {
                state.todos.push(action.payload)
            } )

         
    },
})

export default todoSlice.reducer;