import React, { useState } from 'react';
import { Professional } from '../types';

interface BookingModalProps {
  pro: Professional;
  onClose: () => void;
  onConfirm: (bookingDetails: {
    address: string;
    notes: string;
    timeSlot: string;
  }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  pro,
  onClose,
  onConfirm,
}) => {
  const [address, setAddress] = useState('Flat 402, Coral Heights, Arera Colony, Bhopal');
  const [notes, setNotes] = useState('Inspection and maintenance required.');
  const [selectedSlot, setSelectedSlot] = useState('Today, 11:30 AM');

  const presets = [
    'Sector C, Indrapuri, Bhopal',
    'Zone II, MP Nagar, Bhopal',
    'E-7 Arera Colony, Bhopal',
    'Danish Kunj, Kolar Road, Bhopal',
  ];

  const slots = [
    'Today, 11:30 AM',
    'Today, 03:00 PM',
    'Tomorrow, 10:00 AM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({ address, notes, timeSlot: selectedSlot });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#213145]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-[#dce9ff] animate-scaleUp">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#eff4ff] flex items-center justify-between border-b border-[#e5eeff]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white ring-2 ring-[#2563eb]/20 shrink-0">
              <img
                src={pro.avatar}
                alt={pro.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-title-sm text-base font-bold text-[#0b1c30]">
                Book {pro.name}
              </h3>
              <span className="text-xs text-[#004ac6] font-semibold">
                {pro.categoryLabel} • ₹{pro.price} Base Inspection
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="text-[#565e74] hover:text-[#0b1c30] p-1.5 rounded-full hover:bg-white cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Service Address with Bhopal Zone presets */}
          <div>
            <label className="block text-xs font-bold text-[#0b1c30] mb-1">
              Your Service Address in Bhopal
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] border border-[#cbd5e1]"
            />
            <div className="flex flex-wrap items-center gap-1.5 mt-2">
              <span className="text-[11px] text-[#565e74] font-medium">Presets:</span>
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAddress(preset)}
                  className="text-[11px] px-2 py-0.5 bg-[#e5eeff] text-[#0b1c30] rounded-md hover:bg-[#dce9ff] transition-colors cursor-pointer"
                >
                  {preset.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Issue Details */}
          <div>
            <label className="block text-xs font-bold text-[#0b1c30] mb-1">
              Problem Description / Special Instructions
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Inverter AC not blowing cold air. Urgent assistance required."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] border border-[#cbd5e1]"
            />
          </div>

          {/* Schedule Date & Slots */}
          <div>
            <label className="block text-xs font-bold text-[#0b1c30] mb-1.5">
              Preferred Arrival Time
            </label>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#2563eb] text-white shadow-sm ring-2 ring-[#2563eb]/20'
                        : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#e5eeff] border border-[#cbd5e1]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price breakdown banner */}
          <div className="bg-[#eff4ff] p-4 rounded-xl space-y-1.5 border border-[#dce9ff]">
            <div className="flex justify-between text-xs text-[#0b1c30]">
              <span>Initial Inspection &amp; Visit Fee:</span>
              <span className="font-bold text-[#004ac6]">₹{pro.price}</span>
            </div>
            <div className="flex justify-between text-xs text-[#565e74]">
              <span>Servelink Safety &amp; Warranty Protection:</span>
              <span className="text-[#007d55] font-bold">FREE (Covered)</span>
            </div>
            <p className="text-[11px] text-[#565e74] pt-1 leading-relaxed">
              *Final repair cost is transparently estimated on-site after professional physical diagnosis. Pay only upon complete satisfaction.
            </p>
          </div>

          {/* Modal Footer */}
          <div className="pt-2 flex items-center justify-between border-t border-[#e2e8f0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#565e74] hover:text-[#0b1c30] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#2563eb] hover:bg-[#004ac6] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md cursor-pointer transition-colors"
            >
              Confirm Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
