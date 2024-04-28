"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function DaftarEventSide() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full">
      <Input
        className=" mb-[20px]"
        placeholder="Cari Event"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className=" flex flex-col space-y-4 items-center ">
        <div className="w-full">
          <h1 className="text-formInputBlue font-medium">
            Indoor Women Training Day I
          </h1>
          <p className="text-sm font-light">12th Sep 2021</p>
        </div>

        <div className="w-full">
          <h1 className="text-formInputBlue font-medium">
            Indoor Women Training Day I
          </h1>
          <p className="text-sm font-light">12th Sep 2021</p>
        </div>

        <div className="w-full">
          <h1 className="text-formInputBlue font-medium">
            Indoor Women Training Day I
          </h1>
          <p className="text-sm font-light">12th Sep 2021</p>
        </div>

        <div className="w-full">
          <h1 className="text-formInputBlue font-medium">
            Indoor Women Training Day I
          </h1>
          <p className="text-sm font-light">12th Sep 2021</p>
        </div>
      </div>
    </div>
  );
}
