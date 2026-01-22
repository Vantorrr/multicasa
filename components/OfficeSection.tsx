import { MapPin } from 'lucide-react';

export default function OfficeSection() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Где проведем сделку?</h2>
      
      <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm">
         <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Офис в г. Москва</h3>
            <div className="text-lg font-medium text-gray-800 flex items-center gap-2">
               <MapPin className="w-5 h-5 text-[#D4B483]" />
               г. Москва, Пресненская набережная, 12
            </div>
            <div className="text-[#D4B483] text-lg mt-1 pl-7">Башня Федерация Восток</div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
               {/* Moscow City View */}
               <img 
                 src="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80" 
                 alt="Moscow City View" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
               {/* Modern Office Interior */}
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                 alt="Office Interior 1" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
               {/* Meeting Room */}
               <img 
                 src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" 
                 alt="Office Interior 2" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
         </div>
      </div>
    </section>
  );
}
