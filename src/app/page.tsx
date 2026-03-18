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

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOrderPanelOpen, setIsOrderPanelOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, { ...product, id: `${product.id}-${Date.now()}` }]);
    setIsOrderPanelOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
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
      <Header />
      <Hero />
      <FlashSale />
      <WhyUs />
      <Products onAddProduct={addToCart} />
      <Trust />
      <Reviews />
      
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
            Ordenar por WhatsApp
          </a>
        </div>
      )}

      {/* Order Panel / Summary */}
      <OrderPanel 
        items={cart} 
        isOpen={isOrderPanelOpen} 
        onClose={() => setIsOrderPanelOpen(false)} 
        onRemove={removeFromCart}
      />

      <Footer />
    </main>
  );
}
