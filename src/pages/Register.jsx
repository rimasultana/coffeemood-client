import React, { useState } from "react";
import { User, Mail, Lock, Camera } from "lucide-react";

const Register = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FFF8E1] to-[#FFE5B4] flex items-center justify-center overflow-hidden py-4">
      
      {/* Floating Bubbles */}
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

      {/* Card */}
      <div className="relative bg-white/40 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-[#D7CCC8]/40 w-full max-w-md z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] text-center mb-8 drop-shadow-md">
          Create Your Account
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <label className="block text-[#3E2723] mb-2 font-medium">Name</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#6D4C41]/50 focus:outline-none focus:ring-2 focus:ring-[#6D4C41]/40 shadow-md transition-all duration-300 hover:scale-105"
              />
              <User className="absolute left-4 top-3.5 text-[#6D4C41]/70" size={20} />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-[#3E2723] mb-2 font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#6D4C41]/50 focus:outline-none focus:ring-2 focus:ring-[#6D4C41]/40 shadow-md transition-all duration-300 hover:scale-105"
              />
              <Mail className="absolute left-4 top-3.5 text-[#6D4C41]/70" size={20} />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-[#3E2723] mb-2 font-medium">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#6D4C41]/50 focus:outline-none focus:ring-2 focus:ring-[#6D4C41]/40 shadow-md transition-all duration-300 hover:scale-105"
              />
              <Lock className="absolute left-4 top-3.5 text-[#6D4C41]/70" size={20} />
            </div>
          </div>

          {/* Profile Image Upload */}
          <div>
            <label className="block text-[#3E2723] mb-2 font-medium">Profile Image</label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#6D4C41]/50 rounded-xl p-4 cursor-pointer hover:border-[#8D6E63] transition-all duration-300 relative">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-full mb-2 shadow-lg"
                />
              ) : (
                <Camera className="mb-2 text-[#6D4C41]/70" size={28} />
              )}
              <p className="text-[#3E2723]/70 mb-2 text-sm text-center">
                Click to upload or drag your image
              </p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6D4C41] hover:bg-[#8D6E63] text-[#FFEBCD] font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-[#3E2723]/70 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-[#6D4C41] font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
