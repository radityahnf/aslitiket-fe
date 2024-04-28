"use client";

import { useState } from "react";

import Image from "next/image";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, username, password);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div className="rounded-[14px] border border-1  flex flex-row   justify-center items-center space-x-10  px-6">
        <div className="w/1-3 h-full">
          <Image src="/images/Art.png" width={400} height={800} alt="" />
        </div>

        <div className="flex flex-col my-10 w-2/3">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-primaryBlue text-[24px] font-semibold">Welcome 👋</h1>
            <div className="flex flex-row text-sm">
              <p className="text-[#313957]">Sudah punya akun?</p>
              <a href="/auth/login" className="text-secondaryBlue font-bold">
                &nbsp;Masuk
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[14px]" htmlFor="email">Email</label>
                <input
                  className="border border-gray-300 px-2 py-2 rounded-md text-primaryBlue"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[14px]" htmlFor="username">Username</label>
                <input
                  className="border border-gray-300 px-2 py-2 rounded-md text-primaryBlue"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[14px]" htmlFor="password">Password</label>
                <input
                  className="border border-gray-300 px-2 py-2 rounded-md text-primaryBlue"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="bg-primaryBlue text-white rounded-md px-6 py-2">
                Daftar
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
