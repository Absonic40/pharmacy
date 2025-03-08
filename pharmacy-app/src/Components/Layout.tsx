import React from 'react';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Nav />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout; 