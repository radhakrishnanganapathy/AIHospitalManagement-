import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">

        <div className="relative">
          <Search className="text-gray-500" />
        </div>

        <div className="relative cursor-pointer">
          <Bell size={22} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
            5
          </span>
        </div>

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-full"
          />

          <div>
            <p className="font-semibold">Admin</p>
            <small className="text-gray-500">
              Administrator
            </small>
          </div>

        </div>

      </div>

    </header>
  );
}