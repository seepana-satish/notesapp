import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiStickyNoteFill } from "react-icons/ri";
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2 w-52">
            <RiStickyNoteFill className="text-3xl text-blue-600" />
            <h2 className="text-3xl font-bold text-blue-600">
              Notes
            </h2>
          </div>

          {/* Search */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl">
              <SearchBar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
              />
            </div>
          </div>

          {/* Profile */}
          <ProfileInfo
            userInfo={userInfo}
            onLogout={onLogout}
          />
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">

          {/* Top Row */}
          <div className="flex items-center justify-between">

            <HiOutlineMenu className="text-3xl text-gray-700" />

            <div className="flex items-center gap-2">
              <RiStickyNoteFill className="text-2xl text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-600">
                Notes
              </h2>
            </div>

            <div className="w-8"></div>

          </div>

          {/* Search */}
          <div className="mt-4">
            <SearchBar
              value={searchQuery}
              onChange={({ target }) => setSearchQuery(target.value)}
              handleSearch={handleSearch}
              onClearSearch={onClearSearch}
            />
          </div>

          {/* Profile */}
          <div className="mt-4 flex justify-center">
            <ProfileInfo
              userInfo={userInfo}
              onLogout={onLogout}
            />
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;