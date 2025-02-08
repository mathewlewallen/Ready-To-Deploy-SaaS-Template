//app/src/admin/layout/DefaultLayout.tsx
import { type AuthUser } from 'wasp/auth';
import React, { useState, ReactNode, FC } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
interface Props {
  user: AuthUser;
  children?: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
  <div className="bg-boxdark2 text-bodydark min-h-screen flex overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={user} />
      <main className="mx-auto max-w-7xl p-6 md:p-8">
        {children}
      </main>
    </div>
  </div>
  );
};

export default DefaultLayout;
