import FilteredCards from "./filteredCards";
import JobList from "./JobList";

export default function Main() {
  return (
    <>
      <header className="min-h-[150px] bg-border bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')] bg-no-repeat bg-center bg-cover" />
      <main className="container w-full">
        <FilteredCards />
        <JobList />
      </main>
    </>
  );
}
