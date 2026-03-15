import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-pink-light/20 pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-accent-rose mb-8 flex items-center justify-center gap-2">
          <span>✨</span> USA Beauty Peru
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <a href="https://www.instagram.com/secretscentvs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-brand-pink-light hover:shadow-md transition-shadow">
            <span className="text-xl">📸</span>
            <span className="font-bold text-foreground-custom/70">Instagram</span>
          </a>
          <a href="https://wa.me/5198410034663" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-brand-pink-light hover:shadow-md transition-shadow">
            <span className="text-xl">💬</span>
            <span className="font-bold text-foreground-custom/70">WhatsApp</span>
          </a>
        </div>

        <div className="max-w-md mx-auto mb-12 bg-white p-6 rounded-3xl border border-brand-pink-light border-dashed">
          <p className="text-sm font-bold text-accent-rose uppercase mb-2 tracking-widest">⚠️ Stock Limitado</p>
          <p className="text-xs text-foreground-custom/50 leading-relaxed italic">
            &quot;Los productos llegan en envíos pequeños desde USA. Una vez se agotan, el siguiente envío tarda 15-20 días.&quot;
          </p>
        </div>

        <div className="pt-10 border-t border-brand-pink-light text-[10px] uppercase font-bold text-foreground-custom/30 tracking-widest">
          &copy; {new Date().getFullYear()} USA Beauty Import · Lima, Perú
        </div>
      </div>
    </footer>
  );
};

export default Footer;
