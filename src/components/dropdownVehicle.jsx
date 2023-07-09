import React, { useState } from "react";

const Dropdown = ({ onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (event, menuItem) => {
    event.preventDefault();
    setSelectedMenuItem(menuItem);
    onMenuItemClick(menuItem);
    setIsOpen(false);
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="w-[23vw] text-[#068758] bg-white hover:bg-[#068758] focus:ring-1 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#E6E6E6] dark:focus:ring-[#00B573] border-2 border-[#068758]"
        type="button"
      >
        {selectedMenuItem ? selectedMenuItem : "Select Vehicle"}{" "}
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
            <li>
              <a
                href="#"
                onClick={(event) => handleMenuItemClick(event, "Car")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
              >
                Car
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => handleMenuItemClick(event, "Taxi")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
              >
                Taxi
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => handleMenuItemClick(event, "Airplane")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
              >
                Airplane
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => handleMenuItemClick(event, "Boat")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
              >
                Boat
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => handleMenuItemClick(event, "Train")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
              >
                Train
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => handleMenuItemClick(event, "Motorcycle")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#068758] dark:hover:text-white"
              >
                Motorcycle
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
