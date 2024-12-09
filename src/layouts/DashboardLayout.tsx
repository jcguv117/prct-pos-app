import { SideBar } from '../components';
import { Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const DashboardLayout = () => {
  return (
    <>
        <button 
          type="button" 
          data-drawer-target="default-sidebar" 
          data-drawer-toggle="default-sidebar" 
          aria-controls="default-sidebar" 
          class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 
              focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
          <span class="sr-only">Open sidebar</span>
          <FontAwesomeIcon icon={faBars} size='2xl'/>
        </button>

        <div 
          id="default-sidebar" 
          class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0" 
          aria-label="Sidebar"
            >
          <div class="h-full bg-gray-50 py-4 dark:bg-gray-800">
            <SideBar />
          </div>
        </div>

        <div class="p-8 sm:ml-64">
            <Outlet />
        </div>

    </>
  );
};