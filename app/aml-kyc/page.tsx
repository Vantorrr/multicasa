import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AmlKycPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-[#F5F5F7] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl font-bold mb-8">AML/KYC Политика</h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-sm mb-6">
                <strong>Важно:</strong> Мы придерживаемся международных стандартов по борьбе с отмыванием денег (AML) и финансированием терроризма.
              </div>

              <h2 className="text-xl font-bold text-black mt-6">Проверка транзакций</h2>
              <p>
                Все входящие транзакции криптовалют проходят автоматическую проверку через AML-сервисы. 
                Если риск-скор транзакции (Dark Market, Sanctions, Stolen coins) превышает допустимый порог, 
                средства могут быть заблокированы до выяснения обстоятельств.
              </p>

              <h2 className="text-xl font-bold text-black mt-6">Процедура KYC (Знай своего клиента)</h2>
              <p>
                Сервис оставляет за собой право запросить у Клиента документы, подтверждающие личность, в следующих случаях:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Подозрение в незаконном происхождении средств.</li>
                <li>Превышение лимитов на обмен.</li>
                <li>Запрос от правоохранительных органов или регуляторов.</li>
              </ul>

              <h2 className="text-xl font-bold text-black mt-6">Блокировка средств</h2>
              <p>
                При выявлении связи средств с нелегальной деятельностью, Сервис обязан заморозить транзакцию и передать информацию в соответствующие органы. 
                Возврат средств в таких случаях возможен только после прохождения полной проверки.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
