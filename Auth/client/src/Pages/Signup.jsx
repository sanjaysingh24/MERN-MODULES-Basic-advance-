import React, { useState ,useEffect} from "react";
import { Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { registervalidation } from "../utils/validation/formvalidation";
import { useSignUpMutation } from "../store/slice/api";
const Signup = () => {
  // signUp
  const[adduser,{isloading,error}] = useSignUpMutation();

const {handleSubmit,setValue,register,watch,formState:{errors}}=useForm({
  resolver:yupResolver(registervalidation),mode:"onBlur"
});
  const [preview, setPreview] = useState(null);
  const watchImage =watch("profileImage");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };



  useEffect(() => {
    if (watchImage && watchImage instanceof File) {
      const url = URL.createObjectURL(watchImage);
      setPreview(url);

      // cleanup when component unmounts or file changes
      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [watchImage]);
    const onImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setValue("profileImage", file, { shouldValidate: true, shouldDirty: true });
      // preview handled by watch + effect
    } else {
      setValue("profileImage", null, { shouldValidate: true });
    }
  };
const onSubmit=async(data)=>{
try{

 const formData = new FormData();
    
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("file", data.profileImage); // 👈 KEY same होना चाहिए multer.single('file') में

  const submit = await adduser(formData);

    
}catch(err){
  console.log(err);
}
}
  return (
  <div className="min-h-screen flex justify-center items-center bg-slate-100 p-3">
  <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-6">
    <h3 className="text-xl font-semibold text-center text-slate-800 mb-4">
      Create Account
    </h3>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <label htmlFor="profileImage" className="cursor-pointer">
          <img
            src={
              preview ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile Preview"
            className="w-24 h-24 rounded-full shadow-md object-cover hover:scale-105 transition"
          />
        </label>

        <input
          type="file"
          id="profileImage"
          accept="image/*"
          className="hidden"
          {...register("profileImage")}
          onChange={onImageChange}
        />

        {errors.profileImage && (
          <p className="text-red-600 text-xs mt-1">
            {errors.profileImage.message}
          </p>
        )}
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          {...register("name")}
          autoComplete="name"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />


        
        {errors.name && (
          <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
        autoComplete="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          placeholder="Enter password"
          autoComplete="new-password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Re-enter password"
          autoComplete="new-password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md hover:scale-[1.02] transform transition"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 font-medium hover:underline">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>


  );
};

export default Signup;
