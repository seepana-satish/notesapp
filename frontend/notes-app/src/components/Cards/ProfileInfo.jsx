import React from "react";
import { getInitials } from "../../utils/helper";
import { LogOut } from "lucide-react";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-5">

      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
        {getInitials(userInfo?.fullName)}
      </div>

      {/* Username */}
      <p className="hidden sm:block text-base font-semibold text-gray-800">
        {userInfo?.fullName}
      </p>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
      >
        <LogOut size={18} />
        <span className="hidden sm:block">Logout</span>
      </button>

    </div>
  );
};

export default ProfileInfo;