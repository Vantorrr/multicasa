import { LucideIcon, Banknote, Bitcoin, DollarSign, Wallet, Building2, Coins, ArrowRightLeft } from 'lucide-react';

export interface City {
  id: string;
  name: string;
  nameIn: string; // Prepositional case: "в Москве"
  address?: string;
  telegramUsername: string;
}

export type CurrencyCategory = 'all' | 'crypto' | 'fiat' | 'cash' | 'bank';

export interface Currency {
  id: string;
  name: string;
  code: string;
  type: CurrencyCategory;
  network?: string;
  iconUrl?: string; 
  iconColor?: string; 
  cityId?: string;
  cityName?: string;
}

// FULL LIST OF CITIES WITH DECLENSIONS
export const CITIES: City[] = [
  { id: 'msk', name: 'Москва', nameIn: 'Москве', address: 'Пресненская набережная 12, Москва-Сити', telegramUsername: 'manager_msk_exchange' },
  { id: 'spb', name: 'Санкт-Петербург', nameIn: 'Санкт-Петербурге', address: 'Лиговский проспект 30, ТРЦ Галерея', telegramUsername: 'manager_spb_exchange' },
  { id: 'ekb', name: 'Екатеринбург', nameIn: 'Екатеринбурге', address: 'ул. Малышева 51, БЦ Высоцкий', telegramUsername: 'manager_ekb_exchange' },
  { id: 'nsk', name: 'Новосибирск', nameIn: 'Новосибирске', address: 'ул. Ленина 1, БЦ Азимут', telegramUsername: 'manager_nsk_exchange' },
  { id: 'kazan', name: 'Казань', nameIn: 'Казани', address: 'ул. Петербургская 1, ТЦ Кольцо', telegramUsername: 'manager_kazan_exchange' },
  { id: 'chelyabinsk', name: 'Челябинск', nameIn: 'Челябинске', address: 'пр. Ленина 26А', telegramUsername: 'manager_chel_exchange' },
  { id: 'samara', name: 'Самара', nameIn: 'Самаре', address: 'Московское шоссе 15', telegramUsername: 'manager_samara_exchange' },
  { id: 'omsk', name: 'Омск', nameIn: 'Омске', address: 'ул. Гагарина 14', telegramUsername: 'manager_omsk_exchange' },
  { id: 'rostov', name: 'Ростов-на-Дону', nameIn: 'Ростове-на-Дону', address: 'пр. Михаила Нагибина 32', telegramUsername: 'manager_rostov_exchange' },
  { id: 'ufa', name: 'Уфа', nameIn: 'Уфе', address: 'ул. Цюрупы 97', telegramUsername: 'manager_ufa_exchange' },
  { id: 'krasnodar', name: 'Краснодар', nameIn: 'Краснодаре', address: 'ул. Красная 176', telegramUsername: 'manager_krd_exchange' },
  { id: 'sochi', name: 'Сочи', nameIn: 'Сочи', address: 'ул. Навагинская 9', telegramUsername: 'manager_sochi_exchange' },
  { id: 'n_novgorod', name: 'Нижний Новгород', nameIn: 'Нижнем Новгороде', address: 'ул. Родионова 187', telegramUsername: 'manager_nn_exchange' },
  { id: 'krasnoyarsk', name: 'Красноярск', nameIn: 'Красноярске', address: 'ул. Партизана Железняка 23', telegramUsername: 'manager_krasnoyarsk_exchange' },
  { id: 'volgograd', name: 'Волгоград', nameIn: 'Волгограде', address: 'пр. Ленина 54Б', telegramUsername: 'manager_volgograd_exchange' },
  { id: 'perm', name: 'Пермь', nameIn: 'Перми', address: 'ул. Революции 13', telegramUsername: 'manager_perm_exchange' },
  { id: 'voronezh', name: 'Воронеж', nameIn: 'Воронеже', address: 'ул. Кольцовская 35', telegramUsername: 'manager_voronezh_exchange' },
  { id: 'saratov', name: 'Саратов', nameIn: 'Саратове', address: 'ул. Чапаева 59', telegramUsername: 'manager_saratov_exchange' },
  { id: 'tyumen', name: 'Тюмень', nameIn: 'Тюмени', address: 'ул. Республики 65', telegramUsername: 'manager_tyumen_exchange' },
  { id: 'izhevsk', name: 'Ижевск', nameIn: 'Ижевске', address: 'ул. Пушкинская 268', telegramUsername: 'manager_izhevsk_exchange' },
  { id: 'barnaul', name: 'Барнаул', nameIn: 'Барнауле', address: 'пр. Красноармейский 47а', telegramUsername: 'manager_barnaul_exchange' },
  { id: 'ulyanovsk', name: 'Ульяновск', nameIn: 'Ульяновске', address: 'ул. Гончарова 21', telegramUsername: 'manager_ulyanovsk_exchange' },
  { id: 'irkutsk', name: 'Иркутск', nameIn: 'Иркутске', address: 'ул. Литвинова 17', telegramUsername: 'manager_irkutsk_exchange' },
  { id: 'khabarovsk', name: 'Хабаровск', nameIn: 'Хабаровске', address: 'ул. Муравьева-Амурского 23', telegramUsername: 'manager_khabarovsk_exchange' },
  { id: 'yaroslavl', name: 'Ярославль', nameIn: 'Ярославле', address: 'ул. Свободы 46', telegramUsername: 'manager_yaroslavl_exchange' },
  { id: 'vladivostok', name: 'Владивосток', nameIn: 'Владивостоке', address: 'Океанский пр. 17', telegramUsername: 'manager_vladivostok_exchange' },
  { id: 'makhachkala', name: 'Махачкала', nameIn: 'Махачкале', address: 'пр. Расула Гамзатова 57', telegramUsername: 'manager_makhachkala_exchange' },
  { id: 'tomsk', name: 'Томск', nameIn: 'Томске', address: 'пр. Ленина 121', telegramUsername: 'manager_tomsk_exchange' },
  { id: 'kemerovo', name: 'Кемерово', nameIn: 'Кемерово', address: 'пр. Советский 56', telegramUsername: 'manager_kemerovo_exchange' },
  { id: 'novokuznetsk', name: 'Новокузнецк', nameIn: 'Новокузнецке', address: 'ул. Кирова 55', telegramUsername: 'manager_novokuznetsk_exchange' },
  { id: 'ryazan', name: 'Рязань', nameIn: 'Рязани', address: 'Первомайский пр. 70', telegramUsername: 'manager_ryazan_exchange' },
  { id: 'nab_chelny', name: 'Набережные Челны', nameIn: 'Набережных Челнах', address: 'пр. Мира 3', telegramUsername: 'manager_nabchelny_exchange' },
  { id: 'penza', name: 'Пенза', nameIn: 'Пензе', address: 'ул. Московская 3', telegramUsername: 'manager_penza_exchange' },
  { id: 'kirov', name: 'Киров', nameIn: 'Кирове', address: 'ул. Воровского 135', telegramUsername: 'manager_kirov_exchange' },
  { id: 'lipetsk', name: 'Липецк', nameIn: 'Липецке', address: 'ул. Советская 66', telegramUsername: 'manager_lipetsk_exchange' },
  { id: 'cheboksary', name: 'Чебоксары', nameIn: 'Чебоксарах', address: 'пр. Ленина 2', telegramUsername: 'manager_cheboksary_exchange' },
  { id: 'kaliningrad', name: 'Калининград', nameIn: 'Калининграде', address: 'пл. Победы 10', telegramUsername: 'manager_kaliningrad_exchange' },
  { id: 'tula', name: 'Тула', nameIn: 'Туле', address: 'пр. Ленина 17', telegramUsername: 'manager_tula_exchange' },
  { id: 'sevastopol', name: 'Севастополь', nameIn: 'Севастополе', address: 'ул. Большая Морская 23', telegramUsername: 'manager_sevastopol_exchange' },
  { id: 'stavropol', name: 'Ставрополь', nameIn: 'Ставрополе', address: 'ул. Дзержинского 114', telegramUsername: 'manager_stavropol_exchange' },
  { id: 'magnitogorsk', name: 'Магнитогорск', nameIn: 'Магнитогорске', address: 'пр. Ленина 83', telegramUsername: 'manager_magnitogorsk_exchange' },
  { id: 'tver', name: 'Тверь', nameIn: 'Твери', address: 'ул. Трехсвятская 6', telegramUsername: 'manager_tver_exchange' },
  { id: 'ivanovo', name: 'Иваново', nameIn: 'Иваново', address: 'пр. Ленина 9', telegramUsername: 'manager_ivanovo_exchange' },
  { id: 'bryansk', name: 'Брянск', nameIn: 'Брянске', address: 'пр. Ленина 39', telegramUsername: 'manager_bryansk_exchange' },
  { id: 'belgorod', name: 'Белгород', nameIn: 'Белгороде', address: 'Гражданский пр. 47', telegramUsername: 'manager_belgorod_exchange' },
  { id: 'surgut', name: 'Сургут', nameIn: 'Сургуте', address: 'ул. Ленина 43', telegramUsername: 'manager_surgut_exchange' },
  { id: 'vladimir', name: 'Владимир', nameIn: 'Владимире', address: 'ул. Большая Московская 19', telegramUsername: 'manager_vladimir_exchange' },
  { id: 'arkhangelsk', name: 'Архангельск', nameIn: 'Архангельске', address: 'ул. Воскресенская 6', telegramUsername: 'manager_arkhangelsk_exchange' },
  { id: 'chita', name: 'Чита', nameIn: 'Чите', address: 'ул. Ленина 56', telegramUsername: 'manager_chita_exchange' },
  { id: 'kaluga', name: 'Калуга', nameIn: 'Калуге', address: 'ул. Кирова 1', telegramUsername: 'manager_kaluga_exchange' },
  { id: 'smolensk', name: 'Смоленск', nameIn: 'Смоленске', address: 'ул. Большая Советская 29', telegramUsername: 'manager_smolensk_exchange' },
  { id: 'kurgan', name: 'Курган', nameIn: 'Кургане', address: 'ул. Гоголя 53', telegramUsername: 'manager_kurgan_exchange' },
  { id: 'orel', name: 'Орел', nameIn: 'Орле', address: 'пл. Ленина 1', telegramUsername: 'manager_orel_exchange' },
  { id: 'vologda', name: 'Вологда', nameIn: 'Вологде', address: 'ул. Мира 42', telegramUsername: 'manager_vologda_exchange' },
  { id: 'yakutsk', name: 'Якутск', nameIn: 'Якутске', address: 'пр. Ленина 24', telegramUsername: 'manager_yakutsk_exchange' },
  { id: 'vladikavkaz', name: 'Владикавказ', nameIn: 'Владикавказе', address: 'пр. Мира 24', telegramUsername: 'manager_vladikavkaz_exchange' },
  { id: 'murmansk', name: 'Мурманск', nameIn: 'Мурманске', address: 'пр. Ленина 82', telegramUsername: 'manager_murmansk_exchange' },
  { id: 'grozny', name: 'Грозный', nameIn: 'Грозном', address: 'пр. Путина 14', telegramUsername: 'manager_grozny_exchange' },
  { id: 'kostroma', name: 'Кострома', nameIn: 'Костроме', address: 'ул. Советская 2', telegramUsername: 'manager_kostroma_exchange' },
  { id: 'petrozavodsk', name: 'Петрозаводск', nameIn: 'Петрозаводске', address: 'пр. Ленина 33', telegramUsername: 'manager_petrozavodsk_exchange' },
  { id: 'yoshkar_ola', name: 'Йошкар-Ола', nameIn: 'Йошкар-Оле', address: 'Ленинский пр. 24', telegramUsername: 'manager_yoshkarola_exchange' },
  
  // FOREIGN CITIES
  { id: 'dubai', name: 'Дубай', nameIn: 'Дубае', address: 'Business Bay, Opus Tower', telegramUsername: 'manager_dubai_exchange' },
  { id: 'ist', name: 'Стамбул', nameIn: 'Стамбуле', address: 'Şişli, Trump Towers', telegramUsername: 'manager_istanbul_exchange' },
  { id: 'antalya', name: 'Анталья', nameIn: 'Анталье', address: 'Lara, Terracity AVM', telegramUsername: 'manager_antalya_exchange' },
  { id: 'bali', name: 'Бали', nameIn: 'Бали', address: 'Canggu, Berawa Beach', telegramUsername: 'manager_bali_exchange' },
  { id: 'hkt', name: 'Пхукет', nameIn: 'Пхукете', address: 'Patong, Bangla Road', telegramUsername: 'manager_phuket_exchange' },
  { id: 'minsk', name: 'Минск', nameIn: 'Минске', address: 'пр. Победителей 9, Galleria Minsk', telegramUsername: 'manager_minsk_exchange' },
  { id: 'almaty', name: 'Алматы', nameIn: 'Алматы', address: 'пр. Достык 180', telegramUsername: 'manager_almaty_exchange' },
  { id: 'astana', name: 'Астана', nameIn: 'Астане', address: 'пр. Кабанбай батыра 62', telegramUsername: 'manager_astana_exchange' },
  { id: 'tbilisi', name: 'Тбилиси', nameIn: 'Тбилиси', address: 'пр. Руставели 42', telegramUsername: 'manager_tbilisi_exchange' },
  { id: 'yerevan', name: 'Ереван', nameIn: 'Ереване', address: 'Северный проспект 10', telegramUsername: 'manager_yerevan_exchange' },
  { id: 'baku', name: 'Баку', nameIn: 'Баку', address: 'пр. Нефтяников 153', telegramUsername: 'manager_baku_exchange' },
  { id: 'tashkent', name: 'Ташкент', nameIn: 'Ташкенте', address: 'ул. Амира Темура 107', telegramUsername: 'manager_tashkent_exchange' },
  { id: 'bishkek', name: 'Бишкек', nameIn: 'Бишкеке', address: 'пр. Чуй 150', telegramUsername: 'manager_bishkek_exchange' },
];

