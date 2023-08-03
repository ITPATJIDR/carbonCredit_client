import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ChevronRigth } from "../assets/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { Cert, Vector, ArrowRight } from "../assets/icons";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApiPage = () => {
  const { isAuth, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const notify = () => {
    toast.success("Copy to Clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  return (
    <>
      <Navbar />
      <div className="bg-[#F2F4F8] h-[96vh] text-black">
        <div className="p-20">
          <div className="pl-[15vw]">
            <div className="flex w-[33vw] items-center justify-between font-bold">
              <Link to="/profile">
                <div className="flex w-[3vw] items-center justify-between">
                  <div>
                    <img src={ArrowRight} alt="img" />
                  </div>
                  <div>Back</div>
                </div>
              </Link>
              <div className="font-bold text-[40px]">API</div>
            </div>
          </div>
          <div className="flex items-center justify-center h-[60vh] mt-10">
            <div className="w-[70vw] h-[60vh]  bg-white rounded-2xl flex p-20">
              <div className="w-full flex justify-between items-center">
                <div className="font-bold">Apikey</div>
                <div className="w-[30vw] bg-slate-300 h-[10vh] flex items-center p-10 rounded-3xl justify-between">
                  <div className="truncate pr-10">
                    {data?.refreshtoken ? data?.refreshtoken : null}
                  </div>
                  <CopyToClipboard text={data?.refreshtoken} onCopy={notify}>
                    <div className="w-[5vw] h-[5vh] bg-slate-300 hover:bg-slate-400 flex items-center rounded-xl justify-center transition">
                      Copy
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ApiPage;
