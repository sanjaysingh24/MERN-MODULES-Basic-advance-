import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 text-white font-medium rounded-lg">
          Logout
        </button>
      </nav>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg h-screen p-6 rounded-r-2xl">
          <ul className="space-y-5">
            {["Overview", "Users", "Settings"].map((item) => (
              <li
                key={item}
                className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer hover:translate-x-1 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-semibold mb-6">Welcome Back! 👋</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Users
              </h3>
              <p className="text-3xl font-bold mt-3">1,024</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
              <p className="text-3xl font-bold mt-3">$8,540</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-700">
                New Orders
              </h3>
              <p className="text-3xl font-bold mt-3">56</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