export const CURRENCIES: Currency[] = [
  // CASH - Fixed Flags
  { 
    id: 'rub_cash', name: 'Наличные рубли', code: 'CASHRUB', type: 'cash', 
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ru.svg', 
    iconColor: '#003399' // Blue icon from screenshot
  },
  { 
    id: 'usd_cash', name: 'Наличные доллары', code: 'CASHUSD', type: 'cash', 
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg', 
    iconColor: '#D4B483' // Gold icon from screenshot
  },
  { 
    id: 'aed_cash', name: 'Наличные дирхамы', code: 'CASHAED', type: 'cash', 
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ae.svg', 
    iconColor: '#26A17B' // Green icon from screenshot
  },
  
  // CRYPTO
  { 
    id: 'usdt_trc20', name: 'Tether TRC20', code: 'USDT', type: 'crypto', network: 'TRC20', 
    iconUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035', 
    iconColor: '#26A17B' 
  },
  { 
    id: 'usdt_erc20', name: 'Tether ERC20', code: 'USDT', type: 'crypto', network: 'ERC20', 
    iconUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035', 
    iconColor: '#26A17B' 
  },
  { 
    id: 'btc', name: 'Bitcoin', code: 'BTC', type: 'crypto', 
    iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035', 
    iconColor: '#F7931A' 
  },
  { 
    id: 'eth', name: 'Ethereum', code: 'ETH', type: 'crypto', 
    iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035', 
    iconColor: '#627EEA' 
  },

  // BANKS (RUB)
  { 
    id: 'sber', name: 'Сбербанк', code: 'RUB', type: 'bank', 
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Sberbank_Logo_2020.svg', 
    iconColor: '#21A038' 
  },
  { 
    id: 'tinkoff', name: 'Т-Банк', code: 'RUB', type: 'bank', 
    iconUrl: 'https://acdn.tinkoff.ru/static/pages/files/a24e9309-883a-48d6-848e-d98305f6cb16.svg', 
    iconColor: '#FFDD2D' 
  },
  { 
    id: 'vtb', name: 'ВТБ', code: 'RUB', type: 'bank', 
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/VTB_Logo_2018_blue.svg', 
    iconColor: '#002882' 
  },
  { 
    id: 'alfa', name: 'Альфа-Банк', code: 'RUB', type: 'bank', 
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Alfa-Bank_logo.svg', 
    iconColor: '#EF3124' 
  },
];

export const CATEGORIES: { id: CurrencyCategory; name: string }[] = [
  { id: 'all', name: 'Все валюты' },
  { id: 'bank', name: 'Банки' },
  { id: 'cash', name: 'Наличные' },
  { id: 'crypto', name: 'Крипта' },
];

export const SITE_CONFIG = {
  title: 'MultiKassa',
  defaultTelegram: 'main_manager_contact',
};
