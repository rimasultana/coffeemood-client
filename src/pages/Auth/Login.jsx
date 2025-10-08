import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import GoogleLogin from "../../share/GoogleLogin";
import GoogleLoginPage from "../../share/GoogleLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed. Please try again.");
      });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FFF8E1] to-[#FFE5B4] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white/20 rounded-full animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative bg-white/40 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-[#D7CCC8]/40 w-full max-w-md z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] text-center mb-8 drop-shadow-md">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-[#3E2723] mb-2 font-medium">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl border border-[#6D4C41]/50 focus:outline-none focus:ring-2 focus:ring-[#6D4C41]/40 shadow-md transition-all duration-300 hover:scale-105"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#3E2723] mb-2 font-medium">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-xl border border-[#6D4C41]/50 focus:outline-none focus:ring-2 focus:ring-[#6D4C41]/40 shadow-md transition-all duration-300 hover:scale-105"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#6D4C41] hover:bg-[#8D6E63] text-[#FFEBCD] font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <GoogleLoginPage />
        </div>

        <p className="text-center text-sm text-[#3E2723]/70 mt-6">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-[#6D4C41] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
