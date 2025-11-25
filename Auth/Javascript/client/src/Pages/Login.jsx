import React, { useState } from "react";
import { Link } from "react-router-dom";
//login validation for form validation to prevent unnesscerry data submission
import { loginvalidation } from "../utils/validation/formvalidation";
import { useForm } from "react-hook-form";
//yup resolver for react hook form for validation
import { yupResolver } from "@hookform/resolvers/yup";
const Login = () => {
  const{handleSubmit,register,formState:{errors}}=useForm({
    resolver:yupResolver(loginvalidation),mode:"onBlur"
  });
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
   
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4">
      <div
        className="w-full max-w-md bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-8"
        style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.12)" }}
      >
        <div className="flex items-center justify-center mb-4">
          {/* small emblem */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            S
          </div>
        </div>

        <h3 className="text-center text-2xl font-semibold text-slate-800 mb-6">
          Welcome back
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@domain.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-800 placeholder-slate-400
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-800 placeholder-slate-400
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md hover:scale-[1.02] transform transition"
          >
            {/* simple lock svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z"
              />
            </svg>
            Login
          </button>

          <p className="text-center text-sm text-slate-600 mt-1">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          By continuing, you agree to our <span className="underline">Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
