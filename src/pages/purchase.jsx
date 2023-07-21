import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRigth } from "../assets/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { Vector } from "../assets/icons";
import axios from "axios";

const Purchase = () => {
  const { isAuth, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [selectedOffsetMethod, setSelectedOffsetMethod] = useState("retailCC");
  const { state } = useLocation();

  // useEffect(() => {
  // 	if(!isAuth){
  // 		navigate("/")
  // 	}
  // })

  const handleConfirm = async () =>{
    window.my_modal_3.close();
    const res = await axios.post("http://localhost:5001/carbon/purchase",{
      offset:state.calCarbon,
      id:data.id
    })
  }

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
<<<<<<< HEAD
                  <div>{state.calCarbon}</div>
=======
                  <div>test</div>
>>>>>>> c6fb93d938576e5e53411be6c8b3dd5d2650090d
                </div>
                <div className="font-bold text-[20px] mt-5">Coupon code</div>
                <div className=" h-[10vh] border-b-2 border-[#BCBACD] flex justify-between items-center">
                  <input
<<<<<<< HEAD
                    className="w-[14vw] h-[5vh] border-[#767494] bg-white border-2 outline-none pl-2"
=======
                    className="w-[10vw] md:w-[11vw] 2xl:w-[14vw] h-[5vh] border-[#767494] bg-white border-2 outline-none pl-2"
>>>>>>> c6fb93d938576e5e53411be6c8b3dd5d2650090d
                    placeholder="Enter your coupon"
                  />
                  <button className=" w-[6vw] h-[5vh] bg-[#FFC93C] text-black rounded-3xl font-bold">
                    Apply
                  </button>
                </div>
                <div className="h-[5vh] mt-3 pt-2 flex justify-between">
                  <div>Total retail cc</div>
<<<<<<< HEAD
                  <div>{state.calCarbon}</div>
                </div>
                <div className="h-[5vh]  pt-2 flex justify-between">
                  <div>Total cost to offset</div>
                  <div>{state.calCarbon}</div>
                </div>
                <div>
                  <button
                    onClick={() => window.my_modal_3.showModal()}
                    className="bg-[#068758] hover:bg-[#066b46] transition text-white h-[5vh] w-full rounded-3xl"
                  >
                    Place Order
                  </button>
                </div>

                <dialog id="my_modal_3" className="modal text-[#767494]">
                  <div className="w-[35vw] h-[20vh] md:h-[55vh] 2xl:h-[50vh] 2xl:w-[18vw] p-14 bg-white rounded-xl flex items-center flex-col justify-around">
                    <div className="text-[30px] font-bold text-black">
                      Purchased Success
                    </div>
                    <div>
                      <img src={Vector} alt="success" />
                    </div>
                    <div className="w-full flex items-center flex-col">
                      <div className="font-bold">Name on Certificate</div>
                      <input
                        value={data.name + " " + data.surname}
                        className="pl-2 w-full mt-3 h-10 rounded-xl bg-white outline-none border-2 border-[#767494]"
                        type="text"
                      />
                    </div>
                    <div
                      onClick={() => handleConfirm()}
                      className="w-full h-10 bg-[#068758] hover:bg-[#056f48] transition rounded-2xl flex items-center justify-center text-white"
                    >
                      Confirm
                    </div>
                  </div>
                </dialog>
=======
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
>>>>>>> c6fb93d938576e5e53411be6c8b3dd5d2650090d
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
