import { Briefcase, Building2, Plane } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Наши услуги</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#D4B483] text-white rounded-3xl p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-between group cursor-pointer">
            <div className="absolute top-0 right-0 p-8 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
               <Briefcase className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold z-10">ВЭД платежи</h3>
            <p className="z-10 text-white/90 text-sm mt-2">Оплата инвойсов за товары и услуги по всему миру (Китай, Европа, ОАЭ).</p>
        </div>

        <div className="bg-white text-gray-900 rounded-3xl p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-between group cursor-pointer shadow-sm">
            <div className="absolute top-0 right-0 p-8 text-gray-100 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
               <Plane className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold z-10">Перестановка наличных</h3>
            <p className="z-10 text-gray-500 text-sm mt-2">Мгновенные переводы наличных между городами и странами.</p>
        </div>

        <div className="bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-between group cursor-pointer shadow-sm">
             <div className="absolute top-0 right-0 p-8 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
               <Building2 className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold z-10">Покупка недвижимости</h3>
            <p className="z-10 text-gray-400 text-sm mt-2">Помощь в оплате недвижимости за рубежом криптовалютой.</p>
        </div>
      </div>
    </section>
  );
}
