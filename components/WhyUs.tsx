import { ShieldCheck, Zap, Globe, Users } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Почему мы?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-[#D4B483]" />
           </div>
           <h3 className="text-xl font-bold mb-2">Надежность</h3>
           <p className="text-sm text-gray-500">Работаем на рынке более 5 лет. Проводим AML проверку всех активов.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#D4B483]" />
           </div>
           <h3 className="text-xl font-bold mb-2">Скорость</h3>
           <p className="text-sm text-gray-500">Среднее время обработки заявки — 15 минут. Выдача наличных день в день.</p>
        </div>

         {/* Card 3 */}
         <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#D4B483]" />
           </div>
           <h3 className="text-xl font-bold mb-2">География</h3>
           <p className="text-sm text-gray-500">Офисы и курьеры в 35+ странах мира. Оплата инвойсов в любой точке.</p>
        </div>

         {/* Card 4 */}
         <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#D4B483]" />
           </div>
           <h3 className="text-xl font-bold mb-2">Поддержка</h3>
           <p className="text-sm text-gray-500">Персональный менеджер для каждой сделки. На связи с 09:00 до 21:00 МСК.</p>
        </div>
      </div>
    </section>
  );
}
