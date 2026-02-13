import { Sidebar } from "@components";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-4 text-xl font-bold">Welcome To Dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
