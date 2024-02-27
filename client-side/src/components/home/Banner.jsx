import { GoWorkflow } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbNewSection } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="ml-16 mt-10">
      <p className="my-5 text-3xl font-semibold">
        Find The <span className="text-4xl text-blue-700">Right Job</span>
      </p>
      <div className="md:flex hidden gap-6">
        <div className="flex gap-2 border-2 p-3 rounded-lg text-gray-700 font-semibold border-blue-800 hover:bg-yellow-500 hover:text-white">
          <GoWorkflow className="text-white font-bold text-5xl border-5 p-2 border-2 rounded-full bg-blue-900 border-blue-900" />
          <div>
            <p>Live Jobs</p>
            <p>956</p>
          </div>
        </div>
        <div className="flex gap-2 border-2 p-3 rounded-lg text-gray-700 font-semibold border-blue-800 hover:bg-green-500 hover:text-white">
          <LuUsers2 className="text-white font-bold text-5xl border-5 p-2 border-2 rounded-full bg-blue-900 border-blue-900" />
          <div>
            <p>Vacancies</p>
            <p>186</p>
          </div>
        </div>
        <div className="flex gap-2 border-2 p-3 rounded-lg text-gray-700 font-semibold border-blue-800 hover:bg-red-600 hover:text-white">
          <BsFillBuildingsFill className="text-white font-bold text-5xl border-5 p-2 border-2 rounded-full bg-blue-900 border-blue-900" />
          <div>
            <p>Companies</p>
            <p>56</p>
          </div>
        </div>
        <div className="flex gap-2 border-2 p-3 rounded-lg text-gray-700 font-semibold border-blue-800 hover:bg-cyan-500 hover:text-white">
          <TbNewSection className="text-white font-bold text-5xl border-5 p-2 border-2 rounded-full bg-blue-900 border-blue-900" />
          <div>
            <p>New Jobs</p>
            <p>523</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
