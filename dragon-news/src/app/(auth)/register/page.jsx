"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      image: data.photo
    });

    console.log(res);
    if (error) {
      console.error("SIGNUP ERROR:", error);
    }
    if(res){
      router.push("/");
    }
  };

  return (
    <div className="bg-slate-100 container mx-auto flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-xl">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500"> this field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Type Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500"> this field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Type URL"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <span className="text-red-500"> this field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Type password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500"> this field is required</span>
            )}
          </fieldset>
          <button className="btn btn-error w-full" type="submit">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 underline">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
