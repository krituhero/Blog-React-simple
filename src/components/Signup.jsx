import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-24 mb-20 px-4">
        <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-black text-3xl font-semibold mb-2">
            Create an account
          </h1>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              id="firstName"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              id="emailOrNumber"
              name="emailOrNumber"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
              placeholder="Email or Phone Number"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              id="passWordBox"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white mt-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>

          <div className="mt-4">
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:shadow-md transition"
            >
              <FcGoogle className="mr-2 text-lg" />
              Sign up with Google
            </button>
          </div>

          <div className="flex justify-center mt-6 text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-blue-600 underline underline-offset-4"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
