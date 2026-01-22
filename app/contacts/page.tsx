import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { CITIES } from '@/lib/constants';

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-[#F5F5F7] py-12">
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12">Контакты</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Main Contact Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Главный офис</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-[#D4B483]" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Адрес</div>
                                <div className="font-medium text-lg">Москва, Пресненская набережная 12</div>
                                <div className="text-[#D4B483]">Башня Федерация Восток</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6 text-[#D4B483]" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Режим работы</div>
                                <div className="font-medium text-lg">Ежедневно с 09:00 до 21:00 МСК</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0">
                                <Send className="w-6 h-6 text-[#D4B483]" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Telegram</div>
                                <a href="https://t.me/main_manager_contact" target="_blank" className="font-medium text-lg text-[#D4B483] hover:underline">
                                    @main_manager_contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-[2rem] overflow-hidden min-h-[300px] relative">
                    <img 
                        src="https://images.unsplash.com/photo-1558666326-b92440938f8f?auto=format&fit=crop&w=800&q=80"
                        alt="Map"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white px-6 py-3 rounded-xl font-bold shadow-lg text-sm hover:bg-gray-50 transition-colors">
                            Открыть на карте
                        </button>
                    </div>
                </div>
            </div>

            {/* Regional Contacts */}
            <h2 className="text-2xl font-bold mb-6">Представительства в городах</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CITIES.map(city => (
                    <div key={city.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg mb-2">{city.name}</h3>
                        {city.address && (
                            <p className="text-sm text-gray-500 mb-4">{city.address}</p>
                        )}
                        <a 
                            href={`https://t.me/${city.telegramUsername}`}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-[#D4B483] font-medium text-sm hover:underline"
                        >
                            <Send className="w-4 h-4" />
                            Связаться с менеджером
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
