import React, { useState, useRef, useEffect } from 'react';
import { SERVELINK_LOGO, USER_AVATAR, BHOPAL_ZONES } from '../data/mockData';

interface HeaderProps {
  currentLocation: string;
  onSelectLocation: (loc: string) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  currentMode: 'customer' | 'pro';
  onSwitchMode: (mode: 'customer' | 'pro') => void;
  onOpenBookings: () => void;
  bookingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLocation,
  onSelectLocation,
  activeNav,
  setActiveNav,
  currentMode,
  onSwitchMode,
  onOpenBookings,
  bookingsCount,
}) => {
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const locMenuRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locMenuRef.current && !locMenuRef.current.contains(event.target as Node)) {
        setShowLocationMenu(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]">
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup & Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setActiveNav('home');
              onSwitchMode('customer');
            }}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <img
              alt="Servelink Official Logo"
              className="h-8 w-auto object-contain"
              src={SERVELINK_LOGO}
            />
            <div className="flex flex-col">
              <div className="flex items-baseline tracking-tight">
                <span className="font-headline-md text-xl text-[#0b1c30] font-bold">Serve</span>
                <span className="font-headline-md text-xl text-[#2563eb] font-bold">link</span>
              </div>
              <span className="hidden xl:block text-xs text-[#565e74] leading-none -mt-0.5">
                Your Local Service. One Platform.
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => {
                setActiveNav('home');
                onSwitchMode('customer');
              }}
              className={`transition-colors font-medium rounded-lg px-4 py-1.5 text-sm cursor-pointer ${
                activeNav === 'home' && currentMode === 'customer'
                  ? 'bg-[#2563eb] text-white font-semibold'
                  : 'text-[#434655] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveNav('search');
                onSwitchMode('customer');
                const el = document.getElementById('search-anchor');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`transition-colors font-medium rounded-lg px-4 py-1.5 text-sm cursor-pointer ${
                activeNav === 'search'
                  ? 'bg-[#2563eb] text-white font-semibold'
                  : 'text-[#434655] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
            >
              Search
            </button>
            <button
              onClick={() => {
                onOpenBookings();
              }}
              className="transition-colors font-medium rounded-lg px-4 py-1.5 text-sm text-[#434655] hover:bg-[#e5eeff] hover:text-[#0b1c30] flex items-center gap-1.5 cursor-pointer"
            >
              <span>My Bookings</span>
              {bookingsCount > 0 && (
                <span className="bg-[#2563eb] text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full">
                  {bookingsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`transition-colors font-medium rounded-lg px-4 py-1.5 text-sm cursor-pointer ${
                activeNav === 'profile'
                  ? 'bg-[#2563eb] text-white font-semibold'
                  : 'text-[#434655] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
            >
              Profile
            </button>
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Location Picker Dropdown */}
          <div className="relative inline-block text-left" ref={locMenuRef}>
            <button
              onClick={() => setShowLocationMenu(!showLocationMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#eff4ff] hover:bg-[#e5eeff] rounded-full text-[#0b1c30] transition-colors cursor-pointer text-xs sm:text-sm font-semibold"
              type="button"
            >
              <span className="material-symbols-outlined text-[#2563eb] text-[18px]">near_me</span>
              <span className="hidden sm:inline">{currentLocation}</span>
              <span className="sm:hidden">Bhopal</span>
              <span className="material-symbols-outlined text-[#737686] text-[16px]">keyboard_arrow_down</span>
            </button>

            {showLocationMenu && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-xl p-2 z-50 border border-[#e5eeff]">
                <div className="px-2 py-1.5 text-[11px] font-bold text-[#565e74] uppercase tracking-wider">
                  Select Bhopal Zone
                </div>
                {BHOPAL_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => {
                      onSelectLocation(zone.label);
                      setShowLocationMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#eff4ff] flex items-center justify-between text-[#0b1c30] cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="font-semibold">{zone.label}</div>
                      <div className="text-[11px] text-[#565e74]">{zone.description}</div>
                    </div>
                    {currentLocation === zone.label && (
                      <span className="material-symbols-outlined text-[#007d55] text-[16px]">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mode Switcher Pill */}
          <div className="hidden md:flex items-center bg-[#eff4ff] p-1 rounded-full border border-[#dce9ff]">
            <button
              onClick={() => onSwitchMode('customer')}
              className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                currentMode === 'customer'
                  ? 'bg-white text-[#0b1c30] shadow-sm'
                  : 'text-[#565e74] hover:text-[#0b1c30]'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => onSwitchMode('pro')}
              className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all flex items-center gap-1 ${
                currentMode === 'pro'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'text-[#565e74] hover:text-[#0b1c30]'
              }`}
            >
              <span>Professional</span>
              <span className="bg-[#dae2fd] text-[#131b2e] text-[9px] px-1 py-0.2 rounded-full font-bold">
                MVP
              </span>
            </button>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative inline-block" ref={notifRef}>
            <button
              aria-label="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-full text-[#434655] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-[#ba1a1a]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white shadow-xl p-3 z-50 border border-[#e5eeff]">
                <div className="flex items-center justify-between pb-2 border-b border-[#e5eeff]">
                  <span className="text-xs font-bold text-[#0b1c30]">Recent Activity & Updates</span>
                  <span className="text-[11px] text-[#2563eb] font-semibold cursor-pointer hover:underline">
                    Mark all read
                  </span>
                </div>
                <div className="py-2 space-y-2">
                  <div className="p-2 bg-[#eff4ff] rounded-lg text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#0b1c30]">Technician Scheduled</span>
                      <span className="text-[10px] text-[#565e74]">10m ago</span>
                    </div>
                    <p className="text-[#434655]">
                      Vikram Verma accepted your EV Scooter diagnostics request for Today, 2:30 PM.
                    </p>
                  </div>
                  <div className="p-2 hover:bg-[#f8f9ff] rounded-lg text-xs space-y-1 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#0b1c30]">Bhopal Summer Offer</span>
                      <span className="text-[10px] text-[#565e74]">2h ago</span>
                    </div>
                    <p className="text-[#434655]">
                      Book Inverter AC jet cleaning with verified technicians at ₹399 visit rate.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Button & Menu */}
          <div className="relative inline-block" ref={profileRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-1 p-1 rounded-full hover:bg-[#eff4ff] transition-colors cursor-pointer focus:outline-none"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#2563eb]/20"
                src={USER_AVATAR}
              />
              <span className="material-symbols-outlined hidden sm:block text-[#737686] text-[18px]">
                expand_more
              </span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-xl p-3 z-50 border border-[#e5eeff]">
                <div className="flex items-center gap-3 pb-3 border-b border-[#e5eeff]">
                  <img
                    alt="Profile Avatar"
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[#2563eb]/30"
                    src={USER_AVATAR}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0b1c30]">Laxman Singh</h4>
                    <span className="text-[11px] text-[#565e74]">laxmansingh97op@gmail.com</span>
                  </div>
                </div>
                <div className="py-2 space-y-1">
                  <div className="text-[11px] font-bold text-[#565e74] uppercase px-2 py-1">Saved Address</div>
                  <div className="px-2 py-1 text-xs text-[#0b1c30] bg-[#eff4ff] rounded-lg">
                    Flat 402, Coral Heights, Arera Colony, Bhopal
                  </div>
                </div>
                <div className="pt-2 border-t border-[#e5eeff] space-y-1">
                  <button
                    onClick={() => {
                      onSwitchMode(currentMode === 'customer' ? 'pro' : 'customer');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 text-xs text-[#2563eb] hover:bg-[#eff4ff] rounded-lg font-semibold flex items-center justify-between cursor-pointer"
                  >
                    <span>Switch to {currentMode === 'customer' ? 'Professional Dashboard' : 'Customer View'}</span>
                    <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
                  </button>
                  <button
                    onClick={() => {
                      onOpenBookings();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 text-xs text-[#0b1c30] hover:bg-[#eff4ff] rounded-lg flex items-center justify-between cursor-pointer"
                  >
                    <span>My Bookings History</span>
                    <span className="bg-[#eff4ff] text-[#2563eb] font-bold text-[10px] px-1.5 py-0.5 rounded-full">
                      {bookingsCount} Active
                    </span>
                  </button>
                  <a
                    href="tel:18007378301"
                    className="w-full text-left px-2 py-1.5 text-xs text-[#0b1c30] hover:bg-[#eff4ff] rounded-lg flex items-center justify-between block cursor-pointer"
                  >
                    <span>Bhopal Customer Support</span>
                    <span className="text-[11px] text-[#007d55] font-semibold">Toll-Free</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
