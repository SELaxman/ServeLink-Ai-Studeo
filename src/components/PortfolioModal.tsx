import React from 'react';
import { Professional } from '../types';

interface PortfolioModalProps {
  pro: Professional;
  onClose: () => void;
  onBookNow: (pro: Professional) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  pro,
  onClose,
  onBookNow,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#213145]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden border border-[#dce9ff] animate-scaleUp">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#eff4ff] flex items-center justify-between border-b border-[#e5eeff]">
          <div>
            <h3 className="font-title-sm text-base font-bold text-[#0b1c30]">
              {pro.name} — Previous Work Portfolio
            </h3>
            <span className="text-[11px] font-semibold text-[#007d55] bg-[#bdffdb]/40 px-2.5 py-0.5 rounded-full inline-block mt-0.5">
              Verified Work History • {pro.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#565e74] hover:text-[#0b1c30] p-1.5 rounded-full hover:bg-white cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Portfolio Content List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {pro.portfolio.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#565e74]">
              No photo portfolio uploaded yet. All work is verified via Servelink audit.
            </div>
          ) : (
            pro.portfolio.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#eff4ff] rounded-xl overflow-hidden p-4 space-y-3 border border-[#dce9ff]"
              >
                <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden relative shadow-inner bg-[#dce9ff]">
                  <img
                    src={item.image}
                    alt={item.imgAlt}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#0b1c30]/80 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#0b1c30] text-sm">{item.title}</span>
                  <span className="text-[#565e74]">{item.date}</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#e2e8f0]">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs mb-1">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span>{item.rating} Customer Rating</span>
                  </div>
                  <p className="text-xs text-[#434655] italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#eff4ff] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#e5eeff]">
          <span className="text-xs text-[#565e74]">
            All jobs backed by 30-Day Servelink Quality Guarantee
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 bg-white hover:bg-[#e5eeff] rounded-lg text-xs font-semibold text-[#0b1c30] cursor-pointer transition-colors border border-[#cbd5e1]"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(pro);
              }}
              className="flex-1 sm:flex-none px-5 py-2 bg-[#2563eb] hover:bg-[#004ac6] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer transition-colors"
            >
              Book {pro.name.split(' ')[0]} Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
