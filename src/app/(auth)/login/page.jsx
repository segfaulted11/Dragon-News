"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";


const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async(data) => {
    const {email,password} = data;
const { data:res, error } = await authClient.signIn.email({
    email:email,
    password: password,
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error)
  };
  return (
    <div className="bg-slate-100 container mx-auto flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-xl">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Type Email"
            {...register("email",{ required: true })}
            />
            {errors.email && <span className="text-red-500"> this field is required</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Type password"
              {...register("password",{required:true})}
            />
            {errors.password && <span className="text-red-500"> this field is required</span>}
          </fieldset>
          <button className="btn btn-error w-full">Log In</button>
        </form>
        <p>
          Dont have an account?{" "}
          <Link href="/register" className="text-red-500 underline">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LogInPage;