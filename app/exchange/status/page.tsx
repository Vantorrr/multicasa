'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

function StatusPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || 'Новосибирск';
  
  const [timeLeft, setTimeLeft] = useState(1768); // ~29:28
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate dynamic future date
  useEffect(() => {
      const now = new Date();
      // Add 2 days
      const future = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
      // Add 2 hours approx
      future.setHours(now.getHours() + 2);
      
      const dateStr = future.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const timeStr = future.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      
      setMeetingDate(dateStr);
      setMeetingTime(timeStr);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTelegramRedirect = () => {
    window.open('https://t.me/main_manager_contact', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] pb-24 font-sans">
      {/* Header */}
      <header className="bg-[#F5F5F3] px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/exchange/create" className="flex items-center gap-1 text-gray-800">
           <ArrowLeft className="w-6 h-6" />
           <span className="font-medium text-lg">Назад</span>
        </Link>
        <div className="flex flex-col items-center">
            <span className="font-bold text-sm">MultiKassa - сервис обм...</span>
            <span className="text-[10px] text-gray-500">мини-приложение</span>
        </div>
        <div className="w-6" />
      </header>

      <div className="px-4 pt-4">
         {/* Progress Bar & Timer */}
         <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1 flex-1 mr-4">
                <div className="h-1 flex-1 bg-[#D4B483] rounded-full"></div>
                <div className="h-1 flex-1 bg-[#D4B483] rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#D4B483]">
                <span>Выдача средств</span>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
            </div>
         </div>

         {/* Title */}
         <h1 className="text-2xl font-bold mb-1">Выдача средств</h1>
         <p className="text-gray-500 text-sm mb-6">ожидаем Вас в нашем офисе</p>

         {/* Map Card */}
         <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 overflow-hidden">
            {/* Map Iframe - Reliable Solution */}
            <div className="h-48 bg-gray-100 rounded-2xl relative mb-4 overflow-hidden border border-gray-200">
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=37.537083%2C55.749511&z=16&pt=37.537083%2C55.749511,pm2rdm" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className="w-full h-full"
                ></iframe>
            </div>

            <div className="space-y-4">
                <div>
                    <div className="text-gray-400 text-sm">Место встречи</div>
                    <div className="font-bold text-lg">{city}</div>
                </div>

                <div className="bg-[#F5F5F7] p-3 rounded-xl flex items-center justify-between">
                    <span className="text-gray-500 font-medium">Дата и время встречи</span>
                    <div className="flex items-center gap-2 font-bold bg-white px-2 py-1 rounded-lg shadow-sm">
                        <span>{meetingDate}</span>
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{meetingTime}</span>
                    </div>
                </div>

                 <div>
                    <div className="font-bold mb-1">Работаем ежедневно</div>
                    <div className="inline-flex items-center gap-2 bg-[#F5F5F7] px-3 py-1 rounded-lg text-sm font-medium">
                        <span className="text-gray-400">пн</span>
                        <span>11:00 - 21:00</span>
                    </div>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                     <a 
                        href="https://yandex.ru/maps/-/CDd~iK3L" 
                        target="_blank" 
                        className="text-[#D4B483] font-bold text-sm flex items-center gap-2 hover:underline"
                     >
                        <div className="w-2 h-2 rounded-full bg-[#D4B483]"></div>
                        посмотреть на карте
                     </a>
                     
                     <div className="flex gap-2 w-full">
                         <a href="https://2gis.ru/moscow/firm/70000001033679633" target="_blank" className="flex-1 bg-[#73C033] text-white py-2 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm hover:opacity-90">
                            2GIS
                         </a>
                         <a href="https://yandex.ru/maps/-/CDd~iK3L" target="_blank" className="flex-1 bg-[#FC3F1D] text-white py-2 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm hover:opacity-90">
                            Yandex
                         </a>
                     </div>
                </div>
            </div>
         </div>
      </div>
      
      {/* Bottom Sheet Info */}
      <div className="px-4 mt-6">
           <div className="bg-[#EFEBE4] rounded-2xl p-4 flex items-center justify-between mb-8 cursor-pointer">
            <span className="font-bold text-gray-700">Информация о заявке</span>
            <div className="w-8 h-8 bg-[#D4B483] rounded-full flex items-center justify-center text-white rotate-90">
                <ArrowLeft className="w-4 h-4" /> 
            </div>
         </div>
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 z-50">
         <button 
            onClick={handleTelegramRedirect}
            className="w-full bg-[#40A7E3] h-14 rounded-full flex items-center justify-center gap-2 text-white font-bold text-lg hover:bg-[#3490C5] transition-colors shadow-lg active:scale-[0.98] transition-transform"
         >
            Написать оператору 
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-1.03-2.4-1.64-1.06-.7-0.37-1.09.23-1.72.15-.16 2.8-2.57 2.85-2.79.01-.03.01-.13-.05-.18-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.29-.76.43-1.08.42-.35-.01-1.02-.2-1.52-.35-.61-.19-1.1-.29-1.06-.61.02-.17.26-.34.69-.52 2.72-1.18 4.53-1.96 5.44-2.33 2.59-1.08 3.13-1.27 3.48-1.28.08 0 .25.02.36.11.09.07.12.17.13.24 0 .05.01.12.01.21z"/>
            </svg>
         </button>
      </div>
    </div>
  );
}

export default function StatusPage() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <StatusPageContent />
        </Suspense>
    )
}
