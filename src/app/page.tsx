"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlashSale from "@/components/FlashSale";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import OrderPanel from "@/components/OrderPanel";

export type Product = {
  id: string;
  name: string;
  type: "Mist" | "Lotion";
  price: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderPanelOpen, setIsOrderPanelOpen] = useState(false);

  const totalItemCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Number(item.quantity) + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOrderPanelOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: Number(newQty) } : item
      )
    );
  };

  const getQuantity = (id: string) => {
    const item = cart.find((item) => item.product.id === id);
    return item ? Number(item.quantity) : 0;
  };

  // Prevent background scroll when panel is open
  useEffect(() => {
    if (isOrderPanelOpen && cart.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOrderPanelOpen, cart.length]);

  return (
    <main className="min-h-screen bg-background-custom">
      <Header
        cartCount={totalItemCount}
        onCartClick={() => {
          if (cart.length > 0) setIsOrderPanelOpen(true);
        }}
      />
      <Hero />
      <FlashSale onAddProduct={addToCart} getQuantity={getQuantity} onUpdateQuantity={updateQuantity} />
      <WhyUs />
      <Products onAddProduct={addToCart} getQuantity={getQuantity} onUpdateQuantity={updateQuantity} />
      <Trust />
      <Reviews />

      {/* Floating Cart Button for Mobile */}
      {cart.length > 0 && !isOrderPanelOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] md:hidden transition-transform active:scale-95">
          <button
            onClick={() => setIsOrderPanelOpen(true)}
            className="w-full flex items-center justify-center gap-3 pink-gradient text-white py-4 rounded-2xl font-bold shadow-2xl shadow-brand-pink/30"
          >
            <span className="text-xl">🛒</span>
            View Order ({totalItemCount} {totalItemCount === 1 ? 'product' : 'products'})
          </button>
        </div>
      )}

      {/* Floating CTA for Mobile (Shows if cart is empty) */}
      {cart.length === 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] md:hidden transition-transform active:scale-95">
          <a
            href="https://wa.me/51984134663"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-2xl shadow-[#25D366]/30"
          >
            <span className="text-xl">💬</span>
            Order via WhatsApp
          </a>
        </div>
      )}

      {/* Order Panel / Summary */}
      <OrderPanel
        items={cart}
        isOpen={isOrderPanelOpen}
        onClose={() => setIsOrderPanelOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <Footer />
    </main>
  );
}
