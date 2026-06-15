import React from 'react';

export default function EmptyState({ location, onClear, onBroaden }) {
  return (
    <section className="mt-lg animate-fadeIn">
      <div className="glass-panel-2 rounded-xl p-lg flex flex-col items-center justify-center text-center min-h-[420px] border-dashed border-2 border-surface-variant relative overflow-hidden">
        {/* Atmospheric radial red glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-error-container/15 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Premium Sonar Radar Animation */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-md">
          {/* Outer ripples */}
          <div className="absolute inset-0 rounded-full bg-primary-container/20 animate-ping opacity-75"></div>
          <div className="absolute inset-2 rounded-full bg-primary-container/15 animate-ping opacity-50" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute inset-4 rounded-full bg-primary-container/10 animate-ping opacity-25" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Floating center card badge */}
          <div className="relative w-16 h-16 rounded-full bg-surface border border-primary-container/30 flex items-center justify-center shadow-2xl shadow-primary-container/20 animate-pulse">
            <span className="material-symbols-outlined text-[36px] text-primary-container select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              location_off
            </span>
          </div>
        </div>
        
        <h3 className="font-title-md text-title-md text-on-surface mb-sm font-semibold tracking-wide">
          No Restaurants Found
        </h3>
        
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-lg leading-relaxed">
          No restaurants in <span className="text-primary-container font-semibold">{location || 'the selected location'}</span> match your current filters. Try other locations or adjusting your filters to find your perfect dining experience!
        </p>
        
        <div className="flex gap-md relative z-10">
          <button
            type="button"
            onClick={onClear}
            className="px-md py-sm bg-surface-variant hover:bg-surface-variant/80 text-on-surface rounded-lg font-label-md text-label-md border border-white/5 transition-all active:scale-95 cursor-pointer hover:shadow-md"
          >
            Clear Filters
          </button>
          
          <button
            type="button"
            onClick={onBroaden}
            className="px-md py-sm bg-inverse-primary text-white rounded-lg font-label-md text-label-md glow-red hover:brightness-110 transition-all active:scale-95 cursor-pointer"
          >
            Broaden Search
          </button>
        </div>
      </div>
    </section>
  );
}
