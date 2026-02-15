import { DashboardCards, Sidebar } from "@container";

const Dashboard = () => {
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-2 text-xl font-bold">Welcome To Dashboard</div>
        <DashboardCards />
      </div>
    </div>
  );
};

export default Dashboard;
