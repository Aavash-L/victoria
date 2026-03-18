import React from 'react';

const Header = () => {
  return (
    <>
      {/* Mother's Day Sale Top Banner */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-pink-hover to-accent-rose text-white text-center py-2.5 text-sm font-bold tracking-wide fixed top-0 left-0 right-0 z-[60]">
        💖 Mother&apos;s Day Flash Sale — ¡Precios especiales por tiempo limitado! 💖
      </div>
      
      <header className="fixed top-[38px] left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-pink-muted/50 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="text-xl font-bold text-accent-rose flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="tracking-tight">USA Beauty</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground-custom/60">
            <a href="#flash-sale" className="hover:text-brand-pink transition-colors flex items-center gap-1">
              <span className="sale-badge">SALE</span> Flash Sale
            </a>
            <a href="#productos" className="hover:text-brand-pink transition-colors">Productos</a>
            <a href="#proceso" className="hover:text-brand-pink transition-colors">Importamos</a>
            <a href="#reseñas" className="hover:text-brand-pink transition-colors">Reseñas</a>
          </nav>

          <a 
            href="https://wa.me/51984134663"
            target="_blank"
            rel="noopener noreferrer"
            className="pink-gradient text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm shadow-brand-pink/20 hover:shadow-md hover:shadow-brand-pink/30 active:scale-95"
          >
            💬 WhatsApp
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
