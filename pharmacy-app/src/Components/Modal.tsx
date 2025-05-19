// ایمپورت کتابخانه‌های مورد نیاز
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// تعریف نوع پراپرتی‌های کامپوننت مودال
interface ModalProps {
  isOpen: boolean; // وضعیت باز یا بسته بودن مودال
  onClose: () => void; // تابع برای بستن مودال
  userId: string; // شناسه کاربر برای دریافت کد اشتراک
  code?: string; // پراپرتی اختیاری برای کد اشتراک
}

// تابع برای گرفتن کد اشتراک از API
const fetchSubscriptionCode = async (userId: string) => {
  const response = await fetch(`http://localhost:3001/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch subscription code');
  }
  const data = await response.json();
  return data.subscriptionCode; // فرض می‌کنیم کد اشتراک در این فیلد است
};


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, userId, code }) => {
  // اگر code از پراپرتی ارسال شده باشد، می‌توانید از آن استفاده کنید
  console.log(code);

  const { data: fetchedCode, isLoading, error } = useQuery({
    queryKey: ['subscriptionCode', userId],
    queryFn: () => fetchSubscriptionCode(userId),
    enabled: isOpen, // فقط زمانی که مودال باز است، درخواست ارسال شود
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="bg-black absolute inset-0 opacity-70"></div>
      <div className="flex justify-center items-center min-h-screen relative z-50">
        <div 
          className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 relative" 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="text-xl absolute hover:text-gray-700 right-2 top-2" 
            onClick={onClose}
          >
            ✖
          </button>
          <h2 className="text-center text-md font-bold mt-4">
            لطفا کد اشتراک مشتری را یادداشت کنید.
          </h2>
          <div className="bg-gradient-to-r p-4 rounded text-center text-xl font-semibold from-[#059784] mt-4 to-[#0CF9DA]">
            {isLoading && 'در حال بارگذاری...'}
            {error && 'خطا در دریافت کد اشتراک'}
            {fetchedCode && fetchedCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;