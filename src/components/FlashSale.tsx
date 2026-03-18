"use client";

import React from 'react';
import Image from 'next/image';

interface FlashSaleProduct {
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
}

const flashSaleProducts: FlashSaleProduct[] = [
  { name: "Bare Vanilla Mist", originalPrice: 85, salePrice: 75, image: "/images/IMG_8451.jpg" },
  { name: "Pure Seduction Mist", originalPrice: 85, salePrice: 75, image: "/images/IMG_8002.jpg" },
  { name: "Bare Vanilla Lotion", originalPrice: 85, salePrice: 75, image: "/images/IMG_6738.jpg" },
  { name: "Lace Vanilla", originalPrice: 90, salePrice: 80, image: "/images/IMG_6738.jpg" },
  { name: "Coconut Passion", originalPrice: 85, salePrice: 75, image: "/images/IMG_0468.jpg" },
  { name: "Bare Vanilla Shimmer", originalPrice: 85, salePrice: 75, image: "/images/IMG_1630.jpg" },
];

const FlashSale = () => {
  return (
    <section id="flash-sale" className="py-20 bg-gradient-to-b from-white via-sale-bg to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">🌸</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">🌷</div>
      <div className="absolute top-1/2 right-5 text-4xl opacity-10">💐</div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border-2 border-sale-red/20 mb-6 shadow-sm animate-sale-pulse">
            <span className="text-xl">💖</span>
            <span className="text-sale-red font-black text-sm uppercase tracking-widest">Mother&apos;s Day Flash Sale</span>
            <span className="text-xl">💖</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground-custom">
            El regalo perfecto para <span className="pink-gradient-text">mamá</span>
          </h2>
          <p className="text-foreground-custom/50 max-w-lg mx-auto">
            ¡Aprovecha descuentos exclusivos en fragancias originales de Victoria&apos;s Secret!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-14">
          {flashSaleProducts.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-brand-pink-muted shadow-sm hover:shadow-xl hover:shadow-brand-pink/10 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              {/* SALE Badge */}
              <div className="absolute top-3 left-3 z-10 sale-badge shadow-sm">
                SALE
              </div>
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 z-10 bg-sale-red text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm">
                -{Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}%
              </div>

              {/* Product Image */}
              <div className="relative aspect-square bg-brand-pink-light/30 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-sm text-foreground-custom mb-2 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-foreground-custom/35 line-through text-sm">
                    S/{product.originalPrice}
                  </span>
                  <span className="text-foreground-custom/35">→</span>
                  <span className="text-sale-red font-black text-xl">
                    S/{product.salePrice}
                  </span>
                </div>
                <p className="text-[10px] text-sale-red font-bold mt-1 uppercase tracking-wider">
                  Flash Sale 🔥
                </p>
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
            className="inline-flex items-center gap-3 px-10 py-4 pink-gradient text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-pink/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-pink/35 active:scale-95"
          >
            <span className="text-2xl">💬</span>
            ¡Pedir ahora por WhatsApp!
          </a>
          <p className="text-foreground-custom/40 text-xs mt-4 font-semibold uppercase tracking-widest">
            💖 Regala algo especial este Día de la Madre 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
