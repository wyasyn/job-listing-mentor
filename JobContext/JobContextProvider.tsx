"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import jobsData from "@/lib/data.json";

// Define the shape of the job data
export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

// Define the context shape
interface JobContextProps {
  jobs: Job[];
  filteredJobs: Job[];
  selectedCategories: string[];
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  clearCategories: () => void;
}

// Create the JobContext
export const JobContext = createContext<JobContextProps | undefined>(undefined);

export const useJobContext = (): JobContextProps => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};

interface JobProviderProps {
  children: ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(jobsData as Job[]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData as Job[]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filter jobs based on selected categories
  useEffect(() => {
    const filterJobsByCategory = () => {
      if (selectedCategories.length === 0) {
        setFilteredJobs(jobs);
      } else {
        const filtered = jobs.filter((job) => {
          return selectedCategories.every((criteria) => {
            const lowerCriteria = criteria.toLowerCase();
            return (
              job.role.toLowerCase() === lowerCriteria ||
              job.level.toLowerCase() === lowerCriteria ||
              job.contract.toLowerCase() === lowerCriteria ||
              job.location.toLowerCase() === lowerCriteria ||
              job.position.toLowerCase().includes(lowerCriteria) ||
              job.languages.some(
                (lang) => lang.toLowerCase() === lowerCriteria
              ) ||
              job.tools.some((tool) => tool.toLowerCase() === lowerCriteria)
            );
          });
        });
        setFilteredJobs(filtered);
      }
    };

    filterJobsByCategory();
  }, [selectedCategories, jobs]);

  const addCategory = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const removeCategory = (category: string) => {
    setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
  };

  const clearCategories = () => {
    setSelectedCategories([]);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        filteredJobs,
        selectedCategories,
        addCategory,
        removeCategory,
        clearCategories,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
