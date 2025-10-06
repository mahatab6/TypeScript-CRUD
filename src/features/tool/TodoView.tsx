import React, { useEffect } from 'react'
import { store } from '../../app/store'

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteProduct, fetchProduct } from './todoSlice';

type items = {
    id: string | number;
    name:string;
    price: number;
    category: string;
}

export default function TodoView() {

    const { todos, isLoading, error } = useAppSelector((store:any) => store.todoR)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    

  return (
    <div>
        <h1>Todo view</h1>
        <div>
            {
                todos.map((item: items)=> {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                            <div>
                                <button onClick={() => dispatch(deleteProduct(item.id))}>Delete</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
