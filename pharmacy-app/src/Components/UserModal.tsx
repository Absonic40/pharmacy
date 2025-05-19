import React, { useState } from 'react'; 
import logo from '../Image/Home/logo.png'; // ایمپورت لوگو

interface User { 
  subscriptionCode: string;
  name: string;
  phone: string;
  address: string;
}

interface UserModalProps { // اینترفیس برای تعریف پراپ‌های UserModal
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

// کامپوننت UserModal
const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => { // تعریف کامپوننت UserModal
  const [isEditing, setIsEditing] = useState(false); // state برای وضعیت ویرایش
  const [formData, setFormData] = useState(user); // state برای فرم

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // تابع برای تغییرات فرم
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isOpen) return null; // اگر مودال باز نیست، هیچی برنگردون

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 print:w-[100%]" onClick={onClose}>
      <div className="bg-white rounded-[16px] shadow-lg p-3 w-[320px] relative" onClick={(e) => e.stopPropagation()}> 
        <div
          className="border-[1px] border-black rounded-[12px] p-[20px]"
        >
          <button className="absolute top-6 right-6 text-red-500" onClick={onClose}>
            ✖
          </button>

          {/* لوگو */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </div>

          <div className="mb-4">
            <div className="flex items-center text-center justify-center border-[3.5px] border-[#059784] rounded-[12px] p-1">
              <span className="text-gray-700 font-bold text-[30px]">کد اشتراک:</span>
              <span className="mr-2 font-extrabold text-[#059784] text-[30px] fa-num">
                {formData.subscriptionCode}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mr-[10px] font-bold mb-2">
              نام و نام خانوادگی بیمار
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly={!isEditing}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg focus:outline-none ${
                isEditing ? 'border-[#059784]' : 'border-[#8A9392]'
              } border-[1px]`}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mr-[10px] font-bold mb-2">شماره تلفن</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              readOnly={!isEditing}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg focus:outline-none ${
                isEditing ? 'border-[#059784]' : 'border-[#8A9392]'
              } border-[1px]`}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mr-[10px] mb-2">آدرس</label>
            <textarea
              name="address"
              value={formData.address}
              readOnly={!isEditing}
              onChange={handleChange}
              className={`w-full border-[1px] rounded-lg focus:outline-none p-2 resize-none ${
                isEditing ? 'border-[#059784]' : 'border-[#8A9392]'
              }`}
              rows={3} 
            />
          </div>

          {isEditing ? (
            <div className="flex flex-col gap-3 mt-6">
              <button 
                onClick={() => setIsEditing(false)} 
                className="w-full bg-[#059784] text-[#C3FFF7] py-2 px-4 rounded-lg hover:bg-[#059784] hover:text-white transition-colors"
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
              <button 
              onClick={()=>{ 
                window.print()
              }}
               className="w-full print:hidden bg-[#059784] text-[#C3FFF7] py-2 px-4 rounded-lg hover:bg-[#059784] hover:text-white transition-colors">
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
    </div>
  );
};

export default UserModal;