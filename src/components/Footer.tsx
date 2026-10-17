import React from 'react';
import { SERVELINK_LOGO } from '../data/mockData';

interface FooterProps {
  onCategoryClick: (catSlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCategoryClick }) => {
  return (
    <footer className="w-full bg-white shadow-[0_-1px_6px_rgba(0,0,0,0.02)] pt-12 pb-8 border-t border-[#e2e8f0] mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#e5eeff]">
          {/* Logo & Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                alt="Servelink Official Logo"
                className="h-8 w-auto object-contain"
                src={SERVELINK_LOGO}
              />
              <div className="flex items-baseline tracking-tight">
                <span className="font-headline-md text-xl text-[#0b1c30] font-bold">Serve</span>
                <span className="font-headline-md text-xl text-[#2563eb] font-bold">link</span>
              </div>
            </div>
            <p className="text-sm text-[#434655] max-w-sm leading-relaxed">
              Your Local Service. One Platform. Connecting verified service professionals with home and commercial customers with instant scheduling and guaranteed safety.
            </p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#007d55] text-[20px]">
                verified_user
              </span>
              <span className="text-xs text-[#006242] font-semibold">
                100% Background-Checked Technicians
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dae2fd] text-[#131b2e]">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span className="text-xs font-semibold">College Startup Demo MVP</span>
            </div>
          </div>

          {/* Column 1: Repair & Technical */}
          <div>
            <h4 className="font-title-sm text-sm font-bold text-[#0b1c30] mb-3">
              Repair &amp; Technical
            </h4>
            <ul className="space-y-2 text-xs text-[#434655]">
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('electrician')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Electrician
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('plumber')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Plumbing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('washing')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Appliance Repair
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('ac')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  HVAC &amp; AC Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('mechanic')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  EV Charger Installation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Home & Cleaning */}
          <div>
            <h4 className="font-title-sm text-sm font-bold text-[#0b1c30] mb-3">
              Home &amp; Maintenance
            </h4>
            <ul className="space-y-2 text-xs text-[#434655]">
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('painter')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Painting &amp; Waterproofing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('carpenter')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Carpentry &amp; Woodwork
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('fridge')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Refrigerator Servicing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('tv')}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer text-left"
                >
                  Smart TV &amp; Panels
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Platform */}
          <div>
            <h4 className="font-title-sm text-sm font-bold text-[#0b1c30] mb-3">
              Trust &amp; Platform
            </h4>
            <ul className="space-y-2 text-xs text-[#434655]">
              <li>
                <span className="hover:text-[#2563eb] transition-colors cursor-pointer">
                  How Servelink Works
                </span>
              </li>
              <li>
                <span className="hover:text-[#2563eb] transition-colors cursor-pointer">
                  Safety Guarantee (₹10,000 Cover)
                </span>
              </li>
              <li>
                <span className="hover:text-[#2563eb] transition-colors cursor-pointer">
                  Become a Professional Partner
                </span>
              </li>
              <li>
                <span className="hover:text-[#2563eb] transition-colors cursor-pointer">
                  Bhopal Help Center &amp; FAQs
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#565e74]">
          <p>© 2025 Servelink. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#004ac6] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#004ac6] transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-[#004ac6] transition-colors cursor-pointer text-[#004ac6] font-semibold">
              Bhopal Hub (MP Nagar)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
