import React from 'react';
import { CATEGORIES } from '../data/mockData';

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-2">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#004ac6] font-bold">
            Comprehensive Directory
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-[#0b1c30]">
            Explore 9 Core Service Categories
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#565e74]">
          Tap any trade to instantly filter specialists across Bhopal
        </p>
      </div>

      {/* Categories Mosaic */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;

          if (cat.id === 'all') {
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-sm transition-all group cursor-pointer text-center ${
                  isActive
                    ? 'bg-[#2563eb] text-white shadow-md ring-2 ring-[#2563eb]/30'
                    : 'bg-white text-[#0b1c30] hover:bg-[#eff4ff] border border-[#e2e8f0]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[32px] mb-1 group-hover:scale-110 transition-transform ${
                    isActive ? 'text-white' : 'text-[#2563eb]'
                  }`}
                >
                  {cat.icon}
                </span>
                <span className="font-title-sm text-sm font-bold">{cat.label}</span>
                <span
                  className={`text-[11px] mt-0.5 ${
                    isActive ? 'text-white/90' : 'text-[#565e74]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          }

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-sm transition-all group cursor-pointer text-center ${
                isActive
                  ? 'bg-[#2563eb] text-white shadow-md ring-2 ring-[#2563eb]/30'
                  : 'bg-white text-[#0b1c30] hover:bg-[#eff4ff] border border-[#e2e8f0]'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 group-hover:scale-110 transition-transform ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : `${cat.circleBg} ${cat.iconColor}`
                }`}
              >
                <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
              </div>
              <span className="font-title-sm text-sm font-bold">{cat.label}</span>
              <span
                className={`text-[11px] mt-0.5 ${
                  isActive ? 'text-white/90' : 'text-[#565e74]'
                }`}
              >
                {cat.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
