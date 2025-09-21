import { createSlice } from "@reduxjs/toolkit";


type todo = {
    id: number;
    name: string;
}

type TodoState = {
    todos : todo[];
}


const initialState:TodoState ={
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{}
    
})