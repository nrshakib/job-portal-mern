import { useEffect, useState } from "react";
import Banner from "../home/Banner";
import SearchBox from "../home/SearchBox";
import JobCard from "../home/JobCard";
import Jobs from "./Jobs";

const HomePage = () => {
  const [inputJobs, setInputJobs] = useState("");
  const [category, setCategory] = useState();
  const [jobs, setJobs] = useState([]);

  // Fetch Job Data
  useEffect(() => {
    fetch("/src/assets/data/jobs.json")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);

  const handleInputChange = (e) => {
    setInputJobs(e.target.value);
  };
  // console.log(inputJobs);

  // Filter Jobs
  const filterJobs = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(inputJobs.toLowerCase()) !== -1
  );
  // console.log(filterJobs);

  const handleRadioFIltering = (e) => {
    setCategory(e.target.value);
  };
  const handleButtonFiltering = (e) => {
    setCategory(e.target.value);
  };

  // Function to filted data according to Search input and Selections
  const filteredData = (jobs, selected, inputJobs) => {
    let filteredJobs = jobs;
    // console.log(filteredJobs);
    if (inputJobs) {
      filteredJobs = filterJobs;
    }
    if (selected) {
      filteredJobs = filteredData.filter(
        ({
          salaryType,
          jobLocation,
          employmentType,
          maxSalary,
          experienceLevel,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxSalary) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          postingDate.toLowerCase() === selected.toLowerCase()
      );
    }
    return filteredJobs.map((data, index) => (
      <JobCard key={index} data={data} />
    ));
  };

  const displayJobs = filteredData(jobs, category, inputJobs);

  return (
    <div>
      <Banner />
      <SearchBox inputJobs={inputJobs} handleInputChange={handleInputChange} />
      <div className="md:grid grid-cols-5 gap-4 lg:px-24 px-4 py-12">
        <div className="bg-yellow-400 p-4 rounded">Left</div>
        <div className="bg-gray-300 col-span-3 p-4 rounded">
          <Jobs displayJobs={displayJobs} />
        </div>
        <div className="bg-yellow-400 p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default HomePage;
