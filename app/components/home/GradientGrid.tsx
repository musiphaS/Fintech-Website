// components/GradientGrid.tsx
// import React from 'react';

const GradientGrid: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center gradient-background">
      {/* Grid Overlay */}
      <div className="grid-overlay absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
        {/* Empty divs to create grid cells */}
        {Array.from({ length: 38 }).map((_, i) => (
          <div key={i} className="border border-white border-opacity-10"></div>
        ))}
      </div>
    </div>
  );
};

export default GradientGrid;