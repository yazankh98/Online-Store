import React from "react";
import heroImg from "./../assets/hero.jpg"; 

const ShopHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] bg-gray-200 bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl drop-shadow-lg leading-tight">
          Elevate Your Style.    yazan
        </h1>

        <p className="text-white/90 mt-3 text-sm sm:text-base md:text-lg max-w-md drop-shadow-md">
          Premium essentials crafted with comfort and elegance in mind.
        </p>

        <button className="mt-8 bg-white text-slate-900 font-semibold text-sm sm:text-base md:text-base px-8 py-3 rounded-full w-fit hover:opacity-90 transition-all">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default ShopHero;
