'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRightLeft, Lock, MapPin, ChevronDown, Check, Search, X } from 'lucide-react';
import { CITIES, CURRENCIES, CATEGORIES, Currency, City, CurrencyCategory } from '@/lib/constants';
import { getExtendedCurrencies } from '@/lib/utils';
import clsx from 'clsx';

export default function ExchangeWidget() {
  const router = useRouter();
  
  // Generate the full list including city-specific cash options
  const allCurrencies = useMemo(() => getExtendedCurrencies(CURRENCIES), []);

  // Default: USDT TRC20 -> Cash RUB (Moscow)
  const [giveCurrency, setGiveCurrency] = useState<Currency>(allCurrencies.find(c => c.code === 'USDT' && c.network === 'TRC20') || allCurrencies[0]);
  const [getCurrency, setGetCurrency] = useState<Currency>(allCurrencies.find(c => c.code === 'RUB' && c.cityName === 'Москва') || allCurrencies[0]);
  
  const [giveAmount, setGiveAmount] = useState('100');
  const [getAmount, setGetAmount] = useState('9550'); 

  const [activeSelector, setActiveSelector] = useState<'give' | 'get' | null>(null);

  // Determine effective city for the deal (from either give or get currency)
  const effectiveCityNameIn = useMemo(() => {
      // Prioritize "nameIn" if available (e.g. "в Москве")
      const curr = giveCurrency.cityName ? giveCurrency : getCurrency;
      if (curr.type === 'cash' && curr.cityId) {
          const city = CITIES.find(c => c.id === curr.cityId);
          return city ? `в ${city.nameIn}` : '';
      }
      return '';
  }, [giveCurrency, getCurrency]);

  // Mock rate calculation logic
  const [rate, setRate] = useState(97.5);

  useEffect(() => {
    let r = 97.5; 
    
    // Simple Rate Logic
    if (giveCurrency.code === 'RUB' && getCurrency.code === 'USDT') r = 1 / 97.5; 
    else if (giveCurrency.code === 'USDT' && getCurrency.code === 'RUB') r = 95.5; 
    else if (giveCurrency.code === 'BTC' && getCurrency.code === 'USDT') r = 67500;
    else if (giveCurrency.code === 'USDT' && getCurrency.code === 'BTC') r = 1 / 67500;
    else if (giveCurrency.code === 'RUB' && getCurrency.code === 'USD') r = 1 / 96.0;
    else if (giveCurrency.code === 'USD' && getCurrency.code === 'RUB') r = 94.0;
    
    // Display rate logic
    if (giveCurrency.code === 'RUB' && getCurrency.code === 'USDT') setRate(97.5);
    else setRate(r);
    
    const result = (parseFloat(giveAmount || '0') * r).toFixed(giveCurrency.type === 'crypto' || getCurrency.type === 'crypto' ? 4 : 2);
    setGetAmount(result === 'NaN' ? '0' : result);
  }, [giveAmount, giveCurrency, getCurrency]);

  const handleSwap = () => {
    setGiveCurrency(getCurrency);
    setGetCurrency(giveCurrency);
    setGiveAmount(getAmount);
  };

  const handleCreateOrder = () => {
     const params = new URLSearchParams({
        give: giveAmount,
        get: getAmount,
        city: effectiveCityName,
        giveCurr: giveCurrency.code,
        getCurr: getCurrency.code
     });
     router.push(`/exchange/create?${params.toString()}`);
  };

  const openSelector = (type: 'give' | 'get') => setActiveSelector(type);

  // Helper to render currency icon
  const CurrencyIcon = ({ currency, className = "w-6 h-6" }: { currency: Currency, className?: string }) => {
    if (currency.iconUrl) {
        return (
            <img 
                src={currency.iconUrl} 
                alt={currency.name} 
                className={clsx("rounded-full object-contain bg-white shrink-0", className)} 
            />
        );
    }
    return (
        <div 
        className={clsx("rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0", className)}
        style={{ backgroundColor: currency.iconColor || '#9CA3AF' }}
        >
        {currency.code[0]}
        </div>
    );
  };

  const rateDisplay = useMemo(() => {
     if (giveCurrency.code === 'USDT' && getCurrency.code === 'RUB') return `Курс: ${rate.toFixed(2)}₽`;
     if (giveCurrency.code === 'RUB' && getCurrency.code === 'USDT') return `Курс: ${(1/rate).toFixed(2)}₽`;
     return `Курс: ${rate.toFixed(4)}`;
  }, [rate, giveCurrency, getCurrency]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      
      {/* Dynamic Title */}
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight px-4">
        Обмен <span className="text-[#D4B483]">{giveCurrency.code}</span> <br />
        на <span className="text-[#D4B483]">{getCurrency.code}</span> <br />
        {effectiveCityNameIn}
      </h1>

      {/* Give Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold">Отдаете</span>
          <span className="text-gray-400 text-sm">Мин. 50 000 RUB</span>
        </div>
        
        <div className="bg-[#F5F5F7] rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => openSelector('give')}>
          <div className="flex-1 min-w-0 mr-2">
            <input 
              type="number" 
              value={giveAmount}
              onChange={(e) => setGiveAmount(e.target.value)}
              className="bg-transparent text-xl font-medium w-full outline-none placeholder-gray-300"
              placeholder="0.00"
              onClick={(e) => e.stopPropagation()} 
            />
            {giveCurrency.cityName && (
               <div className="flex items-center gap-1 text-xs text-gray-400 mt-1 truncate">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{giveCurrency.cityName}</span>
               </div>
            )}
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm border border-gray-100 min-w-[130px] justify-between shrink-0">
            <div className="flex items-center gap-2 overflow-hidden">
               <CurrencyIcon currency={giveCurrency} />
               <div className="flex flex-col overflow-hidden">
                   <span className="font-semibold text-sm truncate">{giveCurrency.code}</span>
                   {giveCurrency.network && <span className="text-[10px] text-gray-400 truncate">{giveCurrency.network}</span>}
               </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Swap Button & Rate Display */}
      <div className="relative h-6 z-20 flex items-center justify-between px-4 -my-3">
         <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-600 shadow-sm border border-gray-100 ml-4">
            {rateDisplay}
         </div>
         <button 
            onClick={handleSwap}
            className="bg-[#D4B483] text-white p-2 rounded-full shadow-lg border-4 border-[#F5F5F7] hover:bg-[#B59561] transition-transform active:rotate-180 mr-4"
         >
            <ArrowRightLeft className="w-4 h-4" />
         </button>
      </div>

      {/* Get Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm relative z-10 mt-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold">Получаете</span>
        </div>
        
        <div className="bg-[#F5F5F7] rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => openSelector('get')}>
          <div className="flex-1 min-w-0 mr-2">
            <input 
              type="number" 
              value={getAmount}
              readOnly 
              className="bg-transparent text-xl font-medium w-full outline-none placeholder-gray-300"
            />
             {getCurrency.cityName && (
               <div className="flex items-center gap-1 text-xs text-gray-400 mt-1 truncate">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{getCurrency.cityName}</span>
               </div>
            )}
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm border border-gray-100 min-w-[130px] justify-between shrink-0">
             <div className="flex items-center gap-2 overflow-hidden">
               <CurrencyIcon currency={getCurrency} />
               <div className="flex flex-col overflow-hidden">
                   <span className="font-semibold text-sm truncate">{getCurrency.code}</span>
                   {getCurrency.network && <span className="text-[10px] text-gray-400 truncate">{getCurrency.network}</span>}
               </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* NO SEPARATE CITY SELECTOR HERE ANYMORE - IT IS INSIDE CURRENCY LIST */}

      {/* Submit Button */}
      <button 
        onClick={handleCreateOrder}
        className="w-full bg-[#D4B483] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#B59561] transition-colors shadow-md hover:shadow-lg transform active:scale-[0.99] transition-all mt-4"
      >
        <span>ЗАПОЛНИТЕ ФОРМУ</span>
        <Lock className="w-4 h-4" />
      </button>

      <div className="text-center text-xs text-gray-400 px-4 leading-relaxed">
        Нажимая на кнопку, Вы принимаете условия <a href="#" className="underline decoration-dashed">пользовательского соглашения</a> и <a href="#" className="underline decoration-dashed">политики конфиденциальности</a>.
      </div>

      {/* Advanced Currency Modal */}
      <CurrencySelectorModal
        isOpen={!!activeSelector}
        onClose={() => setActiveSelector(null)}
        title={activeSelector === 'give' ? 'Вы отдаете' : 'Вы получаете'}
        currencies={allCurrencies}
        selectedCurrency={activeSelector === 'give' ? giveCurrency : getCurrency}
        onSelect={(curr) => {
            if (activeSelector === 'give') setGiveCurrency(curr);
            else setGetCurrency(curr);
            setActiveSelector(null);
        }}
      />

    </div>
  );
}

