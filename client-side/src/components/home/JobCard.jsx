import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  console.log(data);
  return (
    <div className="m-5 border-2 rounded border-indigo-400 p-5 cursor-pointer">
      <Link to="/">
        <div>
          <p className="mb-1">{data.companyName}</p>
          <p className="mb-2">{data.jobTitle}</p>
          <div></div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
