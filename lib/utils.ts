// Helper to generate currency options including city variants
import { CITIES, Currency, CurrencyCategory } from './constants';

export const getExtendedCurrencies = (currencies: Currency[]): Currency[] => {
  const extended: Currency[] = [];
  
  currencies.forEach(curr => {
    // If it's a cash currency, duplicate it for each city
    if (curr.type === 'cash') {
       CITIES.forEach(city => {
          extended.push({
             ...curr,
             id: `${curr.id}_${city.id}`,
             cityId: city.id,
             cityName: city.name,
             // Override display name if needed, but UI handles it
          });
       });
    } else {
       extended.push(curr);
    }
  });
  
  return extended;
};
