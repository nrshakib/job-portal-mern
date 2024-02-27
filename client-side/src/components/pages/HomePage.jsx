import { useState } from "react";
import Banner from "../home/Banner";
import SearchBox from "../home/SearchBox";

const HomePage = () => {
  const [inputJobs, setInputJobs] = useState("");
  const handleInputChange = (e) => {
    setInputJobs(e.target.value);
  };
  console.log(inputJobs);
  return (
    <div>
      <Banner />
      <SearchBox inputJobs={inputJobs} handleInputChange={handleInputChange} />
    </div>
  );
};

export default HomePage;
