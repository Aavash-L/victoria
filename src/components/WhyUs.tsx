import React from 'react';

const WhyUs = () => {
  const points = [
    { title: "Aromas dulces", desc: "Las fragancias más buscadas y femeninas.", icon: "🍭" },
    { title: "Virales en TikTok", desc: "Los productos que todas quieren ahora mismo.", icon: "📱" },
    { title: "Larga duración", desc: "Fragancias que te acompañan todo el día.", icon: "✨" },
    { title: "100% Originales", desc: "Importados directamente de tiendas oficiales.", icon: "🇺🇸" },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground-custom">
          ¿Por qué todas aman estas fragancias?
        </h2>
        <p className="text-foreground-custom/40 mb-12 max-w-2xl mx-auto">
          Traemos la magia de Victoria&apos;s Secret directo de USA a tus manos.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {points.map((point, i) => (
            <div 
              key={i} 
              className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col items-center hover:-translate-y-2 transition-all duration-300 hover:border-brand-pink/20"
            >
              <span className="text-4xl mb-4">{point.icon}</span>
              <h3 className="text-base md:text-lg font-bold mb-2 text-foreground-custom">{point.title}</h3>
              <p className="text-sm text-foreground-custom/40 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
