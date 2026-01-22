import { Instagram, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] pt-12 pb-8 border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Partners */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="font-bold text-xl tracking-tighter">BEST<span className="font-normal text-gray-500">CHANGE</span></span>
           <span className="font-bold text-xl tracking-tighter text-gray-400">EXCHANGESUMO</span>
           <span className="font-bold text-xl tracking-tighter text-gray-600">EXNODE</span>
           <span className="font-bold text-xl tracking-tighter italic">Bits.media</span>
           <span className="font-bold text-xl tracking-tighter">РБК <span className="font-normal">КРИПТО</span></span>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4 mb-8">
           <a href="#" className="w-12 h-12 rounded-full border border-[#D4B483] flex items-center justify-center text-[#D4B483] hover:bg-[#D4B483] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
           </a>
           <a href="#" className="w-12 h-12 rounded-full border border-[#D4B483] flex items-center justify-center text-[#D4B483] hover:bg-[#D4B483] hover:text-white transition-colors">
              <Send className="w-5 h-5" />
           </a>
           <a href="#" className="w-12 h-12 rounded-full border border-[#D4B483] flex items-center justify-center text-[#D4B483] hover:bg-[#D4B483] hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
           </a>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-200 pt-8">
          <p className="mb-2">© 2024 MultiKassa. Все права защищены.</p>
          <div className="flex justify-center flex-wrap gap-4 text-xs">
            <a href="#" className="hover:text-gray-600">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-600">Пользовательское соглашение</a>
            <a href="#" className="hover:text-gray-600">AML/KYC</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
