import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCog,
  CalendarDays,
  Settings,
  Receipt,
  Activity
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Patients",
    path: "/patients",
    icon: <Users size={20} />,
  },
  {
    name: "Doctors",
    path: "/doctors",
    icon: <UserCog size={20} />,
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: <CalendarDays size={20} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={20} />,
  },
  {
    name: "Billing",
    icon: <Receipt size={20} />,
    path: "/billing",
  },
  {
    name: "Reports",
    icon: <Activity size={20} />,
    path: "/reports",
  }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen">
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        🏥 AI Hospital
      </div>

      <nav className="mt-5">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 hover:bg-blue-600 ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            {menu.icon}
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}