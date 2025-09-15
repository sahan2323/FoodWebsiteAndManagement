import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 bg-white shadow-lg w-96 h-full p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
}
