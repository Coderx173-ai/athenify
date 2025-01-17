/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    let valid = true;

    if (!email) {
      validationErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
      valid = false;
    }

    if (!password) {
      validationErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(validationErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      // For now, we'll just log the values
      console.log("Form submitted:", { email, password });

      // Here you could redirect or show a success message
      // router.push('/somepage');
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#06242E] to-[#053D4C] flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm"
      >
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Login
          </h1>
          <hr />
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full text-black"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full text-black"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-4">
          <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
            <input
              type="checkbox"
              id="rememberMeCheckbox"
              name="rememberMe"
              className="mr-2"
            />
            <span className="text-xs font-semibold">Remember me?</span>
          </p>
        </div>

        <button
          type="submit"
          className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
        >
          Login
        </button>
        <hr />
        <div className="flex justify-center items-center mt-4">
          <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
            <span className="ml-2">
              You don't have an account?
              <a href="#" className="text-xs ml-2 text-blue-500 font-semibold">
                Register now &rarr;
              </a>
            </span>
          </p>
        </div>
        <div className="pt-6 text-base font-semibold leading-7">
          <p className="font-sans text-red-500 text-md hover:text-red-800">
            <a href="/" className="absolute">
              &larr; Home
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
