import React, { useState } from "react";
import { food, travel, co2, line } from "../assets/icons";
import Dropdown from "./dropdownFood";

const Calculate = () => {
  const [amount, setAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");
  const [showOffsetZone, setShowOffsetZone] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleAmountChange = (e) => {
    const input = e.target.value;
    const isValidInput = /^\d*\.?\d*$/.test(input);

    if (input === "") {
      setAmount("");
      setFormattedAmount("");
    } else if (isValidInput) {
      const parsedAmount = parseFloat(input);
      if (parsedAmount <= 5000) {
        setAmount(parsedAmount);
        // Format the amount with two decimal places
        const formatted = parsedAmount.toFixed(2);
        setFormattedAmount(formatted);
      }
    }
  };

  const handleCalculate = () => {
    setShowOffsetZone(true);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="card w-[55vw] h-[60vh] bg-white shadow-xl my-[3rem] z-10">
      <div className="card-body">
        <div className="flex flex-row divide-x">
          {/* calculate zone*/}
          <div className="flex flex-col mt-3 ml-4">
            <div>
              <p className="text-black text-[15px] font-bold font-medium">
                Select your offset method
              </p>
            </div>
            {/* Offset method */}
            <div className="flex items-center my-5">
              <button className="w-[9vw] btn h-[4vh] capitalize rounded-sm bg-[#DEEFED] border-2 border-[#068758] text-[#068758] hover:bg-[#B5D4D0] hover:border-[#068758] mr-4">
                <img src={food} className="w-[23px]" />
                Food
              </button>
              <button className="w-[9vw] btn h-[4vh] capitalize rounded-sm bg-white border-2 border-[#767494] text-[#767494] hover:bg-[#D7D7D7] hover:border-[#767494]">
                <img src={travel} className="w-[26px]" />
                Travel
              </button>
            </div>
            <div className="my-2">
              <p className="text-black text-[15px] font-bold font-medium">
                Menu
              </p>
            </div>
            {/* Drop down file is in component folder*/}
            <div className="relative">
              <Dropdown onMenuItemClick={handleMenuItemClick} />
            </div>
            {/* Amount Input */}
            <div className="mt-4 mb-2">
              <p className="text-black text-[15px] font-bold font-medium">
                Enter amount of your food (Maximum 5000)
              </p>
            </div>
            <div className="relative mr-10">
              <input
                value={amount}
                onChange={handleAmountChange}
                className="w-[23vw] h-[5vh] rounded-sm bg-white border-2 border-[#068758] pl-5 outline-none font-medium text-sm text-[#068758]"
                placeholder="Ex. 1, 2, 3,..."
              />
            </div>
            <div className="mt-[4rem]">
              <button
                className="w-[23vw] btn h-[4vh] capitalize rounded-3xl bg-[#068758] text-white border-none"
                onClick={handleCalculate}
              >
                Calculate
              </button>
            </div>
          </div>
          {/* offset zone*/}
          {showOffsetZone && (
            <div className="flex flex-col mt-3">
              {/* z1 */}
              <div>
                <p className="text-black text-[15px] font-bold font-medium ml-8">
                  Your Carbon Footprint
                </p>
              </div>
              <div className="mt-3">
                <img src={co2} className="w-[23vw] ml-[2rem]" />
              </div>
              <div className="text-black text-[15px] font-bold font-medium ml-8 my-3">
                <p>Food Footprint</p>
              </div>
              {/* z2 */}
              <div className="flex flex-row">
                {/* food name */}
                <div>
                  <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[16rem] text-[#8D8BA7]">
                    {selectedMenuItem}
                  </p>
                </div>
                {/* food amount */}
                <div>
                  <p className="text-black text-[15px] font-bold font-medium text-[#8D8BA7]">
                    {formattedAmount}
                  </p>
                </div>
              </div>
              <div className="mt-2 ml-7">
                <img src={line} className="w-[22vw]" />
              </div>
              <div className="flex flex-row mt-3">
                <div>
                  <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[12.6rem] text-[#8D8BA7]">
                    Food (gram)
                  </p>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold font-medium text-[#8D8BA7]">
                    4320
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <div>
                  <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[8.5rem] text-[#8D8BA7]">
                    Total Kilogram Carbon
                  </p>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold font-medium text-[#8D8BA7]">
                    126.9
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <div>
                  <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[10.8rem] text-[#5D5C71]">
                    Cost of Offset
                  </p>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold font-medium text-[#5D5C71]">
                    191.85 ฿
                  </p>
                </div>
              </div>
              <div className="mt-[1.4rem] ml-5">
                <button className="w-[23vw] btn h-[4vh] capitalize rounded-3xl bg-[#FFC93C] text-black border-none">
                  Offset now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculate;
