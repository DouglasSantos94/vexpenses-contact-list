import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Address } from "..";

type Inputs = {
  name: string,
  addressses: Address[],
  phoneNumbers: string[]
}

export const AddContact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input defaultValue="Nome" {...register("name")} />

        <input type="submit" />
      </label>
    </form>
  );
};
