import { useState } from "react";
import { DashboardCards, Sidebar, LogOutPopupMessage } from "@container";

const Dashboard = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 relative">
        <div className="p-2 text-xl font-bold">Welcome To Dashboard</div>
        <DashboardCards />

        {showLogoutModal && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
            onClick={() => setShowLogoutModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <LogOutPopupMessage
                isOpen={showLogoutModal}
                onConfirm={() => {
                  handleLogout();
                  setShowLogoutModal(false);
                }}
                onCancel={() => setShowLogoutModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;