// ... SelectorModal component ...
function SelectorModal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
    return (
      <AnimatePresence>
          {isOpen && (
              <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
                      onClick={onClose} 
                  />
                  <motion.div 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 relative z-10 max-h-[90vh] flex flex-col"
                  >
                      <div className="flex items-center justify-between mb-6 shrink-0">
                      <h3 className="text-xl font-bold">{title}</h3>
                      <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                          <ChevronDown className="w-5 h-5" />
                      </button>
                      </div>
                      {children}
                  </motion.div>
              </div>
          )}
      </AnimatePresence>
    );
  }

// Currency Selector with List
function CurrencySelectorModal({ 
    isOpen, onClose, title, currencies, selectedCurrency, onSelect 
}: { 
    isOpen: boolean; onClose: () => void; title: string; 
    currencies: Currency[]; selectedCurrency: Currency; onSelect: (c: Currency) => void;
}) {
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState<CurrencyCategory>('all');

    const filteredCurrencies = useMemo(() => {
        return currencies.filter(c => {
            const matchesTab = activeTab === 'all' || c.type === activeTab;
            const matchesSearch = 
                c.name.toLowerCase().includes(search.toLowerCase()) || 
                c.code.toLowerCase().includes(search.toLowerCase()) ||
                (c.cityName && c.cityName.toLowerCase().includes(search.toLowerCase()));
            return matchesTab && matchesSearch;
        });
    }, [currencies, activeTab, search]);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => { setSearch(''); setActiveTab('all'); }, 300);
        }
    }, [isOpen]);

    return (
        <SelectorModal isOpen={isOpen} onClose={onClose} title={title}>
            <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                        type="text"
                        placeholder="Поиск валюты..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#F5F5F7] rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#D4B483]/20 transition-all"
                    />
                    {search && (
                        <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full">
                            <X className="w-4 h-4 text-gray-500" />
                        </button>
                    )}
                </div>

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                                activeTab === cat.id 
                                    ? "bg-[#D4B483] text-white" 
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            )}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="h-[50vh] overflow-y-auto space-y-1 pr-1">
                    {filteredCurrencies.length > 0 ? (
                        filteredCurrencies.map(curr => (
                            <button
                                key={curr.id}
                                onClick={() => onSelect(curr)}
                                className={clsx(
                                    "w-full p-3 rounded-xl flex items-center gap-3 transition-colors text-left",
                                    selectedCurrency.id === curr.id ? "bg-[#F5F5F7]" : "hover:bg-gray-50"
                                )}
                            >
                                <div className="w-10 h-10 shrink-0">
                                    {curr.iconUrl ? (
                                        <img src={curr.iconUrl} alt={curr.name} className="w-full h-full object-contain rounded-full bg-white" />
                                    ) : (
                                        <div 
                                            className="w-full h-full rounded-full flex items-center justify-center text-xs font-bold text-white"
                                            style={{ backgroundColor: curr.iconColor || '#9CA3AF' }}
                                        >
                                            {curr.code[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-bold flex items-center gap-2">
                                        {curr.name}
                                    </div>
                                    <div className="text-xs text-gray-500 truncate">
                                        {curr.cityName || curr.network || curr.code}
                                    </div>
                                </div>
                                {selectedCurrency.id === curr.id && 
                                    <Check className="w-5 h-5 text-[#D4B483]" />
                                }
                            </button>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-400">
                            Ничего не найдено
                        </div>
                    )}
                </div>
            </div>
        </SelectorModal>
    );
}
