"use client";
import { useJobContext } from "@/JobContext/JobContextProvider";
import JobCard from "./JobCard";

export default function JobList() {
  const { filteredJobs } = useJobContext();
  return (
    <div className=" my-[5rem] flex flex-col gap-[5rem] md:gap-[3rem] ">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
