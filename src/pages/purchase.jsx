import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRigth } from "../assets/image";
import { Vector } from "../assets/icons";
import axios from "axios";

const Purchase = () => {
  const { isAuth, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [selectedOffsetMethod, setSelectedOffsetMethod] = useState("retailCC");
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (state === null) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  const handleConfirm = async () => {
    window.my_modal_3.close();
    const res = await axios.post("http://localhost:5001/carbon/purchase", {
      offset:
        state.calResult === undefined ? state.coin : Number(state.calResult),
      id: data.id,
    });
    navigate("/profile");
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F2F4F8] h-[95vh] w-full text-black">
        <div>
          <div className="flex items-center justify-center font-bold">
            <div className="font-bold text-[40px] mt-[40px]">Purchase</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="card w-[60vw] h-[57vh] bg-white shadow-xl my-[2rem] z-10">
              <div className="card-body">
                <div className="flex flex-row divide-x">
                  {/* Zone 1 */}
                  <div className="flex flex-col mt-3 ml-4">
                    <div className="text-black text-[15px] font-bold">
                      Payment
                    </div>
                    <div className="flex mt-3">
                      <div
                        className={`w-[9vw] h-[4vh] btn capitalize rounded-sm ${
                          selectedOffsetMethod === "retailCC"
                            ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                            : "bg-white border-2 border-[#767494] text-[#767494]"
                        } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                      >
                        Credit card
                      </div>
                      <div
                        className={`w-[9vw] h-[4vh] btn capitalize rounded-sm ${
                          selectedOffsetMethod === "metricTons"
                            ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                            : "bg-white border-2 border-[#767494] text-[#767494]"
                        } hover:bg-[#B5D4D0] hover:border-[#068758]`}
                      >
                        QR code
                      </div>
                    </div>
                    <div className="mt-10 mr-7">
                      <div>
                        <div className="text-black text-[15px] font-bold font-medium">
                          Card number
                        </div>
                        <div className="mt-5">
                          <input
                            className="w-[26vw] h-[6vh] rounded-sm bg-white border-2 border-[#767494] pl-2 outline-none font-medium text-sm text-[#068758]"
                            placeholder={
                              selectedOffsetMethod === "retailCC"
                                ? ""
                                : "Enter carbon offset amount"
                            }
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex mt-8">
                        <div className="mr-[2rem]">
                          <div className="text-black text-[15px] font-bold font-medium">
                            Expiry Date
                          </div>
                          <div className="mt-5">
                            <input
                              className="w-[12vw] h-[6vh] border-2 border-[#767494] bg-white pl-2 outline-none"
                              placeholder={
                                selectedOffsetMethod === "retailCC"
                                  ? "MM/YY"
                                  : "Enter carbon offset amount"
                              }
                              type="text"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-black text-[15px] font-bold font-medium">
                            CVC
                          </div>
                          <div className="mt-5">
                            <input
                              className="w-[12vw] h-[6vh] border-2 border-[#767494] bg-white pl-2 outline-none"
                              placeholder={
                                selectedOffsetMethod === "retailCC"
                                  ? "CVV"
                                  : "Enter carbon offset amount"
                              }
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Zone 2 */}
                  <div className="flex flex-col mt-3">
                    <div className="ml-7">
                      <div className="text-black text-[15px] font-bold">
                        Offset order summary
                      </div>
                      <div className="h-[5vh] mt-3 border-b-2 border-[#BCBACD] flex justify-between">
                        <div>Cost of Offset</div>
                        {state ? <div>{state.calCarbon}</div> : null}
                      </div>
                      <div className="text-black text-[15px] font-bold mt-3">
                        Coupon code
                      </div>
                      <div className=" h-[9vh] border-b-2 border-[#BCBACD] flex justify-between items-center">
                        <input
                          className="w-[10vw] md:w-[11vw] 2xl:w-[14vw] h-[5vh] border-[#767494] bg-white border-2 outline-none pl-2"
                          placeholder="Enter your coupon"
                        />
                        <button className="w-[6vw] h-[5vh] bg-[#FFC93C] text-black text-[14px] rounded-3xl font-bold">
                          Apply
                        </button>
                      </div>
                      <div className="h-[5vh] mt-3 pt-1 flex justify-between">
                        <div>Coin</div>
                        {state ? <div>{state.coin}</div> : null}
                      </div>
                      <div className="h-[5vh] pt-1 flex font-bold justify-between">
                        <div>Total cost of offset</div>
                        {state ? <div>{state.calCarbon} ฿</div> : null}
                      </div>
                      <div className="h-[5vh] mt-4 pt-1">
                        <button
                          onClick={() => window.my_modal_3.showModal()}
                          className="w-[24vw] btn capitalize rounded-3xl bg-[#068758] text-white border-none hover:bg-[#3DAD5C]"
                        >
                          Purchase
                        </button>
                      </div>

                      <dialog id="my_modal_3" className="modal text-[#767494]">
                        <div className="w-[25vw] h-[55vh] p-14 bg-white rounded-xl flex items-center flex-col justify-around">
                          <div className="text-[25px] font-bold text-black mb-[15px]">
                            Purchased Success
                          </div>
                          <div>
                            <img
                              src={Vector}
                              className="mb-[15px]"
                              alt="success"
                            />
                          </div>
                          <div className="w-full flex items-center flex-col mb-[20px]">
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
                    </div>
                  </div>
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
