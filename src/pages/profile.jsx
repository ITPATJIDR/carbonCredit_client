import Navbar from "../components/navbar";
import StatCarbon from "../components/statCarbon";
import StatTree from "../components/statTree";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Close, coin } from "../assets/image";
import { PiCertificateLight } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import {
  tree1,
  tree2,
  tree3,
  tree4,
  tree5,
  tree6,
  tree7,
  tree8,
  tree9,
  tree10,
} from "../assets/tree";
import axios from "axios";
import { logoutSuccess } from "../store/features/auth-slice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { isAuth, data } = useSelector((state) => state.auth);
  const fullname = data.name + " " + data.surname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newName, setNewName] = useState(data.name);
  const [newSurName, setSurName] = useState(data.surname);
  const [newEmail, setEmail] = useState(data.email);
  const [showModal, setShowModal] = useState(false);

  const test = () => {
    if (data?.coin >= 1 && data?.coin < 49) {
      return {
        image: tree1,
        width: "340px",
      };
    } else if (data?.coin >= 50 && data?.coin < 65) {
      return {
        image: tree2,
        width: "310px",
      };
    } else if (data?.coin >= 66 && data?.coin < 91) {
      return {
        image: tree3,
        width: "280px",
      };
    } else if (data?.coin >= 92 && data?.coin < 120) {
      return {
        image: tree4,
        width: "260px",
      };
    } else if (data?.coin >= 121 && data?.coin < 151) {
      return {
        image: tree5,
        width: "260px",
      };
    } else if (data?.coin >= 152 && data?.coin < 182) {
      return {
        image: tree6,
        width: "260px",
      };
    } else if (data?.coin >= 183 && data?.coin < 200) {
      return {
        image: tree7,
        width: "260px",
      };
    } else if (data?.coin >= 201 && data?.coin < 250) {
      return {
        image: tree8,
        width: "260px",
      };
    } else if (data?.coin >= 251 && data?.coin < 329) {
      return {
        image: tree9,
        width: "260px",
      };
    } else if (data?.coin > 330) {
      return {
        image: tree10,
        width: "250px",
      };
    }
  };

  const handleLogout = async () => {
    const res = await axios.post(
      "https://carboncredit-api.azurewebsites.net/user/logout",
      null,
      {
        withCredentials: true,
      }
    );
    if (res.data.status === 200) {
      dispatch(logoutSuccess());
      navigate("/");
    }
  };

  const handleUpdate = async () => {
    const res = await axios.post(
      "https://carboncredit-api.azurewebsites.net/user/updateProfile",
      {
        name: newName,
        surname: newSurName,
        email: newEmail,
        id: data.id,
      },
      {
        withCredentials: true,
      }
    );
    window.my_modal_4.close();
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  console.log(data);

  return (
    <div className="bg-[#F2F4F8]">
      <Navbar />
      <div className="flex flex-col w-[98vw] h-[100vh] justify-center items-center">
        <div className="w-[1200px] h-[680px]">
          <div className="flex flex-row justify-between">
            {/* Left */}
            <div className="flex flex-col">
              {/* card 1 */}
              <div className="card bg-white shadow-xl w-[350px] h-[270px] flex-col justify-center items-center">
                <div>
                  <BiUserCircle size={100} color="#767494" />
                </div>
                <div className="mt-[10px]">
                  <p className="text-[20px] text-black font-medium">
                    {fullname}
                  </p>
                </div>
                <div className="mt-[6px]">
                  <p className="text-[15px] text-[#767494]">Point : 30</p>
                </div>
              </div>
              {/* card 2 */}
              <div className="card bg-white font-bold shadow-xl w-[350px] h-[80px] my-[10px] flex-row justify-between items-center">
                <div className="ml-[20px]">
                  <img src={coin} style={{ width: "45px", height: "auto" }} />
                </div>
                <div>
                  <p className="text-[20px] text-[#767494]">
                    {data.coin ? data.coin : "0"} Coin
                  </p>
                </div>
                {/* plus sign */}
                <div className="mr-[17px]">
                  <Link to="/chooseOffset">
                    <AiOutlinePlus size={30} />
                  </Link>
                </div>
              </div>
              {/* card 3 */}
              <div className="card bg-white text-black font-medium shadow-xl w-[350px] h-[310px] flex-col">
                <Link to="/certificateLists">
                  <div className="mt-[30px] mx-[30px] flex flex-row items-center">
                    <div className="mr-[8px]">
                      <PiCertificateLight size={25} />
                    </div>
                    <div>
                      <p>My Certificate</p>
                    </div>
                  </div>
                </Link>
                <div className="divider"></div>
                <div
                  onClick={() => window.my_modal_4.showModal()}
                  className="mx-[31px] mt-[3px] flex flex-row items-center"
                >
                  <div className="mr-[11px]">
                    <SlSettings size={22} />
                  </div>
                  <div>
                    <p>Edit Profile</p>
                  </div>
                </div>
                <div className="divider"></div>
                <Link to="/Api">
                  <div className="mx-[31px] mt-[3px] flex flex-row items-center">
                    <div className="mr-[11px]">
                      <SlSettings size={22} />
                    </div>
                    <div>
                      <p>API</p>
                    </div>
                  </div>
                </Link>
                <dialog id="my_modal_4" className="modal text-[#767494]">
                  <div className="w-[35vw] h-[70vh] md:h-[70vh] 2xl:h-[80vh] 2xl:w-[18vw] p-14 bg-white rounded-xl flex items-center flex-col justify-around">
                    <div
                      onClick={() => window.my_modal_4.close()}
                      className="w-full flex justify-end"
                    >
                      <img src={Close} alt="success" />
                    </div>
                    <div className="text-[30px] font-bold text-black ">
                      Edit Profile
                    </div>
                    <div className="mt-5">
                      <BiUserCircle size={110} color="#767494" />
                    </div>
                    <div className="w-full flex flex-col mt-5">
                      <div className="font-bold">Name</div>
                      <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="pl-2 w-full mt-3 h-10 rounded-xl bg-white outline-none border-2 border-[#767494]"
                        type="text"
                      />
                      <div className="font-bold mt-5">Surname</div>
                      <input
                        value={newSurName}
                        onChange={(e) => setSurName(e.target.value)}
                        className="pl-2 w-full mt-3 h-10 rounded-xl bg-white outline-none border-2 border-[#767494]"
                        type="text"
                      />
                      <div className="font-bold mt-5">Email</div>
                      <input
                        value={newEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-2 w-full mt-3 h-10 rounded-xl bg-white outline-none border-2 border-[#767494]"
                        type="text"
                      />
                    </div>
                    <div className="mt-10 w-full">
                      <div
                        onClick={() => handleUpdate()}
                        className="w-full h-10 bg-[#068758] hover:bg-[#056f48] transition rounded-3xl flex items-center justify-center text-white"
                      >
                        Confirm
                      </div>
                    </div>
                  </div>
                </dialog>
                <div className="divider"></div>
                {/* logout */}
                <div
                  onClick={() => handleLogout()}
                  className="flex flex-row items-center justify-end absolute bottom-0 right-0 mb-5 mr-5"
                >
                  <div className="mr-2">
                    <MdOutlineLogout size={24} />
                  </div>
                  <div>
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Middle*/}
            <div className="card bg-white shadow-xl w-[470px] h-[680px] flex flex-col items-center">
              <div
                className="tooltip tooltip-left justify-end absolute top-0 right-0 mt-5 mr-5"
                data-tip="Offset carbon credits to make the tree in your profile
                grow! Help the environment by offsetting carbon emissions
                and see the positive impact you're making. There are 10
                growth levels to achieve!"
              >
                <AiOutlineQuestionCircle size={25} />
              </div>
              <div className="mt-[60px]">
                <h1 className="font-bold text-black text-[25px]">
                  Your Offset Tree
                </h1>
              </div>
              {/* tree img */}
              <div className="my-[80px] ml-[16px]">
                {test() && (
                  <img
                    src={test().image}
                    style={{ width: test().width }}
                    alt="Tree Image"
                  />
                )}
              </div>
            </div>
            {/* Right */}
            <div className="card bg-white shadow-xl w-[350px] h-[680px] flex items-center flex-col justify-center">
              <div className="mb-[30px]">
                <StatCarbon data={data} />
              </div>
              <div>
                <StatTree data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
