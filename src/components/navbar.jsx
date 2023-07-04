import React,{useState} from "react"
import user from "../assets/icons/User.svg";
import logo from "../assets/icons/logo.png";
import "../css/main.css";
import { Care, Close, Email, Eye, Logo, Password } from "../assets/image";
import validator from 'validator';


const Navbar = () => {

  const [hiddenPassword, setHiddenPassword] = useState(true)
  const [hiddenPassword_signUp_1, setHiddenPassword_signUp_1] = useState(true)
  const [hiddenPassword_signUp_2, setHiddenPassword_signUp_2] = useState(true)
  const [emailSignIn, setEmailSignIn] = useState("")
  const [passwordSignIn, setPasswordSignIn] = useState("")
  const [nameSignUp, setNameSignUp] = useState("")
  const [surNameSignUp, setSurNameSignUp] = useState("") 
  const [EmailSignUp, setEmailSignUp] = useState("")
  const [passwordSignUp, setPasswordSignUp] = useState("")
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("")

  const isValidEmail = validator.isEmail(emailSignIn);

  return (
    <div className="flex bg-white w-full h-16 items-center">
      <a className="btn btn-ghost normal-case text-xl ml-4 hover:bg-white">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      </a>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black font-bold">
          <li className="relative">
            <a>Home</a>
            <div className="absolute border-b-4 border-[#068758] rounded-none w-[70px] bottom-[-15px]"></div>
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
          onClick={() => window.my_modal_1.showModal()}
          className="btn-signIn px-5 py-2 font-xs rounded-full mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <img src={user} alt="user" className="inline-block mr-2 mb-1 icon" />
          Sign In
        </button>

        <dialog id="my_modal_1" className="modal text-[#767494]">
          <div className="min-w-[20vw] h-[60vh] p-14 bg-white rounded-xl">
            <div className="flex justify-end">
              <button onClick={() => window.my_modal_1.close()}>
                <img src={Close} alt="Close" />
              </button>
            </div>
            <div className="flex items-center justify-center mt-10">
              <img src={Logo} alt="logo" />
            </div>
            <div className="mt-10 h-[20vh] flex flex-col items-center">
              <div className="w-full">
                <div className="mb-2">
                  <p>Email</p>
                </div>
                <div className="relative">
                  <input
                    value={emailSignIn}
                    onChange={(e) => setEmailSignIn(e.target.value)}
                    style={{
                      borderColor: isValidEmail ? "#767494" : "#FF002F",
                    }}
                    className="w-full h-[5vh] rounded-lg bg-white border-2 pl-10 outline-none "
                    placeholder="Enter your email address"
                  />
                  <img
                    src={Email}
                    alt="Email"
                    className="absolute top-[15px] left-3"
                  />
                </div>
                {isValidEmail ? null : (
                  <div className="text-[#FF002F] flex items-center">
                    <img src={Care} alt="Care" />
                    <p className="ml-2 mt-1">Please enter a valid email.</p>
                  </div>
                )}
              </div>
              <div className="w-full mt-4">
                <div className="mb-2">
                  <p>Password</p>
                </div>
                <div className="relative">
                  <input
                    value={passwordSignIn}
                    onChange={(e) => setPasswordSignIn(e.target.value)}
                    type={hiddenPassword ? "password" : "text"}
                    className="w-full h-[5vh] rounded-lg border-[#767494] bg-white border-2 pl-10 outline-none "
                    placeholder="Enter your password"
                  />
                  <img
                    src={Password}
                    alt="Email"
                    className="absolute top-[15px] left-3"
                  />
                  <img
                    onClick={() => setHiddenPassword(!hiddenPassword)}
                    src={Eye}
                    alt="Email"
                    className="absolute top-[15px] right-3"
                  />
                </div>

                <div className="mt-10">
                  <div className="w-full">
                    <button className="w-full bg-[#068758] btn border-none text-white rounded-2xl">
                      Sign In
                    </button>
                  </div>
                  <div className="w-full flex justify-between mt-4">
                    <div>Forgot Password?</div>
                    <div
                      onClick={() => (
                        window.my_modal_1.close(), window.my_modal_2.showModal()
                      )}
                    >
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>

        <dialog id="my_modal_2" className="modal text-[#767494]">
          <div className="min-w-[20vw] h-[85vh] p-14 bg-white rounded-xl">
            <div className="flex justify-end">
              <button onClick={() => window.my_modal_2.close()}>
                <img src={Close} alt="Close" />
              </button>
            </div>
            <div className="flex justify-center w-full mt-3">
              <p className="font-bold text-[#121212] text-[25px]">
                Registration
              </p>
            </div>
            <div className="mt-3">
              <div className="w-full">
                <div className="mb-2">
                  <p>name</p>
                </div>
                <div className="relative">
                  <input
                    value={nameSignUp}
                    onChange={(e) => setNameSignUp(e.target.value)}
                    style={{
                      borderColor: isValidEmail ? "#767494" : "#FF002F",
                    }}
                    className="w-full h-[5vh] rounded-lg bg-white border-2 pl-2 outline-none "
                    placeholder="Enter your name"
                  />
                </div>
                {isValidEmail ? null : (
                  <div className="text-[#FF002F] flex items-center">
                    <img src={Care} alt="Care" />
                    <p className="ml-2 mt-1">Please enter a valid name.</p>
                  </div>
                )}
              </div>
              <div className="w-full mt-2">
                <div className="mb-2">
                  <p>Surname</p>
                </div>
                <div className="relative">
                  <input
                    value={surNameSignUp}
                    onChange={(e) => setSurNameSignUp(e.target.value)}
                    style={{
                      borderColor: "#767494",
                    }}
                    className="w-full h-[5vh] rounded-lg bg-white border-2 pl-2 outline-none "
                    placeholder="Enter your surname"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <div className="mb-2">
                  <p>Email</p>
                </div>
                <div className="relative">
                  <input
                    value={EmailSignUp}
                    onChange={(e) => setEmailSignUp(e.target.value)}
                    style={{
                      borderColor: "#767494",
                    }}
                    className="w-full h-[5vh] rounded-lg bg-white border-2 pl-2 outline-none "
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <div className="mb-2">
                  <p>Password</p>
                </div>
                <div className="relative">
                  <input
                    value={passwordSignUp}
                    onChange={(e) => setPasswordSignUp(e.target.value)}
                    type={hiddenPassword_signUp_1 ? "password" : "text"}
                    className="w-full h-[5vh] rounded-lg border-[#767494] bg-white border-2 pl-10 outline-none "
                    placeholder="Enter your password"
                  />
                  <img
                    src={Password}
                    alt="Email"
                    className="absolute top-[15px] left-3"
                  />
                  <img
                    onClick={() => setHiddenPassword_signUp_1(!hiddenPassword_signUp_1)}
                    src={Eye}
                    alt="Email"
                    className="absolute top-[15px] right-3"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <div className="mb-2">
                  <p>Confirm Password</p>
                </div>
                <div className="relative">
                  <input
                    type={hiddenPassword_signUp_2 ? "password" : "text"}
                    value={confirmPasswordSignUp}
                    onChange={(e) => setConfirmPasswordSignUp(e.target.value)}
                    className="w-full h-[5vh] rounded-lg border-[#767494] bg-white border-2 pl-10 outline-none "
                    placeholder="Enter your password"
                  />
                  <img
                    src={Password}
                    alt="Email"
                    className="absolute top-[15px] left-3"
                  />
                  <img
                    onClick={() => setHiddenPassword_signUp_2(!hiddenPassword_signUp_2)}
                    src={Eye}
                    alt="Email"
                    className="absolute top-[15px] right-3"
                  />
                </div>
              </div>
            </div>

            <div className="mt-7">
              <div>
                <button className="w-full text-white bg-[#068758] h-[5vh] rounded-3xl hover:bg-[#056d47] transition">
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center mt-4 ">
                <p>Have an account ? </p>
                <p className="ml-2 font-bold relative" onClick={() => (window.my_modal_2.close(), window.my_modal_1.showModal())}>
                  Sign In
                  <span className="border-[#068758] border-b-2 absolute right-[-1px] top-[2px] w-[53px] h-[2vh]"></span>
                </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
