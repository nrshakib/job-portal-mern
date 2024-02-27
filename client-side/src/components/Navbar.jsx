import logo from "../assets/images/job-search-logo.png";
const Navbar = () => {
  return (
    <div className="mx-16">
      <div className="flex justify-between">
        <a href="">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <div className="font-semibold text-xl">Job Portal</div>
          </div>
        </a>
        <div className="flex gap-2 items-center">
          <button>Log In</button>
          <button>Sigh Up</button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 font-semibold text-gray-600">
        <a href="">Search A Job</a>
        <a href="">Post A Job</a>
        <a href="">My Jobs</a>
      </div>
    </div>
  );
};

export default Navbar;
