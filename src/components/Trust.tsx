import React from 'react';
import Image from 'next/image';

const Trust = () => {
  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-brand-pink-soft/20 blur-3xl rounded-full -z-10" />
              <div className="rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl skew-y-3">
                <Image 
                  src="/images/trust-usa.png" 
                  alt="USA Shipment Box" 
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Overlay Badge */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] border border-brand-pink-light">
                <p className="text-xs font-bold text-foreground-custom/40 uppercase mb-2">Directo de USA 🇺🇸</p>
                <p className="text-sm italic font-medium">
                  &quot;Cada caja es desempacada con amor en Lima.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Importado directamente desde <span className="text-accent-rose underline decoration-wavy decoration-brand-pink-soft">Estados Unidos</span> 🇺🇸
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-pink-light flex items-center justify-center text-2xl shadow-sm">
                  🏬
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Tiendas Oficiales</h4>
                  <p className="text-foreground-custom/60">
                    Compramos exclusivamente en boutiques de Victoria&apos;s Secret en Miami y New York.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-pink-light flex items-center justify-center text-2xl shadow-sm">
                  📦
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Envío Seguro</h4>
                  <p className="text-foreground-custom/60">
                    Nuestros productos viajan con cuidado extremo para que lleguen intactos a tus manos.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-pink-light flex items-center justify-center text-2xl shadow-sm">
                  💎
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">100% Auténtico</h4>
                  <p className="text-foreground-custom/60">
                    No aceptamos imitaciones. El aroma y la calidad original que tanto te gusta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
