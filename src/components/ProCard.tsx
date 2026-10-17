import React, { useState } from 'react';
import { Professional } from '../types';

interface ProCardProps {
  pro: Professional;
  onOpenBooking: (pro: Professional) => void;
  onOpenPortfolio: (pro: Professional) => void;
}

export const ProCard: React.FC<ProCardProps> = ({ pro, onOpenBooking, onOpenPortfolio }) => {
  const [imgError, setImgError] = useState(false);

  // Generate fallback avatar color/initials if needed
  const initials = pro.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e2e8f0] flex flex-col justify-between group">
      <div>
        {/* Header Identity Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              {!imgError ? (
                <img
                  src={pro.avatar}
                  alt={pro.avatarAlt}
                  onError={() => setImgError(true)}
                  className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-[#e5eeff]"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-[#dbe1ff] text-[#004ac6] flex items-center justify-center font-bold text-base shadow-sm ring-2 ring-[#e5eeff]">
                  {initials}
                </div>
              )}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#007d55] border-2 border-white" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-title-sm text-base text-[#0b1c30] font-bold leading-tight">
                  {pro.name}
                </h3>
                <span
                  className="material-symbols-outlined text-[#2563eb] text-[18px]"
                  title="Verified Servelink Partner"
                >
                  verified
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e]">
                  {pro.categoryLabel}
                </span>
                <span className="text-xs font-bold text-[#0b1c30] flex items-center gap-0.5">
                  <span
                    className="material-symbols-outlined text-amber-500 text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span>{pro.rating}</span>
                  <span className="text-[#565e74] font-normal">({pro.reviewsCount})</span>
                </span>
              </div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs text-[#565e74] block">Visit from</span>
            <span className="font-title-sm text-base text-[#004ac6] font-extrabold">
              ₹{pro.price}
            </span>
          </div>
        </div>

        {/* Stats & Meta Row */}
        <div className="mt-4 pt-1 grid grid-cols-3 gap-2 py-2 bg-[#eff4ff] rounded-xl text-center border border-[#dce9ff]">
          <div>
            <span className="text-[11px] text-[#565e74] block">Distance</span>
            <span className="text-xs font-semibold text-[#0b1c30]">{pro.distance} km</span>
          </div>
          <div>
            <span className="text-[11px] text-[#565e74] block">Completed</span>
            <span className="text-xs font-semibold text-[#0b1c30]">{pro.jobsCompleted}+ jobs</span>
          </div>
          <div>
            <span className="text-[11px] text-[#565e74] block">Experience</span>
            <span className="text-xs font-semibold text-[#0b1c30]">{pro.experience} yrs</span>
          </div>
        </div>

        {/* Location & Availability */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#565e74]">
          <span className="flex items-center gap-1 truncate max-w-[190px]">
            <span className="material-symbols-outlined text-[16px] text-[#737686]">location_on</span>
            <span className="truncate">{pro.location}</span>
          </span>
          {pro.availableToday ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-[#bdffdb]/40 text-[#006242] font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007d55] animate-pulse"></span>
              Available Today
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-[#eff4ff] text-[#565e74] font-medium shrink-0">
              Next Slot Tomorrow
            </span>
          )}
        </div>

        {/* Specialization Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {pro.specializations.map((spec, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] bg-[#eff4ff] text-[#434655] font-medium border border-[#dce9ff]"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Brand support indicator if available */}
        {pro.brands.length > 0 && (
          <div className="mt-2 text-[11px] text-[#434655]">
            <span className="text-[#565e74] font-medium">Certified:</span>{' '}
            <span className="font-semibold text-[#0b1c30]">{pro.brands.slice(0, 3).join(' • ')}</span>
          </div>
        )}
      </div>

      {/* STRICT BUTTON CONTRACT: Exactly 3 buttons in order (Previous Work, Call, Book Now) */}
      <div className="mt-4 pt-3 border-t border-[#e2e8f0] grid grid-cols-3 gap-2 items-center">
        {/* 1. Previous Work (Light Blue) */}
        <button
          type="button"
          onClick={() => onOpenPortfolio(pro)}
          className="w-full py-2.5 px-1 bg-[#dce9ff] hover:bg-[#d3e4fe] text-[#004ac6] font-semibold text-xs rounded-lg text-center flex items-center justify-center transition-colors cursor-pointer"
        >
          Previous Work
        </button>

        {/* 2. Call (Solid Blue) */}
        <a
          href={`tel:${pro.phone}`}
          className="w-full py-2.5 px-1 bg-[#2563eb] hover:bg-[#004ac6] text-white font-semibold text-xs rounded-lg text-center shadow-sm flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px]">call</span>
          <span>Call</span>
        </a>

        {/* 3. Book Now (Solid Blue) */}
        <button
          type="button"
          onClick={() => onOpenBooking(pro)}
          className="w-full py-2.5 px-1 bg-[#2563eb] hover:bg-[#004ac6] text-white font-semibold text-xs rounded-lg text-center shadow-sm flex items-center justify-center transition-colors cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
