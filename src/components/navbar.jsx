import user from "../assets/icons/User.svg";
import logo from "../assets/icons/logo.png";
import "../css/main.css";

const Navbar = () => {
  return (
    <div className="flex bg-white w-full h-16 items-center">
      <a className="btn btn-ghost normal-case text-xl ml-4 hover:bg-white">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      </a>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black font-bold">
          <li className="relative">
            <a>Home</a>
	    <span className="absolute border-b-4 border-[#068758] rounded-none w-[70px] bottom-[-15px]"></span>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Offset</a>
          </li>
        </ul>
      </div>
      <div className="signIn flex items-center">
        <button
          className="btn-signIn px-5 py-2 font-xs rounded-full mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <img src={user} alt="user" className="inline-block mr-2 mb-1 icon" />{" "}
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
