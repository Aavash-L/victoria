import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-brand-pink-light via-white to-white">
      {/* Soft Decorative Blobs */}
      <div className="absolute top-20 right-0 -z-10 w-[400px] h-[400px] bg-brand-pink-soft/30 blur-[100px] rounded-full translate-x-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-accent-blush/40 blur-[80px] rounded-full -translate-x-1/4" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink-light border border-brand-pink-muted text-accent-rose text-xs font-bold uppercase tracking-wider mb-6">
              <span>🇺🇸</span> Importado de Estados Unidos
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground-custom leading-[1.1] mb-4">
              Regala <span className="pink-gradient-text">fragancias originales</span> este Día de la Madre
            </h1>
            <p className="text-lg text-foreground-custom/60 mb-4 max-w-xl">
              Body mists y lociones de Victoria&apos;s Secret traídas directamente desde USA. 
              El regalo perfecto para mamá. 💝
            </p>
            <div className="inline-block mb-8 bg-sale-bg border border-sale-red/20 rounded-2xl px-5 py-3">
              <span className="text-sale-red font-black text-lg">🔥 Flash Sale: Hasta -12% de descuento</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#flash-sale" 
                className="w-full sm:w-auto px-8 py-4 pink-gradient text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-pink/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-pink/35 active:scale-95 text-center"
              >
                💖 Ver Ofertas
              </a>
              <a 
                href="https://wa.me/51984134663" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-brand-pink-muted text-accent-rose rounded-2xl font-bold text-lg transition-all hover:bg-brand-pink-light text-center"
              >
                💬 Comprar ahora
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start opacity-50">
              <span className="text-xs font-semibold text-foreground-custom/50">Trusted by:</span>
              <div className="flex gap-4">
                <span className="font-bold text-foreground-custom text-sm">Victoria&apos;s Secret</span>
                <span className="font-bold uppercase tracking-tighter italic text-foreground-custom text-sm">BATH & BODY WORKS</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 relative w-full max-w-lg">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden soft-glow border-4 border-white shadow-2xl shadow-brand-pink/10">
              <Image 
                src="/images/hero.png" 
                alt="Victoria's Secret Mists" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-brand-pink-muted flex flex-col items-center animate-bounce-slow">
              <span className="text-2xl">💖</span>
              <span className="text-[10px] font-bold text-accent-rose uppercase">Top Seller</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-lg border border-brand-pink-muted flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full pink-gradient flex items-center justify-center text-white font-bold text-[10px]">
                100%
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground-custom">Original</span>
                <span className="text-[10px] text-foreground-custom/40 uppercase">Garantizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
