import React from 'react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-glass-border">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gradient-pink mb-8 flex items-center justify-center gap-2">
          <span>✨</span> USA Beauty Peru
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a href="https://www.instagram.com/secretscentvs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:border-brand-pink/20 transition-all">
            <span className="text-xl">📸</span>
            <span className="font-bold text-foreground-custom/60">Instagram</span>
          </a>
          <a href="https://wa.me/51984134663" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:border-brand-pink/20 transition-all">
            <span className="text-xl">💬</span>
            <span className="font-bold text-foreground-custom/60">WhatsApp</span>
          </a>
        </div>

        <div className="max-w-md mx-auto mb-12 glass-card p-6 rounded-3xl border-dashed">
          <p className="text-sm font-bold text-accent-rose uppercase mb-2 tracking-widest">⚠️ Stock Limitado</p>
          <p className="text-xs text-foreground-custom/40 leading-relaxed italic">
            &quot;Los productos llegan en envíos pequeños desde USA. Una vez se agotan, el siguiente envío tarda 15-20 días.&quot;
          </p>
        </div>

        <div className="pt-10 border-t border-glass-border text-[10px] uppercase font-bold text-foreground-custom/20 tracking-widest">
          &copy; {new Date().getFullYear()} USA Beauty Import · Lima, Perú
        </div>
      </div>
    </footer>
  );
};

export default Footer;
