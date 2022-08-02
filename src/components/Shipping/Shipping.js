import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Shipping</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("name")}
          placeholder="Name"
        />
        <input
          defaultValue={user.email}
          {...register("email")}
          placeholder="Email"
        />
        <input {...register("address")} placeholder="Address" />
        <input {...register("city")} placeholder="City" />
        <input {...register("phone")} placeholder="Phone Number" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
