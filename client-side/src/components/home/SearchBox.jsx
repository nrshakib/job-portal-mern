import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchBox = ({ inputJobs, handleInputChange }) => {
  return (
    <form>
      <div className="flex md:justify-start items-center md:flex-row flex-col md:gap-3 gap-1 md:mx-16 mx-5 mt-6 ">
        <div className="flex rounded md:rounded-s-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
          <input
            type="text"
            name="title"
            id="title"
            value={inputJobs}
            placeholder="Search Jobs Here.."
            onChange={handleInputChange}
            className="block flex-1 border-0 bg-transparent py-2 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
          />
          <FiSearch className="absolute mt-3 ml-1 text-gray-400" />
        </div>
        <div className="flex rounded md:rounded-s-none shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location.."
            className="block flex-1 border-0 bg-transparent py-2 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
          />
          <FaMapMarkerAlt className="absolute mt-3 ml-1 text-gray-400" />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-600 py-2 px-8 text-white font-semibold border rounded md:rounded-s-none"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
