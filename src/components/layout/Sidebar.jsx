import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { 
  LayoutDashboard, 
  MapPin, 
  ClipboardList, 
  Users, 
  BarChart2, 
  Settings,
  X
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const { isAdmin, isFieldWorker, isVolunteer } = useAuth();

  const getNavItems = () => {
    const items = [
      { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    ];

    if (isAdmin || isFieldWorker) {
      items.push({ path: "/needs", label: "Community Needs", icon: MapPin });
    }

    if (isAdmin || isVolunteer) {
      items.push({ path: "/tasks", label: "My Tasks", icon: ClipboardList });
    }

    if (isAdmin) {
      items.push({ path: "/volunteers", label: "Volunteers", icon: Users });
      items.push({ path: "/analytics", label: "Analytics", icon: BarChart2 });
    }

    return items;
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-40 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 md:hidden border-b border-gray-100">
          <span className="font-semibold text-gray-700">Menu</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 768) onClose(); }}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all group
                ${isActive 
                  ? "bg-green-50 text-green-700" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 transition-colors ${isActive ? "text-green-600" : "text-gray-400 group-hover:text-green-600"}`} />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Footer Settings Area */}
        <div className="p-4 border-t border-gray-100">
          <NavLink
            to="/settings"
            onClick={() => { if(window.innerWidth < 768) onClose(); }}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all group
              ${isActive 
                ? "bg-gray-100 text-gray-900" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            <Settings className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            Settings
          </NavLink>
        </div>
      </aside>
    </>
  );
}
