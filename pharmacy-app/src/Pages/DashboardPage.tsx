import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UserModal from '../Components/UserModal';

const fetchUsers = async () => {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DashboardPage: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

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
        <h1 className="text-3xl font-bold text-center text-green-900 mb-8">جستجوی بیماران</h1>
        <div className="flex flex-col bg-white flex-wrap md:flex-row rounded-[16px] p-4 w-full md:w-[85%] lg:w-[80%] xl:w-[70%] m-auto justify-center items-center gap-4 mb-8">
          <div className="items-center text-right block md:w-auto">
            <label id='codeuser' htmlFor="" className="block text-right mb-2">کد اشتراک</label>
            <div className="relative">
              <input
                id='codeuser'
                type="text"
                placeholder="مثال: 101"
                className="p-2 pr-10 rounded-[12px] w-[265px] md:w-[270px] focus:outline-none bg-[#91FFF1] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="block items-center md:w-auto">
            <label id='numuser' className='block text-right mb-2' htmlFor="">شماره تلفن</label>
            <div className="relative">
              <input
                id='numuser'
                type="text"
                placeholder="مثال: 09100000000"
                className="p-2 pr-10 rounded-[12px] w-[265px] md:w-[270px] focus:outline-none bg-[#91FFF1]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
          <div className="block items-center md:w-auto">
            <label id='nameuser' className='block text-right mb-2' htmlFor="">نام و نام خانوادگی</label>
            <div className="relative">
              <input
                id='nameuser'
                type="text"
                placeholder="مثال: محمد محمدی"
                className="p-2 pr-10 rounded-[12px] w-[265px] md:w-[270px] focus:outline-none bg-[#91FFF1]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[800px] mx-auto px-4 place-items-center">
          {users.map((user: any) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-4 text-center w-full sm:w-[230px] md:w-[270px]">
              <h2 className="text-xl font-bold mb-2 text-green-800">کد اشتراک: {user.subscriptionCode}</h2>
              <p className="mb-2 text-green-700">نام: {user.name}</p>
              <button onClick={() => openModal(user)} className="bg-[#91FFF1] py-2 text-[#02564B] px-4 rounded-[12px] hover:bg-green-700 transition-colors">
                مشاهده جزئیات
              </button>
            </div>
          ))}
        </div>
        
        {isModalOpen && selectedUser && (
          <UserModal isOpen={isModalOpen} onClose={closeModal} user={selectedUser} />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;