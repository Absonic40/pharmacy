import React from 'react';
import Nav from './Nav';

// تعریف نوع برای پراپرتی‌های کامپوننت Layout
interface LayoutProps {
  children: React.ReactNode; // پراپرتی children که نوع آن ReactNode است
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Nav />
      <main className="flex-1">
        {/* محتوای فرزند که از پراپرتی children دریافت می‌شود */}
        {children}
      </main>
    </div>
  );
};

export default Layout; 