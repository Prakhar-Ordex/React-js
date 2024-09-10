import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // setError("data", { message: "not found" })
    console.log(data)
  };

  // console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="m-2">
        <label htmlFor="">username</label>
        <input type="text" name="username"{...register("username", { required: true, minLength:{value:3,message:"Min lenght 3"} })} />
        {errors.username && <p role="alert">{errors.username.message }</p>}
      </div>
      <div className="m-2">
      <label htmlFor="">password</label>
        <input type="password" name="password" {...register("password")} />
      </div>
      {errors.data && <p role="alert">{errors.data.message }</p>}
      <div className="m-2">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
