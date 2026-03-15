import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full pink-gradient opacity-10 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full pink-gradient opacity-5 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink-light text-accent-rose text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <span>🇺🇸</span> IMPORTADO DE ESTADOS UNIDOS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground-custom leading-[1.1] mb-6">
              Fragancias <span className="text-accent-rose">originales</span> de USA ahora en Perú
            </h1>
            <p className="text-lg text-foreground-custom/70 mb-8 max-w-xl">
              Body mists y lociones originales traídas desde Estados Unidos. 
              Stock limitado disponible ahora en Lima para entrega inmediata.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#productos" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-pink hover:bg-brand-pink-hover text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-pink/20 hover:-translate-y-1 active:scale-95 text-center"
              >
                Ver productos
              </a>
              <a 
                href="https://wa.me/5198410034663" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-brand-pink-light text-accent-rose rounded-2xl font-bold text-lg transition-all hover:bg-brand-pink-light text-center"
              >
                Comprar ahora
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start grayscale opacity-60">
              <span className="text-xs font-semibold text-foreground-custom/40">Trusted by:</span>
              <div className="flex gap-4">
                <span className="font-bold">Victoria&apos;s Secret</span>
                <span className="font-bold uppercase tracking-tighter italic">BATH & BODY WORKS</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 relative w-full max-w-lg">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden soft-glow">
              <Image 
                src="/images/hero.png" 
                alt="Victoria's Secret Mists" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center animate-bounce-slow">
              <span className="text-2xl">💖</span>
              <span className="text-[10px] font-bold text-foreground-custom/40 uppercase">Top Seller</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full pink-gradient flex items-center justify-center text-white font-bold">
                100%
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Original</span>
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
