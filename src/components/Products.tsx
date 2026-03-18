"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/page';

interface ProductsProps {
  onAddProduct: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddProduct }) => {
  const mists: Product[] = [
    { id: "m-bv", name: "Bare Vanilla", type: "Mist", price: 85 },
    { id: "m-ps", name: "Pure Seduction", type: "Mist", price: 85 },
    { id: "m-bvs", name: "Bare Vanilla Shimmer", type: "Mist", price: 85 },
    { id: "m-cp", name: "Coconut Passion", type: "Mist", price: 85 },
    { id: "m-cps", name: "Coconut Passion Shimmer", type: "Mist", price: 85 },
    { id: "m-vl", name: "Vanilla Lace", type: "Mist", price: 85 },
  ];

  const lotions: Product[] = [
    { id: "l-bv", name: "Bare Vanilla", type: "Lotion", price: 90 },
    { id: "l-lv", name: "Lace Vanilla", type: "Lotion", price: 90 },
    { id: "l-bvs", name: "Bare Vanilla Shimmer", type: "Lotion", price: 90 },
    { id: "l-cp", name: "Coconut Passion", type: "Lotion", price: 90 },
    { id: "l-vl", name: "Vanilla Lace", type: "Lotion", price: 90 },
  ];

  const renderProduct = (prod: Product) => (
    <div key={prod.id} className="group relative glass-card rounded-3xl p-4 hover:border-brand-pink/20 hover:shadow-lg hover:shadow-brand-pink/5 transition-all duration-300">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-light">
        <Image 
          src="/images/product-detail.png" 
          alt={prod.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-surface/80 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider text-brand-pink">
            {prod.type}
          </span>
        </div>
      </div>
      <h3 className="font-bold text-sm mb-1 truncate text-foreground-custom">{prod.name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-lg font-black text-accent-rose">S/{prod.price}</span>
        <button 
          onClick={() => onAddProduct(prod)}
          className="bg-brand-pink hover:bg-brand-pink-hover text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm shadow-brand-pink/20 active:scale-90"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <section id="productos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground-custom">Nuestra Colección ✨</h2>
            <p className="text-foreground-custom/40">
              Selección exclusiva traída directamente de USA. 🇺🇸
            </p>
          </div>
          <div className="glass-card px-6 py-4 rounded-[2rem] border-2 border-dashed border-accent-rose/20 animate-pulse">
            <span className="text-accent-rose font-black text-xl italic tracking-tighter">
              ¡PROMO! 2 por S/150 🔥
            </span>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground-custom">
            <span className="w-8 h-1 pink-gradient rounded-full" />
            Body Mists
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {mists.map(renderProduct)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground-custom">
            <span className="w-8 h-1 pink-gradient rounded-full" />
            Lotions
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {lotions.map(renderProduct)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
