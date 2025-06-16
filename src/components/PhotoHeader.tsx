import React from "react";

const PhotoHeader = () => {
  return (
    <header className="bg-slate-900 text-white py-8 border-b border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-2 font-serif">
          Image<span className="text-amber-400">Spot</span>
        </h1>
        <p className="text-slate-300 text-lg">
          Профессиональная обработка ваших фотографий
        </p>
      </div>
    </header>
  );
};

export default PhotoHeader;
