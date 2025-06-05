"use client";

import { FaLock } from "react-icons/fa";
import React from "react";
import Input from "@/components/shared/input/Input";
import axiosInstance from "@/utils/axios-instance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await axiosInstance.post("/login", {
        email,
        password,
      });
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      if (error.response.status === 401) {
        return toast.error("Email or password is incorrect");
      }
      toast.error("Login failed");
    }
  };
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-32">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="p-4 bg-yellow-300 rounded-full w-fit mx-auto">
            <FaLock className="text-xl" />
          </div>
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="email"
              placeholder="Email address"
              label="Email address"
            />
            <Input
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-300 px-3 py-1.5 text-sm/6 font-semibold text-yellow-900 shadow-xs hover:bg-yellow-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
