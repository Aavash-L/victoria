"use client";

import React from 'react';

interface FlashSaleProduct {
  name: string;
  originalPrice: number;
  salePrice: number;
}

const flashSaleProducts: FlashSaleProduct[] = [
  { name: "Bare Vanilla Mist", originalPrice: 85, salePrice: 75 },
  { name: "Pure Seduction Mist", originalPrice: 85, salePrice: 75 },
  { name: "Bare Vanilla Lotion", originalPrice: 85, salePrice: 75 },
  { name: "Lace Vanilla", originalPrice: 90, salePrice: 80 },
  { name: "Coconut Passion", originalPrice: 85, salePrice: 75 },
  { name: "Bare Vanilla Shimmer", originalPrice: 85, salePrice: 75 },
];

const FlashSale = () => {
  return (
    <section id="flash-sale" className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sale-red/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-pink/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sale-red/10 border border-sale-red/20 mb-6 sale-pulse">
            <span className="text-xl">🔥</span>
            <span className="text-sale-red font-black text-sm uppercase tracking-widest">Flash Sale</span>
            <span className="text-xl">🔥</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ofertas por <span className="text-sale-red">tiempo limitado</span>
          </h2>
          <p className="text-foreground-custom/50 max-w-lg mx-auto">
            ¡Aprovecha estos precios exclusivos antes de que se agoten!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {flashSaleProducts.map((product, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-sale-red/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-foreground-custom truncate mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-foreground-custom/30 line-through text-sm font-medium">
                    S/{product.originalPrice}
                  </span>
                  <span className="text-foreground-custom/30">→</span>
                  <span className="text-sale-red font-black text-lg">
                    S/{product.salePrice}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-sale-red/10 flex items-center justify-center border border-sale-red/20 group-hover:bg-sale-red/20 transition-colors">
                  <span className="text-sale-red font-black text-xs">
                    -{Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/51984134663"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sale-red to-brand-pink-hover text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-sale-red/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-sale-red/30 active:scale-95"
          >
            <span className="text-2xl">💬</span>
            ¡Pedir ahora por WhatsApp!
          </a>
          <p className="text-foreground-custom/30 text-xs mt-4 font-medium uppercase tracking-widest">
            Stock limitado · Precios exclusivos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
