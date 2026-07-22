import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Register = () => {
  const navigate = useNavigate();
   
 let { registeredUser, setRegisteredUser }=useContext(MyStore)
 console.log(registeredUser);
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formSubmit=(data)=>{
    let arr=[...registeredUser , data]
    setRegisteredUser(arr);
    alert("user registered succeesfully");
    localStorage.setItem("registeredUsers",JSON.stringify(arr))
    reset();
    console.log(data);

  }
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        {/* Logo */}

        <div className="flex justify-center items-center gap-3 mb-8">

          <div className="bg-lime-400 p-2 rounded-xl">
            <Zap size={22} className="text-black" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </div>

        {/* Card */}

        <div className="bg-[#111111] border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8">

          <h2 className="text-3xl font-bold text-white">
            Create account
          </h2>

          <p className="text-zinc-400 mt-2">
            Join SkyMart and start shopping
          </p>

          <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5">

            {/* Name */}

            <div className="relative">

              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                {...register("fullName",{
                    required:"full name is required"
                })}
                type="text"
                placeholder="Full name"
                className="w-full h-14 bg-[#1D1D1D] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
              />
              {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}
            </div>

            {/* Email */}

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
               {...register("email",{
                    required:"email is required"
                })}
                type="email"
                placeholder="Email address"
                className="w-full h-14 bg-[#1D1D1D] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
              />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            {/* Password */}

            <div className="relative">

              

              <input   {...register("password",{
                    required:"password is required"
                })}
                type= "password"
                placeholder="Password (min 6 chars)"
                className="w-full h-14 bg-[#1D1D1D] border border-zinc-700 rounded-xl pl-12 pr-12 text-white outline-none focus:border-lime-400"
              />
             
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>

           

            {/* Button */}

            <button
              type="submit"
              className="w-full h-14 bg-lime-400 hover:bg-lime-300 rounded-xl text-black text-lg font-semibold transition"
            >
              Create Account →
            </button>

          </form>

          {/* Login */}

          <p className="text-center text-zinc-400 mt-8">

            Already have an account?{" "}

            <span
              onClick={() => navigate("/")}
              className="text-lime-400 font-semibold cursor-pointer"
            >
              Sign In
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;