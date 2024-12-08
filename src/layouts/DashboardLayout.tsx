import { SideBar } from '../components';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className="overflow-y-scroll w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
      <div className="flex flex-row relative w-screen">
        <SideBar />

        <div className="w-full p-4 text-white">
          <Outlet />
        </div>

      </div>

    </div>
  );
};