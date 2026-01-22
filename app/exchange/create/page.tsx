'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Building2, Clock, ChevronDown, Info, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function CreateOrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get data from URL or defaults
  const giveAmount = searchParams.get('give') || '1000';
  const getAmount = searchParams.get('get') || '100000';
  const city = searchParams.get('city') || 'Москва';
  const giveCurrency = searchParams.get('giveCurr') || 'USDT';
  const getCurrency = searchParams.get('getCurr') || 'RUB';

  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleExchange = () => {
    // Redirect to status page
    router.push(`/exchange/status?city=${city}&amount=${getAmount}&curr=${getCurrency}`);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] pb-24 font-sans">
      {/* Header */}
      <header className="bg-[#F5F5F3] px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-1 text-gray-800">
           <ArrowLeft className="w-6 h-6" />
           <span className="font-medium text-lg">Назад</span>
        </Link>
        <div className="flex flex-col items-center">
            <span className="font-bold text-sm">MultiKassa - сервис обм...</span>
            <span className="text-[10px] text-gray-500">мини-приложение</span>
        </div>
        <div className="w-6" /> {/* Spacer */}
      </header>

      <div className="px-4 pt-4">
         {/* Progress Bar & Timer */}
         <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1 flex-1 mr-4">
                <div className="h-1 flex-1 bg-[#D4B483] rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#D4B483]">
                <span>Создана</span>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
            </div>
         </div>

         {/* Where - Office Card */}
         <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Где проведем сделку?</h3>
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                        <Building2 className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                        <div className="font-bold text-lg">{city}</div>
                        <div className="text-gray-400 text-sm mb-2">{city}</div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-500">ПН</span>
                            <span>11:00 - 21:00</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-dashed border-gray-200 text-center">
                    <a 
                        href="https://yandex.ru/maps/-/CDd~iK3L" 
                        target="_blank"
                        className="text-[#D4B483] font-bold text-sm flex items-center justify-center gap-2 w-full hover:underline"
                    >
                        <MapPin className="w-4 h-4 opacity-70" />
                        Как пройти?
                    </a>
                </div>
            </div>
         </div>

         {/* From - Wallet Input */}
         <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Откуда отправляете</h3>
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#D4B483]/20 rounded-full flex items-center justify-center text-[#D4B483]">
                        <Info className="w-4 h-4" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Адрес кошелька (TRC20...)"
                        className="flex-1 font-medium outline-none text-sm placeholder:text-gray-400"
                        defaultValue="TLXFMoJyCsyppResJsts4D2bJKqoapv6iD"
                    />
                </div>
            </div>
            <button className="text-[#D4B483] text-sm font-medium pl-2 flex items-center gap-1">
                Выбрать кошелёк <ChevronDown className="w-4 h-4" />
            </button>
         </div>

         {/* To - Cash Info */}
         <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Что принимаете</h3>
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#D4B483] rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        💵
                    </div>
                    <div className="text-sm font-medium text-gray-500">Наличные в {city}</div>
                </div>
                <div className="flex items-center gap-2 font-bold">
                    <div className="w-6 h-6 rounded-full bg-blue-600 overflow-hidden relative">
                         {/* Russian Flag Mock */}
                         <div className="absolute inset-0 bg-white"></div>
                         <div className="absolute top-1/3 inset-x-0 h-1/3 bg-blue-600"></div>
                         <div className="absolute bottom-0 inset-x-0 h-1/3 bg-red-600"></div>
                    </div>
                    Нал. рубли
                </div>
            </div>
         </div>

         {/* Contact Info */}
         <div className="mb-6">
             <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#D4B483] rounded-full flex items-center justify-center text-white">
                    <UserIcon />
                </div>
                <input 
                    type="text" 
                    placeholder="Ваш Telegram (@username)" 
                    className="flex-1 font-medium outline-none text-sm placeholder:text-gray-400"
                />
             </div>
             <div className="text-xs text-gray-400 mt-2 px-2">RealType</div>
         </div>
         
         {/* Info Collapse */}
         <div className="bg-[#EFEBE4] rounded-2xl p-4 flex items-center justify-between mb-8">
            <span className="font-bold text-gray-700">Информация о заявке</span>
            <div className="w-8 h-8 bg-[#D4B483] rounded-full flex items-center justify-center text-white rotate-90">
                <ArrowRight className="w-4 h-4" />
            </div>
         </div>

      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 flex items-center gap-3 z-50">
         <button className="w-14 h-14 rounded-full border border-[#D4B483] flex items-center justify-center text-[#D4B483] shrink-0">
            <ArrowLeft className="w-6 h-6" />
         </button>
         <button 
            onClick={handleExchange}
            className="flex-1 bg-[#D4B483] h-14 rounded-full flex items-center justify-center gap-2 text-white font-bold text-lg hover:bg-[#B59561] transition-colors"
         >
            Обменять валюту <ArrowRight className="w-6 h-6" />
         </button>
      </div>
    </div>
  );
}

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
);

export default function CreateOrderPage() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <CreateOrderContent />
        </Suspense>
    )
}
