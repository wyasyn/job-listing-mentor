"use client";
import { useJobContext } from "@/JobContext/JobContextProvider";
import FilteredCard from "./filteredCard";

export default function FilteredCards() {
  const { selectedCategories, clearCategories } = useJobContext();
  if (selectedCategories.length === 0) {
    return null;
  }
  return (
    <div className=" bg-white -mt-10 p-6 rounded-lg shadow-md w-full shadow-primary/15 flex items-center justify-between gap-6 ">
      <div className="flex-1 flex gap-4 flex-wrap md:gap-10 ">
        {selectedCategories &&
          selectedCategories.length > 0 &&
          selectedCategories.map((category) => (
            <FilteredCard key={category} name={category} />
          ))}
      </div>
      <button
        className="hover:text-primary duration-300 ease-in-out hover:underline"
        onClick={() => clearCategories()}
      >
        Clear
      </button>
    </div>
  );
}
