import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div
        className={`${
          type === 'success' 
            ? 'bg-emerald-50 border-emerald-200' 
            : 'bg-rose-50 border-rose-200'
        } px-6 py-4 rounded-xl shadow-lg border flex items-center gap-3 min-w-[320px] backdrop-blur-sm`}
      >
        {type === 'success' ? (
          <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
        ) : (
          <XCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
        )}
        <p
          className={`${
            type === 'success' ? 'text-emerald-800' : 'text-rose-800'
          } text-sm font-medium flex-1`}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          className={`${
            type === 'success'
              ? 'text-emerald-400 hover:text-emerald-600'
              : 'text-rose-400 hover:text-rose-600'
          } p-1 rounded-full transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Alert;