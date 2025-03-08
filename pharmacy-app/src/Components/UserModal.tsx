import React, { useState } from 'react';
import logo from '../Image/Home/logo.png';

interface User {
  subscriptionCode: string;
  name: string;
  phone: string;
  address: string;
}

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[320px] relative">
        <button className="absolute top-4 right-4 text-red-500" onClick={onClose}>✖</button>
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        <div className="mb-4">
          <div className="flex items-center border-2 border-[#91FFF1] rounded-lg p-2">
            <span className="text-gray-700 font-bold">کد اشتراک:</span>
            <span className="mr-2 text-gray-800">{formData.subscriptionCode}</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">نام و نام خانوادگی بیمار</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly={!isEditing}
            onChange={handleChange}
            className="w-full p-2 border-2 border-[#91FFF1] rounded-lg focus:outline-none focus:border-[#059784]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">شماره تلفن</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            readOnly={!isEditing}
            onChange={handleChange}
            className="w-full p-2 border-2 border-[#91FFF1] rounded-lg focus:outline-none focus:border-[#059784]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">آدرس</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            readOnly={!isEditing}
            onChange={handleChange}
            className="w-full p-2 border-2 border-[#91FFF1] rounded-lg focus:outline-none focus:border-[#059784]"
          />
        </div>

        {isEditing ? (
          <div className="flex flex-col gap-3 mt-6">
            <button 
              onClick={() => setIsEditing(false)} 
              className="w-full bg-[#91FFF1] text-[#02564B] py-2 px-4 rounded-lg hover:bg-[#059784] hover:text-white transition-colors"
            >
              تایید
            </button>
            <button 
              onClick={() => setIsEditing(false)} 
              className="w-full text-red-500 hover:text-red-700 py-2 px-4"
            >
              لغو
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full bg-[#91FFF1] text-[#02564B] py-2 px-4 rounded-lg hover:bg-[#059784] hover:text-white transition-colors">
              پرینت
            </button>
            <button 
              onClick={() => setIsEditing(true)} 
              className="w-full bg-[#91FFF1] text-[#02564B] py-2 px-4 rounded-lg hover:bg-[#059784] hover:text-white transition-colors"
            >
              ویرایش اطلاعات
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;