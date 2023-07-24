import axios from "axios";
import React, { useState, useEffect } from "react";

const Dropdown = ({ onMenuItemClick, setFoodData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [carbonFoodList, setCarbonFoodList] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (event, menuItem, foodData) => {
    event.preventDefault();
    setSelectedMenuItem(menuItem);
    onMenuItemClick(menuItem);
    setIsOpen(false);
    // add this line
    setFoodData(foodData);
  };

  const getCarbonFoodList = async () => {
    const res = await axios.get(
      "http://localhost:5001/carbon/getAllCarbonFoodList"
    );
    setCarbonFoodList(res.data.result);
  };

  useEffect(() => {
    getCarbonFoodList();
  }, []);

  return (
    <>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="w-[23vw] text-[#068758] bg-white hover:bg-[#068758] focus:ring-1 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#E6E6E6] dark:focus:ring-[#00B573] border-2 border-[#068758]"
        type="button"
      >
        {selectedMenuItem ? selectedMenuItem : "Select Menu"}{" "}
        <svg
          className="w-2.5 h-2.5 ml-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[23vw] h-[150px] overflow-y-auto dark:bg-white absolute"
        >
          <ul
            className="py-2 text-sm text-black dark:text-black"
            aria-labelledby="dropdownDefaultButton"
          >
            {carbonFoodList
              ? carbonFoodList.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={(event) =>
                          handleMenuItemClick(
                            event,
                            item.cc_name,
                            item.cc_amount
                          )
                        }
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
                      >
                        {item.cc_name}
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
