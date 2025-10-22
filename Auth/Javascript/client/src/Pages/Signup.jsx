import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginvalidation} from "../utils/validation/loginvalidation";
import { userSignup } from "../services/userService";
const Signup = () => {

const {handleSubmit,setValue,register,watch,formState:{errors}}=useForm({
  resolver:yupResolver(loginvalidation),mode:"onBlur"
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
    let response = await userSignup(data);
    
}catch(err){
  console.log(err);
}
}
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "420px", borderRadius: "12px" }}
      >
        <h3 className="text-center mb-4">Create Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Profile Image */}
          <div className="text-center mb-3">
            <label htmlFor="profileImage" className="d-block">
              <img
                src={
                  preview ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile Preview"
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              style={{ display: "none" }}
              // onChange={handleImageChange}
              {...register("profileImage")}
               onChange={onImageChange}
            />
          </div>
        {errors.profileImage && <p className="text-danger custom-text">{errors.profileImage.message}</p>}
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              {...register("name")}
            />
            {errors.name && <p className="text-danger custom-text">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              {...register("email")}

            />
            {errors.email && <p className="text-danger custom-text">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
             {...register("password")}
            />
            {errors.password && <p className="text-danger custom-text">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              name="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p className="text-danger custom-text">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
