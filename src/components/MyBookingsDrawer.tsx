import React from 'react';
import { Booking } from '../types';

interface MyBookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
}

export const MyBookingsDrawer: React.FC<MyBookingsDrawerProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#213145]/50 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-[#dce9ff]">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#eff4ff] flex items-center justify-between border-b border-[#e5eeff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#2563eb] text-[24px]">
              calendar_month
            </span>
            <h3 className="font-title-sm text-base font-bold text-[#0b1c30]">
              My Active Bookings
            </h3>
            <span className="bg-[#2563eb] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {bookings.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#565e74] hover:text-[#0b1c30] p-1 rounded-full hover:bg-white cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Bookings List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4">
          {bookings.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="material-symbols-outlined text-[#737686] text-[48px]">
                event_busy
              </span>
              <p className="text-sm font-semibold text-[#0b1c30]">No active bookings</p>
              <p className="text-xs text-[#565e74] max-w-xs mx-auto">
                Need help with electrical, plumbing, or AC in Bhopal? Explore verified specialists on the homepage.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-[#2563eb] text-white text-xs font-semibold rounded-lg hover:bg-[#004ac6] cursor-pointer"
              >
                Find Specialists
              </button>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="p-4 bg-[#eff4ff] rounded-xl space-y-2 border border-[#dce9ff] shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] bg-[#bdffdb] text-[#006242] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007d55] animate-pulse"></span>
                    {b.status}
                  </span>
                  <span className="text-xs text-[#565e74] font-medium">{b.timeSlot}</span>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <img
                    src={b.proAvatar}
                    alt={b.proName}
                    className="w-12 h-12 rounded-full object-cover shrink-0 ring-1 ring-[#2563eb]/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-title-sm text-sm font-bold text-[#0b1c30]">
                      {b.proName}
                    </h4>
                    <p className="text-xs text-[#004ac6] font-semibold">{b.proCategory}</p>
                    <p className="text-xs text-[#434655] mt-1 line-clamp-1">{b.notes}</p>
                    <p className="text-[11px] text-[#565e74] mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      <span className="truncate">{b.address}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#dce9ff] flex items-center justify-between text-xs">
                  <a
                    href={`tel:${b.proPhone}`}
                    className="text-[#2563eb] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>Call Technician</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onCancelBooking(b.id)}
                    className="text-[#ba1a1a] hover:underline font-medium cursor-pointer"
                  >
                    Cancel Request
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Support Info */}
        <div className="p-4 bg-[#eff4ff] border-t border-[#e5eeff] text-center text-xs text-[#565e74] space-y-1">
          <p className="font-semibold text-[#0b1c30]">Servelink Bhopal Helpdesk</p>
          <p>Toll-free customer helpline: <span className="font-bold text-[#2563eb]">1800-SERVE-01</span></p>
          <p className="text-[11px] text-[#737686]">Operating 7:00 AM – 10:00 PM IST across all Bhopal zones</p>
        </div>
      </div>
    </div>
  );
};
