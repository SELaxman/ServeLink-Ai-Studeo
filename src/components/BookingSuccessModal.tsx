import React from 'react';
import { Booking } from '../types';

interface BookingSuccessModalProps {
  booking: Booking;
  onClose: () => void;
  onViewBookings: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  booking,
  onClose,
  onViewBookings,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#213145]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 text-center space-y-4 border border-[#e5eeff] animate-scaleUp">
        <div className="w-16 h-16 rounded-full bg-[#bdffdb]/40 text-[#007d55] flex items-center justify-center mx-auto shadow-inner">
          <span className="material-symbols-outlined text-[36px]">task_alt</span>
        </div>

        <div>
          <h3 className="font-headline-md text-xl font-bold text-[#0b1c30]">
            Booking Request Sent!
          </h3>
          <p className="text-xs sm:text-sm text-[#434655] mt-1.5 leading-relaxed">
            Your request is confirmed and dispatched to{' '}
            <span className="font-bold text-[#0b1c30]">{booking.proName}</span>. They typically call within 7 minutes to re-confirm arrival.
          </p>
        </div>

        <div className="bg-[#eff4ff] p-4 rounded-xl text-left text-xs space-y-1.5 border border-[#dce9ff]">
          <div className="flex justify-between">
            <strong className="text-[#565e74]">Booking ID:</strong>
            <span className="font-mono font-bold text-[#004ac6]">{booking.id}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-[#565e74]">Technician:</strong>
            <span className="font-semibold text-[#0b1c30]">{booking.proName}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-[#565e74]">Scheduled Time:</strong>
            <span className="font-semibold text-[#0b1c30]">{booking.timeSlot}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-[#565e74]">Status:</strong>
            <span className="text-[#007d55] font-bold">Pending Technician Call</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-[#565e74]">Service Address:</strong>
            <span className="text-[#0b1c30] truncate max-w-[200px]">{booking.address}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-1/2 py-2.5 bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] text-xs font-semibold rounded-lg cursor-pointer transition-colors"
          >
            Keep Browsing
          </button>
          <button
            type="button"
            onClick={onViewBookings}
            className="w-full sm:w-1/2 py-2.5 bg-[#2563eb] hover:bg-[#004ac6] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer transition-colors"
          >
            View in My Bookings
          </button>
        </div>
      </div>
    </div>
  );
};
