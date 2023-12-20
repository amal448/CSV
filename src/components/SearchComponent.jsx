// Selector.js
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch data or set options directly based on your requirements
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected ? selected : "Search "}
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
            placeholder="Enter GHL field"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {options?.map((option) => (
          <li
            key={option}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              option?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              option?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (option?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(option);
                setOpen(false);
                setInputValue("");
                onSelect(option); // Notify the parent component about the selection
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