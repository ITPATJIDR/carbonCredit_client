import Navbar from "../components/navbar";
import StatCarbon from "../components/statCarbon";
import StatTree from "../components/statTree";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { coin } from "../assets/image";
import { PiCertificateLight } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
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

  const {isAuth} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () =>{
    const res = await axios.post("http://localhost:5001/user/logout",null, {
      withCredentials: true,
    });
    if(res.data.status === 200){
      dispatch(logoutSuccess())
      navigate("/")
    }
  }

  useEffect(() => {
    if(!isAuth){
      navigate('/')
    }
  },[])

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
                    Papatsiri Apipaiboon
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
                  <p className="text-[20px] text-[#767494]">3000 Coin</p>
                </div>
                <div className="mr-[17px]">
                  <AiOutlinePlus size={30} />
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
                <div className="mx-[31px] mt-[3px] flex flex-row items-center">
                  <div className="mr-[11px]">
                    <SlSettings size={22} />
                  </div>
                  <div>
                    <p>Edit Profile</p>
                  </div>
                </div>
                <div className="divider"></div>
                {/* logout */}
                <div onClick={() => handleLogout()} className="flex flex-row items-center justify-end absolute bottom-0 right-0 mb-5 mr-5">
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
              <div className="justify-end absolute top-0 right-0 mt-5 mr-5">
                <AiOutlineQuestionCircle size={25} />
              </div>
              <div className="mt-[60px]">
                <h1 className="font-bold text-black text-[25px]">
                  Your Offset Tree
                </h1>
              </div>
              <div className="my-[80px] ml-[16px]">
                <img src={tree1} style={{ width: "400px", height: "auto" }} />
              </div>
            </div>
            {/* Right */}
            <div className="card bg-white shadow-xl w-[350px] h-[680px] flex items-center flex-col justify-center">
              <div className="mb-[30px]">
                <StatCarbon />
              </div>
              <div>
                <StatTree />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
