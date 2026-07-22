import { Mail, Lock, Eye } from "lucide-react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";
const LoginForm = () => {
    const navigate = useNavigate();
    let {setLoggedIn,registeredUser,setRegisteredUser}=useContext(MyStore);
   const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();
const formSubmit =(data)=>{

    let user = registeredUser.find((val)=>{
        return val.email===data.email && val.password===data.password;
    })

    if(!user){
        alert("User not found or invalid cred");
        return;
    }
    
   setLoggedIn(user);
   localStorage.setItem("loggedInUser",JSON.stringify(user));
   alert("user LoggedSuccessFully");
   reset();
   navigate("/main");
}
  return (

    <div className="w-full max-w-md bg-[#111] rounded-3xl p-10 border border-zinc-800 shadow-2xl">

      <h1 className="text-5xl font-bold">
        Sign in
      </h1>

      <p className="text-zinc-500 mt-3">
        Enter your credentials to continue
      </p>
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
      <div className="mt-10 space-y-6">

        <div className="relative">

          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={20}
          />

          <input
           {...register("email",{
            required:"email is required",
           })}
            type="email"
            placeholder="Email address"
            className="w-full bg-[#1D1D1D] rounded-xl pl-12 pr-4 py-4 outline-none border border-zinc-700"
          />
     {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
        </div>

        <div className="relative">

          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={20}
          />

          <input
            {...register("password",{
                required:"password is required",
                minLength:{
                    value:6,
                    message: "Minimum 6 chracters is requried"
                }
            })}
            type="password"
            placeholder="Password"
            className="w-full bg-[#1D1D1D] rounded-xl pl-12 pr-12 py-4 outline-none border border-zinc-700"
          />

          {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          <Eye
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={20}
          />

        </div>

        <button className="w-full bg-lime-400 hover:bg-lime-300 transition py-4 rounded-xl text-black font-bold text-xl">
          Sign in →
        </button>

      </div>

      <p className="text-center mt-8 text-zinc-500">
        Don't have an account?{" "}
        <span onClick={()=> navigate("/register")} className="text-lime-400 font-semibold cursor-pointer">
          Create one
        </span>
      </p>
</form>
    </div>
   
  );
};

export default LoginForm;