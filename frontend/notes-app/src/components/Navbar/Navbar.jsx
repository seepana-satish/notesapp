import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    onSearchNote("");
  };

  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <h2 className="text-3xl font-bold text-blue-600 tracking-wide">
            Notes
          </h2>
        </div>

        {/* Search */}
        <div className="w-full md:flex-1 md:px-10 flex justify-center">
          <div className="w-full md:max-w-xl">
            <SearchBar
              value={searchQuery}
              onChange={({ target }) => setSearchQuery(target.value)}
              handleSearch={handleSearch}
              onClearSearch={onClearSearch}
            />
          </div>
        </div>

        {/* Profile */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <ProfileInfo
            userInfo={userInfo}
            onLogout={onLogout}
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;