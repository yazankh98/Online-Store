import React from "react";
import ProductCard from "./ProductCard";

import prod1 from "./../assets/prod1.jpg"
import prod2 from "./../assets/prod2.jpg"
import prod3 from "./../assets/prod3.jpg"
import prod4 from "./../assets/prod4.jpg"
import prod5 from "./../assets/prod5.jpg"
import prod6 from "./../assets/prod6.jpg"

const products = [
    {
        name: "T-shirt",
        price: "$29.99",
        description: "Short description for this product, clean and minimal.",
        image: prod1,
    },
    {
        name: "Shose",
        price: "$39.99",
        description: "Another simple item with a calm and elegant style.",
        image: prod2,
    },
    {
        name: "Jeanse",
        price: "$19.99",
        description: "Perfect for daily use — minimal and modern.",
        image: prod3,
    },
    {
        name: "suit",
        price: "$499",
        description: "Perfect for work — minimal and modern.",
        image: prod4,
    },
    {
        name: "hoody",
        price: "$29.99",
        description: "Perfect for winter — minimal and modern.",
        image: prod5,
    },
    {
        name: "jacket",
        price: "$199.99",
        description: "Perfect for winter  — minimal and modern.",
        image: prod6,
    },
];

const Products = () => {
    return (
        <div className="py-10 px-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6 mob:flex-col mob:items-start mob:gap-2">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        Our Products
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base mt-1">
                        Simple, clean and carefully selected items for your needs.
                    </p>
                </div>
                <div className="flex gap-2 text-xs md:text-sm">
                    <button className="px-3 py-1 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100">
                        All
                    </button>
                    <button className="px-3 py-1 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100">
                        Category 1
                    </button>
                    <button className="px-3 py-1 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100">
                        Category 2
                    </button>
                </div>
            </div>

            <div className="grid gap-6 mob:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((item, index) => (
                    <ProductCard
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
