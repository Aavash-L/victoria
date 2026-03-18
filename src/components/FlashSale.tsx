"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/page';

interface FlashSaleProduct {
  id: string;
  name: string;
  type: "Mist" | "Lotion";
  originalPrice: number;
  salePrice: number;
  image: string;
}

interface FlashSaleProps {
  onAddProduct: (product: Product) => void;
  getQuantity: (id: string) => number;
  onUpdateQuantity: (id: string, qty: number) => void;
}

const flashSaleProducts: FlashSaleProduct[] = [
  { id: "fs-bv", name: "Bare Vanilla Mist", type: "Mist", originalPrice: 85, salePrice: 75, image: "/images/IMG_8451.jpg" },
  { id: "fs-ps", name: "Pure Seduction Mist", type: "Mist", originalPrice: 85, salePrice: 75, image: "/images/IMG_8002.jpg" },
  { id: "fs-bvl", name: "Bare Vanilla Lotion", type: "Lotion", originalPrice: 90, salePrice: 80, image: "/images/IMG_6738.jpg" },
  { id: "fs-cp", name: "Coconut Passion", type: "Mist", originalPrice: 85, salePrice: 75, image: "/images/IMG_0468.jpg" },
  { id: "fs-bvs", name: "Bare Vanilla Shimmer", type: "Mist", originalPrice: 85, salePrice: 75, image: "/images/IMG_1630.jpg" },
];

const FlashSale: React.FC<FlashSaleProps> = ({ onAddProduct, getQuantity, onUpdateQuantity }) => {
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
          {flashSaleProducts.map((product) => {
            const qty = getQuantity(product.id);
            return (
              <div
                key={product.id}
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-foreground-custom/35 line-through text-sm">
                      S/{product.originalPrice}
                    </span>
                    <span className="text-foreground-custom/35">→</span>
                    <span className="text-sale-red font-black text-xl">
                      S/{product.salePrice}
                    </span>
                  </div>

                  {/* Add to Cart / Quantity Controls */}
                  {qty === 0 ? (
                    <button
                      onClick={() => onAddProduct({ id: product.id, name: product.name, type: product.type, price: product.salePrice })}
                      className="w-full pink-gradient text-white py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-brand-pink/20 active:scale-95 hover:shadow-md flex items-center justify-center gap-2"
                    >
                      <span>🛒</span> Agregar
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-brand-pink-light rounded-xl p-1">
                      <button
                        onClick={() => onUpdateQuantity(product.id, qty - 1)}
                        className="w-9 h-9 rounded-lg bg-white text-accent-rose font-bold text-lg flex items-center justify-center shadow-sm transition-all active:scale-90 hover:bg-brand-pink-light"
                      >
                        −
                      </button>
                      <span className="font-black text-accent-rose text-lg min-w-[2rem] text-center">{qty}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, qty + 1)}
                        className="w-9 h-9 rounded-lg pink-gradient text-white font-bold text-lg flex items-center justify-center shadow-sm transition-all active:scale-90"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-foreground-custom/40 text-xs font-semibold uppercase tracking-widest">
            💖 Regala algo especial este Día de la Madre 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
