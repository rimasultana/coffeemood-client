import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const GoogleLoginPage = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Welcome ${user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-3 w-full py-3 border border-[#6D4C41] rounded-xl hover:bg-[#6D4C41] hover:text-[#FFEBCD] transition-all duration-300 shadow-md font-semibold"
      >
        <FcGoogle size={28} />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLoginPage;
