import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChevronRigth } from "../assets/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";

const Purchase = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [selectedOffsetMethod, setSelectedOffsetMethod] = useState("retailCC");

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
          <div className="pl-[15vw] md:pl-[5vw] 2xl:w-[15vw]">
            <div className="flex w-[35vw] items-center justify-between md:w-[45vw] font-bold">
              <div className="flex w-[15vw] md:w-[25vw] 2xl:w-[15vw]  justify-around">
                <div>Offset</div>
                <div>
                  <img src={ChevronRigth} alt="img" />
                </div>
                <div>Offset by retail cc</div>
                <div>
                  <img src={ChevronRigth} alt="img" />
                </div>
                <div>Purchase</div>
              </div>
              <div className="font-bold text-[40px]">Purchase</div>
            </div>
          </div>
          <div className="flex items-center justify-center h-[60vh] mt-10">
            <div className="w-[70vw] h-[60vh] bg-white rounded-2xl flex p-20">
              <div className="w-[35vw]">
                <div className="font-bold text-[20px]">Payment</div>
                <div className="flex mt-3">
                  <div
                    className={`w-[13vw] h-[5vh] btn capitalize rounded-sm ${
                      selectedOffsetMethod === "retailCC"
                        ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                        : "bg-white border-2 border-[#767494] text-[#767494]"
                    } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                  >
                    Credit card
                  </div>
                  <div
                    className={`w-[13vw] h-[5vh] btn capitalize rounded-sm ${
                      selectedOffsetMethod === "metricTons"
                        ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                        : "bg-white border-2 border-[#767494] text-[#767494]"
                    } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                  >
                    QR code
                  </div>
                </div>
                <div className="mt-14">
                  <div>
                    <div className="font-bold text-[20px]">Card number</div>
                    <div className="mt-5">
                      <input
                        className="w-[35vw] h-[50px] border-2 border-[#767494] bg-white pl-2 outline-none"
                        placeholder={
                          selectedOffsetMethod === "retailCC"
                            ? "Enter Retail CC"
                            : "Enter carbon offset amount"
                        }
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex  w-[35vw] mt-10 justify-between">
                    <div>
                      <div className="font-bold text-[20px]">Expiry Date</div>
                      <div className="mt-5">
                        <input
                          className="w-[17vw] h-[50px] border-2 border-[#767494] bg-white pl-2 outline-none"
                          placeholder={
                            selectedOffsetMethod === "retailCC"
                              ? "Enter Retail CC"
                              : "Enter carbon offset amount"
                          }
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-[20px]">CVC</div>
                      <div className="mt-5">
                        <input
                          className="w-[17vw] h-[50px] border-2 border-[#767494] bg-white pl-2 outline-none"
                          placeholder={
                            selectedOffsetMethod === "retailCC"
                              ? "Enter Retail CC"
                              : "Enter carbon offset amount"
                          }
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="h-[43vh] w-[1px] bg-[#BCBACD] mr-10 ml-10"></span>
              <div className="w-full">
                <div className="font-bold text-[20px]">
                  Offset order summary
                </div>
                <div className="h-[5vh] mt-3 border-b-2 border-[#BCBACD] pt-2 flex justify-between">
                  <div>Cost of Offset</div>
                  <div>test</div>
                </div>
                <div className="font-bold text-[20px] mt-5">Coupon code</div>
                <div className=" h-[10vh] border-b-2 border-[#BCBACD] flex justify-between items-center">
                  <input
                    className="w-[10vw] md:w-[11vw] 2xl:w-[14vw] h-[5vh] border-[#767494] bg-white border-2 outline-none pl-2"
                    placeholder="Enter your coupon"
                  />
                  <button className=" w-[6vw] h-[5vh] bg-[#FFC93C] text-black rounded-3xl font-bold">
                    Apply
                  </button>
                </div>
                <div className="h-[5vh] mt-3 pt-2 flex justify-between">
                  <div>Total retail cc</div>
                  <div>test</div>
                </div>
                <div className="h-[5vh]  pt-2 flex justify-between">
                  <div>Total cost to offset</div>
                  <div>test</div>
                </div>
                <div>
                  <button className="bg-[#068758] hover:bg-[#066b46] transition text-white h-[5vh] w-full rounded-3xl">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
