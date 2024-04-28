"use client";

import { useState } from "react";

import Image from "next/image";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(username, password);
  };

  const handleLoginEO = () => {
    console.log("Login as EO");
  }

  const handleLoginUser = () => {
    console.log("Login as User");
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div className="rounded-[14px] border border-1  flex flex-row   justify-center items-center space-x-10  px-6">
        <div className="w/1-2 h-full my-[20px]">
          <Image src="/images/Art.png" width={400} height={800} alt="" />
        </div>

        <div className="flex flex-col my-10 w-1/2">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-primaryBlue text-[24px] font-semibold">
              Welcome Back 👋
            </h1>
            <div className="flex flex-row text-sm">
              <p className="text-[#313957]">Tidak punya akun?</p>
              <a href="/auth/register" className="text-secondaryBlue font-bold">
                &nbsp;Daftar
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[14px]" htmlFor="username">
                  Username
                </label>
                <input
                  className="border border-gray-300 px-2 py-2 rounded-md text-primaryBlue"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[14px]" htmlFor="password">
                  Password
                </label>
                <input
                  className="border border-gray-300 px-2 py-2 rounded-md text-primaryBlue"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="bg-primaryBlue text-white rounded-md px-6 py-2"
                type="submit"
              >
                Masuk
              </button>

              <h2 className="self-center text-black/50">--OR--</h2>

              <button onClick={handleLoginEO} className="bg-primaryBlue text-white rounded-md px-6 py-2">
                Masuk Sebagai EO
              </button>

              <button onClick={handleLoginUser} className="bg-primaryBlue text-white rounded-md px-6 py-2">
                Masuk Sebagai User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
