"use client";
import { Dot } from "lucide-react";
import Image from "next/image";
import Category from "./Category";
import { Job } from "@/JobContext/JobContextProvider";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white px-8 py-4 rounded-lg relative flex flex-col gap-6 md:flex-row overflow-visible shadow-lg shadow-primary/15">
      {job.featured && (
        <div className=" absolute w-6 rounded-md overflow-hidden left-0 top-0 bottom-0">
          <div className="absolute h-full w-1 bg-primary left-0 top-0 bottom-0" />
        </div>
      )}

      <Image
        className="aspect-square w-fit h-fit -top-12 left-8 z-20 absolute md:static object-contain"
        src={job.logo}
        alt="insure"
        width={60}
        height={60}
      />

      <div className="flex flex-col gap-4 md:flex-1 mt-10 md:mt-0">
        <div className="flex items-center gap-5">
          <p className="text-primary capitalize font-medium">{job.company}</p>
          {job.new && (
            <div className="bg-primary text-white px-2 uppercase rounded-xl text-sm">
              new!
            </div>
          )}
          {job.featured && (
            <div className="bg-foreground text-white px-2 uppercase rounded-xl text-sm">
              featured
            </div>
          )}
        </div>
        <h2 className=" hover:text-primary duration-300 ease-in-out capitalize font-bold tracking-wide">
          {job.position}
        </h2>
        <p className="flex items-center gap-4">
          {job.postedAt} <Dot /> {job.contract} <Dot /> {job.location}
        </p>
      </div>
      <div className="flex gap-4 flex-wrap py-6 border-t md:border-none">
        <Category name={job.contract} />
        <Category name={job.level} />
        {job.languages &&
          job.languages.length > 0 &&
          job.languages.map((lang) => <Category name={lang} key={lang} />)}
        {job.tools &&
          job.tools.length > 0 &&
          job.tools.map((tool) => <Category name={tool} key={tool} />)}
      </div>
    </div>
  );
}
