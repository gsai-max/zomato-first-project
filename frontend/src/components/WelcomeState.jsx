import React from 'react';

export default function WelcomeState() {
  return (
    <section className="mt-lg animate-fadeIn">
      <div className="glass-panel-2 rounded-xl p-lg flex flex-col items-center justify-center text-center min-h-[420px] border-dashed border-2 border-surface-variant relative overflow-hidden">
        {/* Decorative subtle ambient warm/pink radial glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Animated ambient icon container */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-md">
          {/* Soft pulsing halo */}
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
          
          <div className="relative w-16 h-16 rounded-full bg-surface border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/5">
            <span className="material-symbols-outlined text-[36px] text-primary select-none animate-bounce">
              restaurant_menu
            </span>
          </div>
        </div>
        
        <h3 className="font-title-md text-title-md text-on-surface mb-sm font-semibold tracking-wide">
          Ready for a Gourmet Experience?
        </h3>
        
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-md leading-relaxed">
          Select your search parameters like location, cuisine, and budget on the left to generate customized AI recommendations.
        </p>
        
        <div className="flex items-center gap-sm text-on-surface-variant/60 font-label-sm text-label-sm border border-white/5 bg-surface-container-low/30 px-md py-sm rounded-full">
          <span className="material-symbols-outlined text-[18px]">info</span>
          Use the Crave Concierge panel to get started!
        </div>
      </div>
    </section>
  );
}
