import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RulesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-[#F5F5F7] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl font-bold mb-8">Правила обмена</h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Настоящие правила описывают условия предоставления услуг сервисом MultiKassa. 
                Совершая обмен, вы автоматически соглашаетесь с данными условиями.
              </p>

              <h2 className="text-xl font-bold text-black mt-6">1. Общие положения</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Сервис предоставляет услуги по обмену электронных валют, криптовалют и наличных средств.</li>
                <li>Заявки обрабатываются в ручном или полуавтоматическом режиме в часы работы сервиса (09:00 - 21:00 МСК).</li>
                <li>Фиксация курса происходит в момент создания заявки на 30 минут (для онлайн направлений) или при личной встрече (для наличных).</li>
              </ul>

              <h2 className="text-xl font-bold text-black mt-6">2. Порядок проведения операций</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Пользователь обязуется предоставлять достоверные реквизиты.</li>
                <li>В случае отправки средств на неверные реквизиты по вине Пользователя, Сервис ответственности не несет.</li>
                <li>Сервис вправе запросить верификацию личности (KYC), если транзакция покажется подозрительной.</li>
              </ul>

              <h2 className="text-xl font-bold text-black mt-6">3. Гарантии и ответственность</h2>
              <p>
                Мы гарантируем поступление средств на указанные вами реквизиты в течение 24 часов с момента оплаты заявки, 
                если не возникло форс-мажорных обстоятельств (проблемы в сети блокчейн, блокировки со стороны банков).
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
