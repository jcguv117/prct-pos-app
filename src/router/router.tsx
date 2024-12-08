import { createBrowserRouter, Navigate, Outlet, useLocation } from 'react-router-dom';

import { DashboardLayout } from '../layouts';
import { HomePage, MenuPage, OrderPage } from '../pages';

const Root = () => {
    const { pathname } = useLocation();
  
    if (pathname === '/') {
      return <Navigate to="/dashboard/home" />;
    }
    
    return (
      <main>
        <Outlet />
      </main>
    )
}

export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: 'home',
            element: <HomePage />
          },
          {
            path: 'menu',
            element: <MenuPage />
          },
          {
            path: 'orders',
            element: <OrderPage />
          },

        ]
      },
      {
        path: '*',
        element: <Navigate to="/dashboard/home" replace />
      }

    ],
  },
] );