import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExchangeWidget from '@/components/ExchangeWidget';
import HowItWorks from '@/components/HowItWorks';
import OfficeSection from '@/components/OfficeSection';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';
import SeoSection from '@/components/SeoSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-[#F5F5F7]">
         <div className="max-w-7xl mx-auto pb-20 space-y-8">
            {/* Widget Section */}
            <div className="pt-8 pb-4">
               <ExchangeWidget />
            </div>

            {/* How It Works */}
            <div className="max-w-6xl mx-auto">
               <HowItWorks />
            </div>

            {/* Why Us */}
            <div className="max-w-6xl mx-auto">
               <WhyUs />
            </div>

            {/* Services (VED) */}
            <div className="max-w-6xl mx-auto">
               <Services />
            </div>

             {/* Office Section */}
             <div className="max-w-6xl mx-auto">
               <OfficeSection />
            </div>
            
            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
               <FaqSection />
            </div>

            {/* SEO Text Section */}
            <div className="max-w-6xl mx-auto px-4">
               <SeoSection />
            </div>

            {/* CTA / Schedule */}
            <div className="max-w-6xl mx-auto">
               <CtaSection />
            </div>
         </div>
      </main>
      <Footer />
    </>
  );
}
