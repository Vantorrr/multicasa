'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: 'Нужен ли паспорт для обмена?',
    answer: 'Для большинства операций паспорт не требуется. Мы ценим анонимность наших клиентов. Однако, в некоторых случаях (например, при банковских переводах) могут потребоваться документы, удостоверяющие личность.'
  },
  {
    question: 'Как долго фиксируется курс?',
    answer: 'Курс фиксируется на 30 минут с момента создания заявки для онлайн-обменов. При обмене наличных курс фиксируется по факту приезда в офис или договоренности с менеджером.'
  },
  {
    question: 'Есть ли скрытые комиссии?',
    answer: 'Нет, все комиссии уже включены в курс обмена, который вы видите на экране. Вы получаете ровно ту сумму, которая указана в заявке.'
  },
  {
    question: 'Как быстро происходит обмен?',
    answer: 'Среднее время обработки заявки составляет 15-20 минут. При обмене наличных время зависит от вашего визита в офис. Мы стараемся проводить сделки максимально оперативно.'
  },
  {
    question: 'Могу ли я забронировать сумму?',
    answer: 'Да, вы можете связаться с менеджером и забронировать необходимую сумму наличных в нужном городе заранее.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-8 px-4">Частые вопросы</h2>
      
      <div className="space-y-3 px-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#D4B483]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
