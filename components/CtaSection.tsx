'use client';

import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-12 px-4">
       <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center md:text-left relative overflow-hidden shadow-sm">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F5F7] rounded-full -mr-32 -mt-32 opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4B483] rounded-full -ml-24 -mb-24 opacity-10 pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold text-[#D4B483] mb-8 relative z-10">
            Заполните форму заявки на сайте.
          </h2>

          <div className="space-y-6 max-w-2xl relative z-10">
             <p className="text-lg text-gray-700 leading-relaxed">
               Прием заявок осуществляется круглосуточно, обработка заявок — <span className="font-bold">с 09:00 до 21:00 часов по МСК</span>, с вами свяжется менеджер и ответит на ваши вопросы.
             </p>
             <p className="text-lg text-gray-700 leading-relaxed">
               Выдача и прием наличных — по индивидуальному графику в вашем регионе.
             </p>
             <p className="text-lg text-gray-700 leading-relaxed">
               Внимательно проверяйте правильность реквизитов, указанных для зачисления средств.
             </p>
          </div>

          <div className="mt-10 relative z-10">
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#D4B483] text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 hover:bg-[#B59561] transition-all transform hover:scale-105 shadow-lg"
             >
                ЗАПОЛНИТЬ ФОРМУ
                <ArrowRight className="w-5 h-5" />
             </button>
          </div>
       </div>
    </section>
  );
}
