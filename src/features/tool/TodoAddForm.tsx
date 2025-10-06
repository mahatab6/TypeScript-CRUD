import { nanoid } from "nanoid";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { createProduct } from "./todoSlice";

type formData = {
  name: string;
  productName: string;
};

type todo = {
  id: string | number;
  name: string;
  productName: string;
};



export default function TodoAddForm() {
  const { register, handleSubmit } = useForm<formData>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<formData> = (data) => {
    const fulldata: todo = {
      ...data,
      id: nanoid(),
    };

    dispatch(createProduct(fulldata))

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name", {})} />
      <input
        type="text"
        placeholder="Product Name"
        {...register("productName", {})}
      />

      <input type="submit" />
    </form>
  );
}
