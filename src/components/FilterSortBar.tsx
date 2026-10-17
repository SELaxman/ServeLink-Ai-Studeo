import React from 'react';
import { TRENDING_TAGS } from '../data/mockData';

interface FilterSortBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  resultCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  availableTodayOnly: boolean;
  onToggleAvailableToday: (checked: boolean) => void;
  verifiedOnly: boolean;
  onToggleVerifiedOnly: (checked: boolean) => void;
  activeCategory: string;
  selectedVehicleType: string;
  onSelectVehicleType: (veh: string) => void;
  selectedFuelTech: string;
  onSelectFuelTech: (tech: string) => void;
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  onClearAll: () => void;
  onExecuteSearch: () => void;
}

export const FilterSortBar: React.FC<FilterSortBarProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
  sortBy,
  onSortChange,
  availableTodayOnly,
  onToggleAvailableToday,
  verifiedOnly,
  onToggleVerifiedOnly,
  activeCategory,
  selectedVehicleType,
  onSelectVehicleType,
  selectedFuelTech,
  onSelectFuelTech,
  selectedBrand,
  onSelectBrand,
  onClearAll,
  onExecuteSearch,
}) => {
  const isMechanic = activeCategory === 'mechanic';
  const isAppliance = ['ac', 'tv', 'fridge', 'washing'].includes(activeCategory);

  const brandList = ['Voltas', 'Daikin', 'LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch'];

  return (
    <div id="search-anchor" className="space-y-6">
      {/* Search & Realtime Query Strip */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-6">
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md border border-[#e2e8f0]">
          <div className="relative flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#2563eb] text-[22px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onExecuteSearch();
                }}
                className="w-full pl-11 pr-10 py-3 bg-[#eff4ff] rounded-xl text-[#0b1c30] placeholder:text-[#565e74] focus:outline-none focus:bg-[#e5eeff] focus:ring-2 focus:ring-[#2563eb]/20 text-sm transition-all"
                placeholder="Search for a service, professional, vehicle type (EV/CNG), or brand (LG, Voltas, Daikin)..."
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565e74] hover:text-[#0b1c30] p-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={onExecuteSearch}
                className="w-full md:w-auto px-6 py-3 bg-[#2563eb] hover:bg-[#004ac6] text-white font-semibold text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">manage_search</span>
                <span>Find Verified Pros</span>
              </button>
            </div>
          </div>

          {/* Quick Trending Query Pills */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-1 text-xs">
            <span className="text-[#565e74] font-medium mr-1">Trending Now:</span>
            {TRENDING_TAGS.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSearchChange(tag.label)}
                className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dbe1ff] hover:text-[#00174b] rounded-full text-[#434655] transition-colors cursor-pointer flex items-center gap-1 font-medium border border-[#dce9ff]"
              >
                <span>{tag.icon}</span>
                <span>{tag.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Filter & Sort Bar */}
      <section id="results-section" className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Left: Count and Trust Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-title-sm text-sm sm:text-base font-bold text-[#0b1c30]">
                Showing {resultCount} Verified Professionals in Bhopal
              </span>
              <span className="h-4 w-px bg-[#c3c6d7] hidden sm:block"></span>
              <span className="text-[#006242] text-xs font-semibold flex items-center gap-1 bg-[#bdffdb]/40 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                100% ID Verified
              </span>
            </div>

            {/* Right: Sort & Quick Toggles */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <label htmlFor="sort-select" className="text-xs text-[#565e74] font-medium">
                  Sort by:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="bg-[#eff4ff] text-[#0b1c30] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none border border-[#cbd5e1] cursor-pointer"
                >
                  <option value="recommended">Recommended for You</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="experience-desc">Experience: High to Low</option>
                  <option value="experience-asc">Experience: Low to High</option>
                  <option value="rating-desc">Rating: High to Low</option>
                  <option value="distance-asc">Nearest First</option>
                  <option value="jobs-desc">Most Jobs Completed</option>
                </select>
              </div>

              <label className="inline-flex items-center gap-1.5 cursor-pointer bg-[#eff4ff] px-2.5 py-1.5 rounded-lg hover:bg-[#e5eeff] transition-colors border border-[#cbd5e1]">
                <input
                  type="checkbox"
                  checked={availableTodayOnly}
                  onChange={(e) => onToggleAvailableToday(e.target.checked)}
                  className="rounded text-[#2563eb] focus:ring-[#2563eb] cursor-pointer"
                />
                <span className="text-xs font-medium text-[#0b1c30]">Available Today</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer bg-[#eff4ff] px-2.5 py-1.5 rounded-lg hover:bg-[#e5eeff] transition-colors border border-[#cbd5e1]">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => onToggleVerifiedOnly(e.target.checked)}
                  className="rounded text-[#2563eb] focus:ring-[#2563eb] cursor-pointer"
                />
                <span className="text-xs font-medium text-[#0b1c30]">Verified Only</span>
              </label>

              <button
                type="button"
                onClick={onClearAll}
                className="text-xs text-[#565e74] hover:text-[#ba1a1a] font-medium px-2 py-1 cursor-pointer transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Conditional Mechanic Subfilters */}
          {isMechanic && (
            <div className="bg-[#eff4ff] p-3 rounded-xl border border-[#b4c5ff] animate-fadeIn">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2563eb] text-[18px]">
                    electric_scooter
                  </span>
                  <span className="font-bold text-[#0b1c30]">Vehicle Type:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['all', 'Scooter/Bike', 'Car'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => onSelectVehicleType(type)}
                        className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                          selectedVehicleType === type
                            ? 'bg-[#2563eb] text-white shadow-sm'
                            : 'bg-white text-[#0b1c30] hover:bg-[#dbe1ff]'
                        }`}
                      >
                        {type === 'all' ? 'All Vehicles' : type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 md:ml-4">
                  <span className="font-bold text-[#0b1c30]">Fuel/Tech:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'all', label: 'All Power' },
                      { id: 'EV', label: '⚡ Electric (EV)' },
                      { id: 'Petrol', label: 'Petrol / CNG' },
                    ].map((fuel) => (
                      <button
                        key={fuel.id}
                        type="button"
                        onClick={() => onSelectFuelTech(fuel.id)}
                        className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                          selectedFuelTech === fuel.id
                            ? 'bg-[#2563eb] text-white shadow-sm'
                            : 'bg-white text-[#0b1c30] hover:bg-[#dbe1ff]'
                        }`}
                      >
                        {fuel.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conditional Appliance Brand Subfilters */}
          {isAppliance && (
            <div className="bg-[#eff4ff] p-3 rounded-xl border border-[#b4c5ff] animate-fadeIn">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-[#0b1c30] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#2563eb]">
                    branding_watermark
                  </span>
                  Filter by Certified Brand:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {brandList.map((brand) => {
                    const isSelected = selectedBrand === brand;
                    return (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => onSelectBrand(isSelected ? '' : brand)}
                        className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#2563eb] text-white shadow-sm'
                            : 'bg-white text-[#0b1c30] hover:bg-[#dbe1ff]'
                        }`}
                      >
                        {brand}
                      </button>
                    );
                  })}
                  {selectedBrand && (
                    <button
                      type="button"
                      onClick={() => onSelectBrand('')}
                      className="text-[11px] text-[#ba1a1a] font-semibold underline px-2 cursor-pointer"
                    >
                      Reset Brand
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
