import { SideBar } from '../components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
        <button 
          type="button"
          onClick={toggleSidebar} 
          class={`fixed z-40 ms-3 px-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm bg-gray-600  hover:bg-gray-100 focus:outline-none focus:ring-2 
              focus:ring-gray-200 sm:hidden`}
              >
          <span class="sr-only text-white">Open</span>
          <FontAwesomeIcon icon={faBars} size='2xl'/>
        </button>

        <div 
          id="sidebar" 
          class={`fixed left-0 top-0 z-50 h-screen w-64 transition-transform sm:translate-x-0 
                ${showSidebar ? 'translate-x-0' : '-translate-x-full'} `}
            >
          <div class="h-full py-4 bg-gray-800">
            <SideBar />
          </div>
        </div>

        <div class="p-8 sm:ml-64" onClick={() => setShowSidebar(false)}>
            <Outlet />
        </div>

    </>
  );
};