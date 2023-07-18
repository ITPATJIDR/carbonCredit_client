import React, { useState } from "react";
import { co2, line } from "../assets/icons";
import DropdownFood from "./dropdownFood";
import DropdownVehicle from "./dropdownVehicle";
import { MdOutlineFastfood } from "react-icons/md";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

const Calculate = () => {
  const [amount, setAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");
  const [showOffsetZone, setShowOffsetZone] = useState(false);
  const [selectedOffsetMethod, setSelectedOffsetMethod] = useState("food");
  const [selectedFoodMenuItem, setSelectedFoodMenuItem] = useState("");
  const [selectedVehicleMenuItem, setSelectedVehicleMenuItem] = useState("");
  const [vehicleData, setVehicleData] = useState({});
  const [calResult, setCalResult] = useState({});

  const handleAmountChange = (e) => {
    const input = e.target.value;
    const isValidInput = /^\d*\.?\d*$/.test(input);

    if (input === "") {
      setAmount("");
      setFormattedAmount("");
    } else if (isValidInput) {
      const parsedAmount = parseFloat(input);
      if (parsedAmount <= 10000) {
        setAmount(parsedAmount);
        // Format the amount with two decimal places
        const formatted = parsedAmount.toFixed(2);
        setFormattedAmount(formatted);
      }
    }
  };

  const handleCalculate = () => {
    if (selectedVehicleMenuItem || selectedFoodMenuItem) {
      if (amount) {
        setShowOffsetZone(true);
        if (selectedOffsetMethod === "travel") {
          handleCalculateVehicle();
        }
      }
    }
  };

  const handleFoodMenuItemClick = (menuItem) => {
    setSelectedFoodMenuItem(menuItem);
  };

  const handleVehicleMenuItemClick = (menuItem) => {
    setSelectedVehicleMenuItem(menuItem);
  };

  const handleCalculateVehicle = async () => {
    const res = await axios.post("http://localhost:5001/carbon/calVehicle", {
      distance_value: amount,
      vehicle_model_id: vehicleData.data.id,
    });
    setCalResult(res.data.data);
  };

  const handleOffsetMethodChange = (method) => {
    setSelectedOffsetMethod(method);
    setSelectedFoodMenuItem("");
    setSelectedVehicleMenuItem("");
    setAmount("");
    setFormattedAmount("");
    setShowOffsetZone(false);
  };

  const calCarbon = Math.ceil(
    Math.ceil(calResult.data?.attributes.carbon_kg) * 1.5
  );

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
              <button
                className={`w-[9vw] btn h-[4vh] capitalize rounded-sm ${
                  selectedOffsetMethod === "food"
                    ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                    : "bg-white border-2 border-[#767494] text-[#767494]"
                } hover:bg-[#B5D4D0] hover:border-[#068758] mr-4`}
                onClick={() => handleOffsetMethodChange("food")}
              >
                <div className="">
                  <MdOutlineFastfood size={20} />
                </div>
                Food
              </button>
              <button
                className={`w-[9vw] btn h-[4vh] capitalize rounded-sm ${
                  selectedOffsetMethod === "travel"
                    ? "bg-[#DEEFED] border-2 border-[#068758] text-[#068758]"
                    : "bg-white border-2 border-[#767494] text-[#767494]"
                } hover:bg-[#D7D7D7] hover:border-[#767494]`}
                onClick={() => handleOffsetMethodChange("travel")}
              >
                <div className="">
                  <BiSolidPlaneTakeOff size={22} />
                </div>
                Travel
              </button>
            </div>
            <div className="my-2">
              <p className="text-black text-[15px] font-bold font-medium">
                {selectedOffsetMethod === "food" ? "Menu" : "Vehicle"}
              </p>
            </div>
            {/* Drop down file is in component folder*/}
            <div className="relative">
              {selectedOffsetMethod === "food" ? (
                <DropdownFood onMenuItemClick={handleFoodMenuItemClick} />
              ) : selectedOffsetMethod === "travel" ? (
                <DropdownVehicle
                  onMenuItemClick={handleVehicleMenuItemClick}
                  setVehicleData={setVehicleData}
                />
              ) : null}
            </div>
            {/* Amount Input */}
            <div className="mt-4 mb-2">
              <p className="text-black text-[15px] font-bold font-medium">
                {selectedOffsetMethod === "food"
                  ? "Enter amount of your food (Maximum 10k)"
                  : selectedOffsetMethod === "travel"
                  ? "Enter distance of your travel"
                  : ""}
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

          <div className="flex flex-col mt-3">
            <div>
              <div>
                <p className="text-black text-[15px] font-bold font-medium ml-8">
                  Your Carbon Footprint
                </p>
              </div>
              <div className="mt-3">
                <img src={co2} className="w-[23vw] ml-[2rem]" />
              </div>
            </div>

            <div>
              <div>
                <div className="text-black text-[15px] font-bold font-medium ml-8 my-3">
                  <p>Food Footprint</p>
                </div>
                <div className="flex flex-row justify-between">
                  {/* Selected name */}
                  <div>
                    <p className="text-black text-[15px] font-bold font-medium ml-8 text-[#8D8BA7]">
                      {selectedOffsetMethod === "food"
                        ? selectedFoodMenuItem
                        : selectedOffsetMethod === "travel"
                        ? selectedVehicleMenuItem
                        : ""}
                    </p>
                  </div>
                  {/* Enter amount */}
                  <div>
                    <p className="text-black font-medium">{formattedAmount}</p>
                  </div>
                </div>
                <div className="mt-2 ml-7">
                  <img src={line} className="w-[23vw]" />
                </div>
              </div>

              {/* Offset zone */}
              {showOffsetZone ? (
                <div>
                  <div className="flex flex-row mt-3 justify-between">
                    <div>
                      <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[8.5rem] text-[#8D8BA7]">
                        Total Kilogram Carbon
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-[15px] font-bold font-medium text-[#8D8BA7]">
                        {calResult?.data
                          ? calResult.data?.attributes.carbon_kg
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 justify-between">
                    <div>
                      <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[10.8rem] text-[#5D5C71]">
                        Coin
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-[15px] font-bold font-medium text-[#5D5C71]">
                        {calResult?.data
                          ? calCarbon
                            ? Math.ceil(calResult.data?.attributes.carbon_kg)
                            : null
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 justify-between">
                    <div>
                      <p className="text-black text-[15px] font-bold font-medium ml-8 mr-[10.8rem] text-[#5D5C71]">
                        Cost of Offset
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-[15px] font-bold font-medium text-[#5D5C71]">
                        {calResult?.data
                          ? calCarbon
                            ? calCarbon
                            : null
                          : null}
                        {"\u00A0"} ฿
                      </p>
                    </div>
                  </div>
                  <div className="mt-[1.4rem] ml-5">
                    <Link to="/purchase">
                      <button className="w-[23vw] btn h-[4vh] capitalize rounded-3xl bg-[#FFC93C] text-black border-none">
                        Offset now
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
