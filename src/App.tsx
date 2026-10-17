/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { AiAssistant } from './components/AiAssistant';
import { CategoryFilter } from './components/CategoryFilter';
import { FilterSortBar } from './components/FilterSortBar';
import { ProCard } from './components/ProCard';
import { BookingModal } from './components/BookingModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { PortfolioModal } from './components/PortfolioModal';
import { MyBookingsDrawer } from './components/MyBookingsDrawer';
import { ProDashboardView } from './components/ProDashboardView';
import { Footer } from './components/Footer';
import {
  ALL_PROFESSIONALS,
  INITIAL_BOOKINGS,
  BHOPAL_ZONES,
} from './data/mockData';
import { Professional, Booking } from './types';

export default function App() {
  // Navigation & View Mode State
  const [activeNav, setActiveNav] = useState('home');
  const [dashboardView, setDashboardView] = useState<'customer' | 'pro'>('customer');
  const [currentLocation, setCurrentLocation] = useState('Near Bhopal');
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  // Filter & Search State
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [availableTodayOnly, setAvailableTodayOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const [selectedVehicleType, setSelectedVehicleType] = useState('all');
  const [selectedFuelTech, setSelectedFuelTech] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('');

  // Modals & Drawers State
  const [selectedProForBooking, setSelectedProForBooking] = useState<Professional | null>(null);
  const [selectedProForPortfolio, setSelectedProForPortfolio] = useState<Professional | null>(null);
  const [isBookingsDrawerOpen, setIsBookingsDrawerOpen] = useState(false);
  const [latestConfirmedBooking, setLatestConfirmedBooking] = useState<Booking | null>(null);
  const [bookingsList, setBookingsList] = useState<Booking[]>(INITIAL_BOOKINGS);

  // Filter and Sort Logic
  const filteredPros = useMemo(() => {
    let list = [...ALL_PROFESSIONALS];

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Search query matching across name, category, location, specs, brands, vehicles, fuel
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.categoryLabel.toLowerCase().includes(q);
        const matchLoc = p.location.toLowerCase().includes(q);
        const matchSpecs = p.specializations.some((s) => s.toLowerCase().includes(q));
        const matchBrands = p.brands.some((b) => b.toLowerCase().includes(q));
        const matchVeh = p.vehicles.some((v) => v.toLowerCase().includes(q));
        const matchFuel = p.fuelTech.some((f) => f.toLowerCase().includes(q));
        return matchName || matchCat || matchLoc || matchSpecs || matchBrands || matchVeh || matchFuel;
      });
    }

    // Location filter if a specific Bhopal zone is chosen
    if (currentLocation !== 'Near Bhopal' && !currentLocation.includes('(All)')) {
      const zoneName = currentLocation.split(',')[0].trim().toLowerCase();
      // If user selected Arera Colony or MP Nagar etc., boost or filter
      list = list.filter((p) => p.location.toLowerCase().includes(zoneName));
    }

    // Availability Today
    if (availableTodayOnly) {
      list = list.filter((p) => p.availableToday);
    }

    // Verified Only
    if (verifiedOnly) {
      list = list.filter((p) => p.verified);
    }

    // Mechanic specific subfilters
    if (activeCategory === 'mechanic') {
      if (selectedVehicleType !== 'all') {
        list = list.filter((p) => p.vehicles.includes(selectedVehicleType));
      }
      if (selectedFuelTech !== 'all') {
        list = list.filter((p) => p.fuelTech.includes(selectedFuelTech));
      }
    }

    // Appliance brand subfilter
    if (selectedBrand) {
      list = list.filter((p) => p.brands.includes(selectedBrand));
    }

    // Sorting logic
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'experience-desc') {
      list.sort((a, b) => b.experience - a.experience);
    } else if (sortBy === 'experience-asc') {
      list.sort((a, b) => a.experience - b.experience);
    } else if (sortBy === 'rating-desc') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'distance-asc') {
      list.sort((a, b) => a.distance - b.distance);
    } else if (sortBy === 'jobs-desc') {
      list.sort((a, b) => b.jobsCompleted - a.jobsCompleted);
    } else {
      // Recommended: weighted rating & completed jobs
      list.sort(
        (a, b) =>
          b.rating * 10 + b.jobsCompleted * 0.01 - (a.rating * 10 + a.jobsCompleted * 0.01)
      );
    }

    return list;
  }, [
    activeCategory,
    searchQuery,
    currentLocation,
    availableTodayOnly,
    verifiedOnly,
    selectedVehicleType,
    selectedFuelTech,
    selectedBrand,
    sortBy,
  ]);

  // Handlers
  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (catId !== 'mechanic') {
      setSelectedVehicleType('all');
      setSelectedFuelTech('all');
    }
    if (!['ac', 'tv', 'fridge', 'washing'].includes(catId)) {
      setSelectedBrand('');
    }
  };

  const handleClearAllFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortBy('recommended');
    setAvailableTodayOnly(false);
    setVerifiedOnly(true);
    setSelectedVehicleType('all');
    setSelectedFuelTech('all');
    setSelectedBrand('');
    setCurrentLocation('Near Bhopal');
  };

  const handleConfirmBooking = (details: {
    address: string;
    notes: string;
    timeSlot: string;
  }) => {
    if (!selectedProForBooking) return;

    const newBooking: Booking = {
      id: `SL-${Math.floor(1000 + Math.random() * 9000)}`,
      proId: selectedProForBooking.id,
      proName: selectedProForBooking.name,
      proCategory: selectedProForBooking.categoryLabel,
      proPhone: selectedProForBooking.phone,
      proAvatar: selectedProForBooking.avatar,
      address: details.address,
      timeSlot: details.timeSlot,
      notes: details.notes,
      price: selectedProForBooking.price,
      status: 'Confirmed',
      createdAt: 'Just now',
    };

    setBookingsList((prev) => [newBooking, ...prev]);
    setSelectedProForBooking(null);
    setLatestConfirmedBooking(newBooking);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookingsList((prev) => prev.filter((b) => b.id !== bookingId));
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen font-body-md flex flex-col antialiased">
      {/* Top Fixed Header */}
      <Header
        currentLocation={currentLocation}
        onSelectLocation={(loc) => setCurrentLocation(loc)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        currentMode={dashboardView}
        onSwitchMode={(mode) => setDashboardView(mode)}
        onOpenBookings={() => setIsBookingsDrawerOpen(true)}
        bookingsCount={bookingsList.length}
      />

      <main className="w-full pt-20 flex-1 pb-20 md:pb-0">
        {/* Top Greeting & Live Location Bar */}
        <section className="w-full bg-[#eff4ff]/60 py-2.5 border-b border-[#e5eeff]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#007d55] animate-pulse"></div>
              <div>
                <h2 className="font-headline-md text-sm sm:text-base text-[#0b1c30] font-bold">
                  Good Morning, User!
                </h2>
                <p className="text-xs text-[#565e74]">
                  Find verified local professionals near you in seconds.
                </p>
              </div>
            </div>

            {/* Location Picker dropdown trigger in top greeting bar */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setShowLocationPicker(!showLocationPicker)}
                className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm text-[#0b1c30] hover:bg-[#eff4ff] transition-all text-xs font-semibold border border-[#dce9ff] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#2563eb] text-[18px]">
                  near_me
                </span>
                <span>{currentLocation}</span>
                <span className="material-symbols-outlined text-[#737686] text-[16px]">
                  keyboard_arrow_down
                </span>
              </button>

              {showLocationPicker && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-xl p-2 z-40 border border-[#e5eeff]">
                  <div className="px-2 py-1 text-[10px] font-bold text-[#565e74] uppercase tracking-wider">
                    Select Bhopal Zone
                  </div>
                  {BHOPAL_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => {
                        setCurrentLocation(zone.label);
                        setShowLocationPicker(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#eff4ff] flex items-center justify-between text-[#0b1c30] cursor-pointer transition-colors"
                    >
                      <div>
                        <div className="font-semibold">{zone.label}</div>
                        <div className="text-[10px] text-[#565e74]">{zone.description}</div>
                      </div>
                      {currentLocation === zone.label && (
                        <span className="material-symbols-outlined text-[#007d55] text-[16px]">
                          check
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Dual Mode Switcher Bar */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-4">
          <div className="bg-[#dce9ff]/40 p-1.5 rounded-xl flex items-center justify-between border border-[#cbd5e1]/40">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setDashboardView('customer')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  dashboardView === 'customer'
                    ? 'bg-[#2563eb] text-white shadow-sm'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Customer View</span>
              </button>
              <button
                type="button"
                onClick={() => setDashboardView('pro')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  dashboardView === 'pro'
                    ? 'bg-[#2563eb] text-white shadow-sm'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">engineering</span>
                <span>Professional Dashboard Mode</span>
                <span className="bg-[#dae2fd] text-[#131b2e] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  Pro MVP
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsBookingsDrawerOpen(true)}
              className="flex items-center gap-1.5 text-[#004ac6] font-semibold text-xs px-3 py-1.5 hover:bg-white rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>My Bookings</span>
              <span className="bg-[#2563eb] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {bookingsList.length}
              </span>
            </button>
          </div>
        </div>

        {/* CUSTOMER VIEW */}
        {dashboardView === 'customer' ? (
          <div className="w-full flex flex-col">
            {/* Search Strip */}
            <FilterSortBar
              searchQuery={searchQuery}
              onSearchChange={(q) => setSearchQuery(q)}
              resultCount={filteredPros.length}
              sortBy={sortBy}
              onSortChange={(sort) => setSortBy(sort)}
              availableTodayOnly={availableTodayOnly}
              onToggleAvailableToday={(chk) => setAvailableTodayOnly(chk)}
              verifiedOnly={verifiedOnly}
              onToggleVerifiedOnly={(chk) => setVerifiedOnly(chk)}
              activeCategory={activeCategory}
              selectedVehicleType={selectedVehicleType}
              onSelectVehicleType={(veh) => setSelectedVehicleType(veh)}
              selectedFuelTech={selectedFuelTech}
              onSelectFuelTech={(tech) => setSelectedFuelTech(tech)}
              selectedBrand={selectedBrand}
              onSelectBrand={(b) => setSelectedBrand(b)}
              onClearAll={handleClearAllFilters}
              onExecuteSearch={() => {
                const el = document.getElementById('results-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* AI Diagnostics Assistant Hero Card */}
            <AiAssistant
              onMatchCategory={(catSlug) => handleSelectCategory(catSlug)}
              onSelectZone={(zone) => setCurrentLocation(zone)}
            />

            {/* Nine Core Service Categories */}
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />

            {/* Professional Listings Feed */}
            <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-6 pb-12">
              {filteredPros.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPros.map((pro) => (
                    <ProCard
                      key={pro.id}
                      pro={pro}
                      onOpenBooking={(p) => setSelectedProForBooking(p)}
                      onOpenPortfolio={(p) => setSelectedProForPortfolio(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-white rounded-2xl shadow-sm p-8 border border-[#e2e8f0]">
                  <span className="material-symbols-outlined text-[#737686] text-[48px]">
                    search_off
                  </span>
                  <h3 className="font-headline-md text-lg font-bold text-[#0b1c30] mt-3">
                    No Professionals Found
                  </h3>
                  <p className="text-xs sm:text-sm text-[#434655] max-w-md mx-auto mt-1 leading-relaxed">
                    We couldn&apos;t find an exact technician matching those specific filters. Try loosening the filter criteria or searching in all Bhopal zones.
                  </p>
                  <button
                    type="button"
                    onClick={handleClearAllFilters}
                    className="mt-4 px-5 py-2.5 bg-[#2563eb] text-white text-xs font-semibold rounded-lg hover:bg-[#004ac6] transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </section>
          </div>
        ) : (
          /* PROFESSIONAL PARTNER VIEW */
          <ProDashboardView />
        )}
      </main>

      {/* Mobile Sticky Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-[#e5eeff] flex items-center justify-around py-1.5 px-3">
        <button
          type="button"
          onClick={() => {
            setActiveNav('home');
            setDashboardView('customer');
          }}
          className={`flex flex-col items-center py-1 transition-colors text-xs font-semibold cursor-pointer ${
            activeNav === 'home' && dashboardView === 'customer'
              ? 'text-[#2563eb]'
              : 'text-[#434655]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">home</span>
          <span>Home</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveNav('search');
            setDashboardView('customer');
            const el = document.getElementById('search-anchor');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 transition-colors text-xs font-semibold cursor-pointer ${
            activeNav === 'search' ? 'text-[#2563eb]' : 'text-[#434655]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
          <span>Search</span>
        </button>
        <button
          type="button"
          onClick={() => setIsBookingsDrawerOpen(true)}
          className="flex flex-col items-center py-1 transition-colors text-xs font-semibold text-[#434655] cursor-pointer relative"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          <span>Bookings</span>
          {bookingsList.length > 0 && (
            <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#2563eb]" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setDashboardView(dashboardView === 'customer' ? 'pro' : 'customer')}
          className={`flex flex-col items-center py-1 transition-colors text-xs font-semibold cursor-pointer ${
            dashboardView === 'pro' ? 'text-[#2563eb]' : 'text-[#434655]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">engineering</span>
          <span>Pro Mode</span>
        </button>
      </nav>

      {/* Global Modals & Drawers */}
      {selectedProForBooking && (
        <BookingModal
          pro={selectedProForBooking}
          onClose={() => setSelectedProForBooking(null)}
          onConfirm={handleConfirmBooking}
        />
      )}

      {latestConfirmedBooking && (
        <BookingSuccessModal
          booking={latestConfirmedBooking}
          onClose={() => setLatestConfirmedBooking(null)}
          onViewBookings={() => {
            setLatestConfirmedBooking(null);
            setIsBookingsDrawerOpen(true);
          }}
        />
      )}

      {selectedProForPortfolio && (
        <PortfolioModal
          pro={selectedProForPortfolio}
          onClose={() => setSelectedProForPortfolio(null)}
          onBookNow={(pro) => {
            setSelectedProForPortfolio(null);
            setSelectedProForBooking(pro);
          }}
        />
      )}

      <MyBookingsDrawer
        isOpen={isBookingsDrawerOpen}
        onClose={() => setIsBookingsDrawerOpen(false)}
        bookings={bookingsList}
        onCancelBooking={handleCancelBooking}
      />

      {/* Full Footer */}
      <Footer onCategoryClick={handleSelectCategory} />
    </div>
  );
}
