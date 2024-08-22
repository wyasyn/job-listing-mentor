"use client";
import { useJobContext } from "@/JobContext/JobContextProvider";
import { X } from "lucide-react";

export default function FilteredCard({ name }: { name: string }) {
  const { removeCategory } = useJobContext();
  return (
    <div className=" flex pl-3 items-center bg-card rounded-md overflow-hidden w-fit ">
      <p className="text-muted-foreground mr-3 capitalize">{name}</p>
      <button
        className="bg-primary text-white p-1 group hover:bg-foreground duration-300 ease-in-out"
        onClick={() => removeCategory(name)}
      >
        <X
          size={18}
          className="group-hover:scale-125 duration-300 ease-in-out"
        />
      </button>
    </div>
  );
}
