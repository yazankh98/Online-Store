import React from "react";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all overflow-hidden">
      
      <div className="w-full bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-auto max-h-72 object-contain"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>

        {description && (
          <p className="text-sm text-slate-500 line-clamp-2">{description}</p>
        )}

        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-bold text-base">{price}</span>
          <button className="text-sm bg-primary text-white px-4 py-1.5 rounded-full hover:opacity-90">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
