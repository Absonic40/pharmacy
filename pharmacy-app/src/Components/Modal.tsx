import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string; // کد اشتراک
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, code }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-50 flex items-center justify-center min-h-screen">
        <div 
          className="bg-white p-6 rounded-lg shadow-lg relative max-w-md mx-4" 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-2 right-2 text-xl hover:text-gray-700" 
            onClick={onClose}
          >
            ✖
          </button>
          <h2 className="text-md font-bold mt-4 text-center">
            لطفا کد اشتراک مشتری را یادداشت کنید.
          </h2>
          <div className="bg-gradient-to-r from-[#059784] to-[#0CF9DA] p-4 rounded mt-4 text-center text-xl font-semibold">
            {code}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 