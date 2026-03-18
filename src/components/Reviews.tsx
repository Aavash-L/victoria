import React from 'react';

const reviews = [
  {
    name: "Andrea M.",
    text: "¡Amo mi Bare Vanilla! Llegó súper rápido y huele increíble. 100% original, se nota en la calidad.",
    rating: 5,
    date: "Ayer"
  },
  {
    name: "Luciana G.",
    text: "Es la segunda vez que pido. Me encanta que traigan los de shimmer, son difíciles de conseguir acá.",
    rating: 5,
    date: "Hace 3 días"
  },
  {
    name: "Valeria C.",
    text: "La atención por WhatsApp es súper amable. Me ayudaron a elegir mi aroma favorito. ¡Gracias!",
    rating: 5,
    date: "Hace 1 semana"
  }
];

const Reviews = () => {
  return (
    <section id="reseñas" className="py-24 bg-brand-pink-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground-custom">
            Lo que dicen nuestras clientas ✨
          </h2>
          <p className="text-foreground-custom/50">Únete a las más de 200 chicas felices con sus fragancias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-pink-muted flex flex-col justify-between hover:shadow-lg hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rev.rating)].map((_, j) => (
                    <span key={j} className="text-accent-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground-custom/70 italic mb-6 leading-relaxed">&quot;{rev.text}&quot;</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-accent-rose">{rev.name}</span>
                <span className="text-[10px] uppercase font-bold text-foreground-custom/30">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full border border-brand-pink-muted shadow-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white pink-gradient" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground-custom/60">+200 clientas felices en Lima</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
