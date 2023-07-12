import React, { useState } from "react";
import Offset from "../components/offset";
import { ChevronRigth, Co2 } from "../assets/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { Link } from "react-router-dom";

const OffsetByRetailCC = () => {
  const [selectedOffsetMethod, setSelectedOffsetMethod] = useState("retailCC");
  const [retailCC, setRetailCC] = useState("");

  const handleOffsetMethodChange = (method) => {
    setSelectedOffsetMethod(method);
    setRetailCC("");
  };

  const handleRetailCCChange = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure the input value is not greater than the maximum
    let maxValue = 100000;
    if (selectedOffsetMethod === "metricTons") {
      maxValue = 100;
    }
    const parsedValue = parseFloat(input);
    const sanitizedInput = isNaN(parsedValue)
      ? ""
      : Math.min(parsedValue, maxValue).toString();

    setRetailCC(sanitizedInput);
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
      <div className="flex flex-col h-[867px] md:h-[760px] 2xl:h-[867px] text-black w-full p-20">
        <div className="flex h-14 w-[55vw] md:w-[59vw] 2xl:w-[55vw] justify-between items-center">
          <div className="pl-[10vw] flex text-[20px] md:text-[15px] 2xl:text-[20px] items-center justify-evenly text-[#767494]">
            <Link to="/chooseOffset" className="mr-4">Offset</Link>
            <div className="mr-4">
              <img src={ChevronRigth} alt="picture" />
            </div>
            <div>Offset by retail cc</div>
          </div>
          <div className="text-[40px] font-bold">Offset by Retail CC</div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="w-[70vw] h-[60vh] bg-[#FFFFFF] rounded-2xl p-20 flex justify-between">
            <div className="w-[35vw] h-full">
              <div className="font-bold text-[20px]">
                Select your offset method
              </div>
              {/* Offset method */}
              <div className="flex mt-3">
                <div
                  className={`w-[13vw] h-[5vh] btn capitalize rounded-sm ${
                    selectedOffsetMethod === "retailCC"
                      ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                      : "bg-white border-2 border-[#767494] text-[#767494]"
                  } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                  onClick={() => handleOffsetMethodChange("retailCC")}
                >
                  <div>
                    <AiOutlineCopyrightCircle size={22} />
                  </div>
                  Retail CC
                </div>
                <div
                  className={`w-[13vw] h-[5vh] btn capitalize rounded-sm ${
                    selectedOffsetMethod === "metricTons"
                      ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                      : "bg-white border-2 border-[#767494] text-[#767494]"
                  } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                  onClick={() => handleOffsetMethodChange("metricTons")}
                >
                  <div>
                    <TbWeight size={22} />
                  </div>
                  Metric Tons
                </div>
              </div>

              {/* Input zone */}
              <div className="mt-5 h-[25vh]">
                <div className="font-bold text-[20px]">
                  {selectedOffsetMethod === "retailCC"
                    ? "Enter the amount of Retail CC (max: 100,000)"
                    : "Enter the amount of carbon that you want to offset (max: 100)"}
                </div>
                <div className="mt-4">
                  <input
                    className="w-[35vw] h-[50px] border-2 border-[#767494] bg-white pl-2 outline-none"
                    placeholder={
                      selectedOffsetMethod === "retailCC"
                        ? "Enter Retail CC"
                        : "Enter carbon offset amount"
                    }
                    type="number"
                    max={selectedOffsetMethod === "retailCC" ? 100000 : 100}
                    value={retailCC} // Bind the input value to the retailCC state variable
                    onChange={handleRetailCCChange} // Handle the value change
                  />
                </div>
              </div>

              <div className=" flex items-center justify-center">
                <button className="w-[35vw] h-[5vh] rounded-3xl bg-[#068758] hover:bg-[#046441] transition text-white">
                  Calculate
                </button>
              </div>
            </div>

            <hr className="w-[1px] h-[45vh] bg-[#BCBACD] mr-16 ml-16" />
            <div className="w-[35vw] h-full">
              <div className="font-bold text-[20px]">Your Carbon Footprint</div>
              <div className="mt-3">
                <img className="ml-4" src={Co2} alt="Co2" />
              </div>
              <div className=" mt-5 h-[19vh]">
                <div className="text-[20px]">Offset by Retail CC</div>
                <div className="flex justify-between mt-2 text-[#767494]">
                  <div className="relative">
                    <div>Offset retail cc</div>
                    <hr className="w-[19vw] absolute top-9 bg-[#BCBACD]" />
                    <div className="mt-8">Total retail cc</div>
                    <div className="mt-3 font-bold">Cost of Offset</div>
                  </div>

                  {/* amount */}
                  <div>
                    {retailCC && (
                      <div className="text-sm text-[#767494] mt-2">
                        {retailCC}
                      </div>
                    )}
                    <div style={{marginTop: retailCC ? null : "55px" }} className="mt-8">0.0</div>
                    <div className="mt-3 font-bold">0.0</div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center mt-1">
                <button className="w-full h-[5vh] rounded-3xl bg-[#FFC93C] hover:bg-[#cfa230] transition text-black">
                  Offset Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Offset>
  );
};

export default OffsetByRetailCC;
