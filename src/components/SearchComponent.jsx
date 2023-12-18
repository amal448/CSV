// Selector.jsx

import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ options, onSelect, selectedValue, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch data if needed (you can pass options directly as a prop)
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selectedValue && "text-gray-700"
        }`}
      >
        {selectedValue
          ? selectedValue?.length > 25
            ? selectedValue?.substring(0, 25) + "..."
            : selectedValue
          : placeholder}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto absolute right-0 ${
          open ? "max-h-60" : "max-h-0"
        } z-10`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter search term"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {options?.map((option) => (
          <li
            key={option}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              option?.toLowerCase() === selectedValue?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              option?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (option?.toLowerCase() !== selectedValue?.toLowerCase()) {
                onSelect(option);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;