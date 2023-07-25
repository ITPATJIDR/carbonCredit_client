import React, { useState } from "react";
import Offset from "../components/offset";
import { ChevronRigth, Co2 } from "../assets/image";
import { line2 } from "../assets/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OffsetByRetailCC = () => {
  const [selectedOffsetMethod, setSelectedOffsetMethod] = useState("retailCC");
  const [retailCC, setRetailCC] = useState("");
  const { isAuth, data } = useSelector((state) => state.auth);
  const [showResultZone, setShowResultZone] = useState(false);

  const handleCalculateClick = () => {
    setShowResultZone(true);
  };

  let costOfOffset = 0;

  if (selectedOffsetMethod === "retailCC") {
    costOfOffset = retailCC * 1.5;
  } else if (selectedOffsetMethod === "metricTons") {
    costOfOffset = Math.ceil(retailCC * 1000 * 1.5);
  }

  let offsetValue;
  if (selectedOffsetMethod === "retailCC") {
    offsetValue = retailCC;
  } else if (selectedOffsetMethod === "metricTons") {
    offsetValue = retailCC ? retailCC * 1000 : "";
  }

  const handleOffsetMethodChange = (method) => {
    setSelectedOffsetMethod(method);
    setRetailCC("");
  };

  const handleRetailCCChange = (e) => {
    let input = e.target.value;
    const isMetricTons = selectedOffsetMethod === "metricTons";

    if (!isMetricTons) {
      input = input.replace(/[^0-9]/g, "");
    } else {
      const parts = input.split(".");
      input = parts[0] + (parts[1] ? "." + parts[1].replace(/\./g, "") : "");
    }

    const maxValue = isMetricTons ? 100 : 100000;
    const parsedValue = parseFloat(input);
    const sanitizedInput = isNaN(parsedValue)
      ? ""
      : Math.min(parsedValue, maxValue).toString();

    setRetailCC(sanitizedInput);
    setShowResultZone(false);
  };

  return (
    <Offset>
      <style>
        {`
          /* Override default browser styles for number input */
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <div className="flex flex-col h-[95vh] text-black w-full">
        <div className="flex h-14 w-[55vw] w-full justify-center items-center mt-[50px]">
          <div className="text-[40px] font-bold">Offset by Retail CC</div>
        </div>
        <div className="flex items-center justify-center h-full mb-[100px]">
          <div className="card w-[55vw] h-[60vh] bg-white shadow-xl my-[3rem] z-10">
            <div className="card-body">
              {/* zone 1 */}
              <div className="flex flex-row divide-x">
                <div className="flex flex-col mt-3 ml-4">
                  <div className="font-bold text-[15px] font-medium">
                    Select your offset method
                  </div>
                  {/* Offset method */}
                  <div className="flex mt-3">
                    <div
                      className={`w-[10vw] h-[4vh] btn capitalize rounded-sm ${
                        selectedOffsetMethod === "retailCC"
                          ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                          : "bg-white border-2 border-[#767494] text-[#767494]"
                      } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                      onClick={() => handleOffsetMethodChange("retailCC")}
                    >
                      <div>
                        <AiOutlineCopyrightCircle size={20} />
                      </div>
                      Retail CC
                    </div>
                    <div
                      className={`w-[10vw] h-[4vh] btn capitalize rounded-sm ${
                        selectedOffsetMethod === "metricTons"
                          ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                          : "bg-white border-2 border-[#767494] text-[#767494]"
                      } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                      onClick={() => handleOffsetMethodChange("metricTons")}
                    >
                      <div>
                        <TbWeight size={20} />
                      </div>
                      Metric Ton
                    </div>
                  </div>

                  {/* Input zone */}
                  <div className="mt-5 h-[25vh]">
                    <div className="text-black text-[15px] font-bold font-medium">
                      {selectedOffsetMethod === "retailCC" ? (
                        <>
                          <div>Enter the amount of Retail CC</div>
                          <div className="text-gray-500 text-[12px]">
                            (Max: 100,000)
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            Enter the amount of carbon that you want to offset
                          </div>
                          <div className="text-gray-500 text-[12px]">
                            (Max: 1000 tons)
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-4">
                      <input
                        className="w-[23vw] h-[5vh] rounded-sm bg-white border-2 border-[#068758] pl-5 outline-none font-medium text-sm text-[#068758] mr-[30px]"
                        placeholder={
                          selectedOffsetMethod === "retailCC"
                            ? "Enter Retail CC"
                            : "Enter carbon offset amount"
                        }
                        type="number"
                        max={selectedOffsetMethod === "retailCC" ? 100000 : 100}
                        value={retailCC}
                        onChange={handleRetailCCChange}
                      />
                    </div>
                  </div>

                  <div className="mt-[15px]">
                    <button
                      className="w-[23vw] btn h-[4vh] capitalize rounded-3xl bg-[#068758] text-white border-none hover:bg-[#3DAD5C]"
                      onClick={handleCalculateClick}
                    >
                      Calculate
                    </button>
                  </div>
                </div>

                {/* Result zone */}
                <div className="flex flex-col mt-3">
                  <div className="w-[25vw] h-full pl-[30px]">
                    <div className="text-black text-[15px] font-bold font-medium">
                      Your Carbon Footprint
                    </div>
                    <div className="mt-3">
                      <img className="w-[23vw] ml-[0]" src={Co2} alt="Co2" />
                    </div>

                    <div className=" mt-5 h-[19vh]">
                      <div className="text-black text-[15px] font-bold font-medium">
                        Offset by Retail CC
                      </div>

                      {showResultZone && (
                        <div className="grid grid-cols-2 gap-y-1 gap-x-3">
                          {/* Coin */}
                          <div className="mt-2 flex items-center text-black text-[15px] font-bold font-medium">
                            <p>Coin</p>
                          </div>

                          {offsetValue && (
                            <div className="mt-2 text-black text-[15px] font-bold font-medium text-right">
                              {offsetValue}
                            </div>
                          )}

                          <div className="col-span-2 flex justify-center my-1">
                            <img src={line2} className="w-[23vw]" />
                          </div>

                          {/* Cost */}
                          <div className="flex mt-3 font-bold">
                            <p>Cost of Offset</p>
                          </div>
                          <div className="mt-3 text-right font-bold">
                            <div>{costOfOffset} ฿</div>
                          </div>
                          {/* my img line2 */}
                        </div>
                      )}
                    </div>
                    <div className=" flex items-center justify-center mt-1">
                      {costOfOffset ? (
                        <Link
                          to="/purchase"
                          state={{ calCarbon: costOfOffset, coin: offsetValue }}
                        >
                          <button className="w-[23vw] btn h-[4vh] capitalize rounded-3xl bg-[#FFC93C] text-black border-none hover:bg-[#F4B100]">
                            Offset now
                          </button>
                        </Link>
                      ) : (
                        <button className="w-[23vw] btn h-[4vh] capitalize rounded-3xl bg-[#FFC93C] text-black border-none hover:bg-[#F4B100]">
                          Offset now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Offset>
  );
};

export default OffsetByRetailCC;
