import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'; // وارد کردن فایل CSS برای استایل‌دهی
import App from './App';

// ایجاد یک نمونه از QueryClient برای مدیریت درخواست‌های سرور
const queryClient = new QueryClient();

// گرفتن ریشه DOM برای رندر کردن اپلیکیشن
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* فراهم کردن QueryClientProvider برای مدیریت درخواست‌های سرور */}
    <QueryClientProvider client={queryClient}>
      {/* کامپوننت اصلی اپلیکیشن */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);