// ایمپورت کتابخانه‌ها و کامپوننت‌های مورد نیاز
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UserModal from '../Components/UserModal';

// تابع برای گرفتن لیست کاربران از API
const fetchUsers = async () => {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DashboardPage: React.FC = () => {
  // استفاده از useQuery برای گرفتن داده‌های کاربران از API
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'], 
    queryFn: fetchUsers 
  });

  // تعریف state برای ذخیره کاربر انتخاب‌شده
  const [selectedUser, setSelectedUser] = useState(null);

  // تعریف state برای مدیریت باز و بسته بودن مودال
  const [isModalOpen, setIsModalOpen] = useState(false);

  // تابعی برای باز کردن مودال و تنظیم کاربر انتخاب‌شده
  const openModal = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // تابعی برای بستن مودال و پاک کردن کاربر انتخاب‌شده
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (isLoading) return <div className="text-center mt-20">در حال بارگذاری...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">خطا: {error.message}</div>;

  const users = data || [];

  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(101.78deg, #059784 0.01%, #0CF9DA 117.98%)' }}>
      <div className="relative p-6 mx-auto md:mx-0 2xl:mr-[220px] xl:mr-[200px] lg:mr-[180px] md:mr-[190px]">
        <h1 className="text-3xl font-black text-center mb-8">جستجوی بیماران</h1>
        <div className="flex flex-col bg-white flex-wrap md:flex-row rounded-[16px] p-4 w-full md:w-[85%] lg:w-[80%] xl:w-[70%] m-auto justify-center items-center gap-4 mb-8">
          <div className="items-center text-right block md:w-auto">
            <label id='codeuser' htmlFor="" className="block mr-[10px] text-right mb-2">کد اشتراک</label>
            <div className="relative">
              <input
                id='codeuser'
                type="text"
                placeholder="مثال: 101"
                className="p-2 pr-10 rounded-[12px] w-[265px] md:w-[320px] focus:outline-none bg-[#91FFF1] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="block items-center md:w-auto">
            <label id='numuser' className='block mr-[10px] text-right mb-2' htmlFor="">شماره تلفن</label>
            <div className="relative">
              <input
                id='numuser'
                type="text"
                placeholder="مثال: 09100000000"
                className="p-2 pr-10 rounded-[12px] w-[265px] md:w-[200px] focus:outline-none bg-[#91FFF1]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
          <div className="block items-center md:w-auto">
            <label id='nameuser' className='block text-right mr-[10px] mb-2' htmlFor="">نام و نام خانوادگی</label>
            <div className="relative">
              <input
                id='nameuser'
                type="text"
                placeholder="مثال: محمد محمدی"
                className="p-2 pr-10 rounded-[12px] w-[265px] md:w-[200px] focus:outline-none bg-[#91FFF1]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-[40px] max-w-[1400px]">
          <div className="flex flex-wrap justify-center mt-[50px]">
            {users.map((user: any) => (
              <div 
                key={user.id} 
                className="bg-white rounded-[24px] p-6 text-center w-[240px] mx-4 mb-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col relative"
              >
                <div 
                  className="w-[60px] h-[60px] rounded-[16px] text-white text-2xl font-bold flex items-center justify-center mb-4 absolute top-[-30px] left-[20px]"
                  style={{ background: 'linear-gradient(101.78deg, #059784 0.01%, #0CF9DA 117.98%)' }}
                >
                  {user.subscriptionCode}
                </div>
                <h2 className="text-[#737373] text-[16px] font-bold mb-2 text-right">
                  نام و نام خانوادگی:
                </h2>
                <p className="text-black text-[24px]  h-[70px] font-bold flex justify-start items-center  text-right">
                  {user.name}
                </p>
                <button 
                  onClick={() => openModal(user)} 
                  className="bg-white text-[#059784] text-[15px] relative bottom-[-10px] font-bold py-2 px-4 rounded-[16px] hover:bg-[#059784] hover:text-white transition-all duration-300"
                >
                  مشاهده جزئیات
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {isModalOpen && selectedUser && (
          <UserModal isOpen={isModalOpen} onClose={closeModal} user={selectedUser} />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;