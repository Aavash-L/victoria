"use client";

import React, { useState } from 'react';
import { Product } from '@/app/page';

interface OrderPanelProps {
  items: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
}

const OrderPanel: React.FC<OrderPanelProps> = ({ items, isOpen, onClose, onRemove }) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const calculateTotal = () => {
    const count = items.length;
    const pairCount = Math.floor(count / 2);
    const singletonCount = count % 2;
    
    let total = pairCount * 150;
    
    if (singletonCount > 0) {
      const lastItem = items[items.length - 1];
      total += lastItem.price;
    }
    
    return total;
  };

  const handleOrder = async (platform: 'whatsapp' | 'instagram') => {
    const total = calculateTotal();
    const itemList = items.map((item, i) => `${i + 1}. ${item.name} (${item.type})`).join('\n');
    const message = `Hola! ✨ Deseo pedir:\n\n${itemList}\n\nTotal: S/${total}\n\nGracias!`;

    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus('copied');
      
      const links = {
        whatsapp: 'https://wa.me/51984134663',
        instagram: 'https://www.instagram.com/secretscentvs/'
      };

      setTimeout(() => {
        setCopyStatus('idle');
        window.open(links[platform], '_blank');
      }, 1000);
    } catch (err) {
      console.error('Error copying to clipboard', err);
    }
  };

  if (!items.length) return null;

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      {/* Content */}
      <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] flex flex-col max-h-[92vh] transition-transform duration-500 transform shadow-2xl ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="w-12 h-1.5 bg-brand-pink-soft rounded-full mx-auto my-4 flex-shrink-0 cursor-pointer" onClick={onClose} />
        
        <div className="px-6 pb-4 flex-shrink-0">
          <h3 className="text-xl font-bold flex items-center justify-between text-foreground-custom">
            Tu Pedido ✨
            <button onClick={onClose} className="p-2 -mr-2 text-foreground-custom/30 hover:text-foreground-custom/60 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b border-brand-pink-muted last:border-0">
              <div className="flex flex-col pr-4">
                <span className="font-bold text-sm leading-tight text-foreground-custom">{item.name}</span>
                <span className="text-[9px] uppercase tracking-widest text-foreground-custom/40 mt-1">{item.type}</span>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="font-bold text-accent-rose text-sm">S/{item.price}</span>
                <button onClick={() => onRemove(item.id)} className="p-2 -mr-2 text-brand-pink-soft hover:text-sale-red transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-6 bg-brand-pink-light/50 border-t border-brand-pink-muted rounded-t-3xl flex-shrink-0">
          <div className="bg-white p-4 rounded-2xl mb-6 border border-brand-pink-muted shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-foreground-custom/50 uppercase tracking-wider">Total estimado</span>
              <span className="text-2xl font-black text-accent-rose">S/{calculateTotal()}</span>
            </div>
            {items.length >= 2 && (
              <p className="text-[10px] font-bold text-brand-pink tracking-tight uppercase flex items-center gap-1">
                <span className="text-xs">✨</span> ¡Promo 2 por S/150 aplicada!
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button 
              onClick={() => handleOrder('whatsapp')}
              disabled={copyStatus === 'copied'}
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-md shadow-[#25D366]/20 relative overflow-hidden"
            >
              <span className="text-xl">💬</span>
              {copyStatus === 'copied' ? '¡PEDIDO COPIADO!' : 'WHATSAPP'}
            </button>
            
            <button 
              onClick={() => handleOrder('instagram')}
              disabled={copyStatus === 'copied'}
              className="flex items-center justify-center gap-3 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-md relative overflow-hidden"
            >
              <span className="text-xl">📸</span>
              {copyStatus === 'copied' ? '¡COPIADO!' : 'INSTAGRAM'}
            </button>
          </div>
          <p className="text-[9px] text-center mt-4 text-foreground-custom/30 uppercase tracking-[0.2em] font-black">
            Se copiará tu pedido automáticamente
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
