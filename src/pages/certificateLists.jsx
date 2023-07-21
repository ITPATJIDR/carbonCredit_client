import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ChevronRigth } from "../assets/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { Cert, Vector, ArrowRight } from "../assets/icons";
import axios from "axios";

const CertificateLists = () => {
  const { isAuth, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const fullname = data.name + " " + data.surname

  const handleDownload = async (certPath, filename) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/carbon/downloadCertificate",
        { cert_path: certPath },
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;

      const contentDisposition = response.headers["content-disposition"];
      const fileName = contentDisposition
        ? contentDisposition.split("filename=")[1].trim()
        : `${filename}`;

      link.setAttribute("download", fileName);

      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (err) {
      console.log("Error downloading file:", err.message);
    }
  };

  // useEffect(() => {
  // 	if(!isAuth){
  // 		navigate("/")
  // 	}
  // })

  return (
    <>
      <Navbar />
      <div className="bg-[#F2F4F8] h-[93vh] text-black">
        <div className="p-20">
          <div className="pl-[15vw]">
            <div className="flex w-[37vw] items-center justify-between font-bold">
              <Link to="/profile">
                <div className="flex w-[3vw] items-center justify-between">
                  <div>
                    <img src={ArrowRight} alt="img" />
                  </div>
                  <div>Back</div>
                </div>
              </Link>
              <div className="font-bold text-[40px]">My Certificate</div>
            </div>
          </div>
          <div className="flex items-center justify-center h-[60vh] mt-10">
            <div className="w-[70vw] h-[60vh]  bg-white rounded-2xl flex p-20">
              <div className="w-[65vw] h-[50vh] overflow-y-scroll">
                {data?.certificateLists
                  ? data.certificateLists.map((item, index) => {
                      const certName = (item.cert_path.split('/')[1])
                      return (
                        <div
                          className=" w-[60vw] h-[20vh] m-5 border-b-2 border-[#D4D2E3] flex justify-between items-center p-10"
                          key={index}
                        >
                          <div className="flex w-[15vw] justify-between items-center">
                            <div className="w-[5vw] h-[10vh] bg-[#DEEFED] rounded-2xl flex items-center justify-center ">
				<img src={Cert} alt="Cert"/>
			    </div>
                            <div>
                              <div className="font-bold text-[20px]">{certName}</div>
                              <div className="font-bold text-[20px] text-[#8D8BA7]">{fullname}</div>
                            </div>
                          </div>
                          <div className="flex w-[15vw] justify-between">
                            <div onClick={() => handleDownload(item.cert_path, certName)} className="w-[6vw] h-[6vh] border-2 rounded-3xl bg-white hover:bg-[#DEEFED] transition flex items-center justify-center border-[#767494]">Download</div>
                            <div className="w-[6vw] h-[6vh] bg-[#068758] hover:bg-[#055538] transition text-white rounded-3xl flex items-center justify-center">Tax Invoice</div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateLists;
