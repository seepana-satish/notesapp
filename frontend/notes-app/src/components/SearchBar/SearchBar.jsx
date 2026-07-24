import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({
  value,
  onChange,
  handleSearch,
  onClearSearch,
}) => {
  return (
    <div className="w-full h-14 flex items-center px-5 bg-gray-50 border border-gray-200 rounded-full shadow-sm">

      <FaMagnifyingGlass
        className="text-gray-400 text-lg cursor-pointer hover:text-blue-500 transition"
        onClick={handleSearch}
      />

      <input
        type="text"
        placeholder="Search notes..."
        className="flex-1 bg-transparent px-4 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-gray-400 text-xl cursor-pointer hover:text-red-500 transition"
          onClick={onClearSearch}
        />
      )}

    </div>
  );
};

export default SearchBar;