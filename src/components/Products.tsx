"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/page';

interface ProductsProps {
  onAddProduct: (product: Product) => void;
  getQuantity: (id: string) => number;
  onUpdateQuantity: (id: string, qty: number) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddProduct, getQuantity, onUpdateQuantity }) => {
  const mists: (Product & { image: string })[] = [
    { id: "m-bv", name: "Bare Vanilla", type: "Mist", price: 85, image: "/images/IMG_8451.jpg" },
    { id: "m-ps", name: "Pure Seduction", type: "Mist", price: 85, image: "/images/IMG_8002.jpg" },
    { id: "m-bvs", name: "Bare Vanilla Shimmer", type: "Mist", price: 85, image: "/images/IMG_1630.jpg" },
    { id: "m-cp", name: "Coconut Passion", type: "Mist", price: 85, image: "/images/IMG_0468.jpg" },
    { id: "m-vl", name: "Vanilla Lace", type: "Mist", price: 85, image: "/images/IMG_8451.jpg" },
  ];

  const lotions: (Product & { image: string })[] = [
    { id: "l-bv", name: "Bare Vanilla", type: "Lotion", price: 90, image: "/images/IMG_6738.jpg" },
  ];

  const renderProduct = (prod: Product & { image: string }) => {
    const qty = getQuantity(prod.id);
    return (
      <div key={prod.id} className="group relative bg-white rounded-3xl overflow-hidden border border-brand-pink-muted hover:shadow-xl hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-brand-pink-light/20">
          <Image 
            src={prod.image} 
            alt={prod.name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider text-accent-rose shadow-sm">
              {prod.type}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-sm mb-2 truncate text-foreground-custom">{prod.name}</h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-black text-accent-rose">S/{prod.price}</span>
          </div>
          {/* Add to Cart / Quantity Controls */}
          {qty === 0 ? (
            <button 
              onClick={() => onAddProduct(prod)}
              className="w-full pink-gradient text-white py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-brand-pink/20 active:scale-95 hover:shadow-md flex items-center justify-center gap-2"
            >
              <span>🛒</span> Agregar
            </button>
          ) : (
            <div className="flex items-center justify-between bg-brand-pink-light rounded-xl p-1">
              <button
                onClick={() => onUpdateQuantity(prod.id, qty - 1)}
                className="w-9 h-9 rounded-lg bg-white text-accent-rose font-bold text-lg flex items-center justify-center shadow-sm transition-all active:scale-90 hover:bg-brand-pink-light"
              >
                −
              </button>
              <span className="font-black text-accent-rose text-lg min-w-[2rem] text-center">{qty}</span>
              <button
                onClick={() => onUpdateQuantity(prod.id, qty + 1)}
                className="w-9 h-9 rounded-lg pink-gradient text-white font-bold text-lg flex items-center justify-center shadow-sm transition-all active:scale-90"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="productos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground-custom">Nuestra Colección ✨</h2>
            <p className="text-foreground-custom/50">
              Selección exclusiva traída directamente de USA. 🇺🇸
            </p>
          </div>
          <div className="bg-sale-bg px-6 py-4 rounded-[2rem] border-2 border-dashed border-sale-red/30 animate-sale-pulse">
            <span className="text-sale-red font-black text-xl italic tracking-tighter">
              ¡PROMO! 2 por S/140 🔥
            </span>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground-custom">
            <span className="w-8 h-1 pink-gradient rounded-full" />
            Body Mists
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {mists.map(renderProduct)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground-custom">
            <span className="w-8 h-1 pink-gradient rounded-full" />
            Lotions
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {lotions.map(renderProduct)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
