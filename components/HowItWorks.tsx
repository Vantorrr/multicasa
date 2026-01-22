import { MapPin, ArrowUpRight, Calculator, HandCoins } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 px-4">Как обменять валюту?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {/* Step 1 */}
        <div className="bg-white rounded-3xl p-6 min-h-[320px] relative flex flex-col justify-between overflow-hidden shadow-sm">
          <div>
            <h3 className="text-xl font-bold mb-4 leading-tight">
              Выберите нужные валюты для обмена и укажите суммы
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Курс обмена фиксируется на 30 минут для онлайн направлений. 
              Для наличных направлений - курс актуализируется при личной встрече.
            </p>
          </div>
          <div className="flex items-end justify-between">
             <div className="bg-[#F5F5F7] px-3 py-1 rounded-lg font-bold text-gray-400">01</div>
             {/* Stylish SVG Icon */}
             <div className="w-24 h-24 bg-[#FFF8E7] rounded-full flex items-center justify-center -mr-4 -mb-4">
                <Calculator className="w-12 h-12 text-[#D4B483]" strokeWidth={1.5} />
             </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-3xl p-6 min-h-[320px] relative flex flex-col justify-between overflow-hidden shadow-sm">
          <div>
            <h3 className="text-xl font-bold mb-4 leading-tight">
              Произведите оплату по указанным реквизитам
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Мы предоставим Вам реквизиты для оплаты или договоримся о встрече
            </p>
          </div>
          <div className="flex items-end justify-between">
             <div className="bg-[#F5F5F7] px-3 py-1 rounded-lg font-bold text-gray-400">02</div>
             {/* Stylish SVG Icon */}
             <div className="w-24 h-24 bg-[#FFF8E7] rounded-full flex items-center justify-center -mr-4 -mb-4">
                <HandCoins className="w-12 h-12 text-[#D4B483]" strokeWidth={1.5} />
             </div>
          </div>
        </div>

        {/* Step 3 - Office Card */}
        <div className="rounded-3xl p-6 min-h-[320px] relative flex flex-col justify-between overflow-hidden text-white group cursor-pointer">
          {/* Background Image - Moscow City Towers */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1558666326-b92440938f8f?auto=format&fit=crop&w=800&q=80" 
               alt="Moscow City" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 flex justify-between items-start">
             <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">Проведем сделку в офисе</div>
             <ArrowUpRight className="w-5 h-5 text-white/70" />
          </div>

          <div className="relative z-10 mt-auto">
             <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Адрес офиса:</span>
             </div>
             <div className="text-2xl font-bold mb-1">Москва</div>
             <div className="text-lg font-medium leading-tight mb-4">
               Пресненская набережная, 12 <br/>
               <span className="text-gray-400 text-base">Башня Федерация Восток</span>
             </div>
             
             <button className="w-full bg-[#D4B483] hover:bg-[#B59561] text-white py-3 rounded-xl font-bold transition-colors text-sm">
                Посмотреть на карте
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
