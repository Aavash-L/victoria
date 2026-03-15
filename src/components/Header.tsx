import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-pink-light">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-accent-rose flex items-center gap-2">
          <span className="text-3xl">✨</span>
          <span className="tracking-tight">USA Beauty</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-custom/70">
          <a href="#productos" className="hover:text-brand-pink transition-colors">Productos</a>
          <a href="#proceso" className="hover:text-brand-pink transition-colors">Cómo Importamos</a>
          <a href="#reseñas" className="hover:text-brand-pink transition-colors">Reseñas</a>
        </nav>
        <a 
          href="https://wa.me/5198410034663"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-pink hover:bg-brand-pink-hover text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
