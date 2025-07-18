"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gitUsername, setgitUsername] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        gitUsername,
        twitterUsername,
        password,
      });

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="flex justify-center items-center w-full min-h-screen py-14">
      <div className="flex flex-col justify-center items-center max-w-lg w-full px-5">
        <form
          action=""
          className="flex flex-col justify-start items-start w-full space-y-5 p-7 border border-neutral-700/40 rounded-md bg-neutral-800/60"
        >
          <h2 className="text-3xl self-center font-medium text-center  text-neutral-300">
            Create Account
          </h2>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="" className="text-lg text-neutral-400 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-md font-medium text-neutral-400 outline-hidden bg-neutral-800/70 w-full border border-neutral-700/40 px-3 py-1.5 md:py-1.5 rounded"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="" className="text-lg text-neutral-400 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-md font-medium text-neutral-400 outline-hidden bg-neutral-800/70 w-full border border-neutral-700/40 px-3 py-1.5 md:py-1.5 rounded"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="" className="text-lg text-neutral-400 font-medium">
              GitHub Username
            </label>
            <input
              type="text"
              name="gitUsername"
              id="gitUsername"
              placeholder="GitHub Username"
              value={gitUsername}
              onChange={(e) => setgitUsername(e.target.value)}
              className="text-md font-medium text-neutral-400 outline-hidden bg-neutral-800/70 w-full border border-neutral-700/40 px-3 py-1.5 md:py-1.5 rounded"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="" className="text-lg text-neutral-400 font-medium">
              Twitter Username
            </label>
            <input
              type="text"
              name="twitterUsername"
              id="twitterUsername"
              placeholder="Twitter Username"
              value={twitterUsername}
              onChange={(e) => setTwitterUsername(e.target.value)}
              className="text-md font-medium text-neutral-400 outline-hidden bg-neutral-800/70 w-full border border-neutral-700/40 px-3 py-1.5 md:py-1.5 rounded"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="" className="text-lg text-neutral-400 font-medium">
              Password
            </label>
            <div className="flex justify-between items-center w-full border border-neutral-700/40 px-3 py-1.5 md:py-1.5 rounded  bg-neutral-800/70">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-md font-medium text-neutral-400 outline-hidden w-full"
              />
              <button
                className="text-red-500 text-lg"
                onClick={handleShowPassword}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          {error && (
            <p className="text-red-500 font-normal text-sm">{error}</p>
          )}
          <button
            onClick={handleRegister}
            className="px-5 py-1.5 md:py-1.5 text-lg font-normal bg-red-500 rounded-md hover:bg-red-600 border border-red-500 transition-all duration-300 ease-in-out w-full cursor-pointer"
          >
            Create Account
          </button>
          <div className="flex flex-wrap justify-center items-center w-full space-x-2 text-md text-neutral-400">
            <p className="">{`Already have an account?`}</p>
            <Link
              href="/login"
              className="text-red-500 underline font-normal"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
