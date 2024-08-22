"use client";

import { useJobContext } from "@/JobContext/JobContextProvider";

export default function Category({ name }: { name: string }) {
  const { addCategory } = useJobContext();
  return (
    <div
      className="cursor-pointer bg-card text-primary w-fit py-1.5 rounded-md h-fit px-3 flex items-center justify-center hover:bg-primary hover:text-white duration-300 ease-in-out"
      onClick={() => addCategory(name)}
    >
      {name}
    </div>
  );
}
