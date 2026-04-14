import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Bell, Menu, X, LogOut, User, Leaf } from "lucide-react";

export default function Navbar({ onMenuToggle }) {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-green-100 text-green-700 border-green-200";
      case "field_worker":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "volunteer":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const formatRoleName = (role) => {
    if (!role) return "";
    return role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50 px-4 md:px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="p-2 -ml-2 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-lg md:hidden transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/dashboard")}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold font-display text-green-700 tracking-tight hidden sm:block">
            CivicPulse
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 relative">
        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 p-1 pr-2 rounded-full hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center font-display border border-green-200">
              {userData?.name?.charAt(0).toUpperCase() || <User className="w-4 h-4" />}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-gray-700 leading-tight">
                {userData?.name || "User"}
              </p>
              <div className="flex items-center mt-0.5">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${getRoleBadgeColor(userData?.role)} uppercase tracking-wider`}>
                  {formatRoleName(userData?.role)}
                </span>
              </div>
            </div>
          </button>

          {/* Dropdown */}
          {showDropdown && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowDropdown(false)}
              ></div>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-slide-up origin-top-right">
                <div className="px-4 py-3 border-b border-gray-100 mb-1 sm:hidden">
                  <p className="text-sm font-medium text-gray-900">{userData?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{userData?.email}</p>
                  <div className="mt-2">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${getRoleBadgeColor(userData?.role)} uppercase tracking-wider`}>
                      {formatRoleName(userData?.role)}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block px-4 py-2 border-b border-gray-100 mb-1">
                  <p className="text-xs text-gray-500 truncate">{userData?.email}</p>
                </div>
                
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors flex items-center gap-2"
                  onClick={() => { setShowDropdown(false); /* Profile logic later */ }}
                >
                  <User className="w-4 h-4" /> Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4" /> Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
