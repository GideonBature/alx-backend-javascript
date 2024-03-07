import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
const amountInUSD = 100;
const usdToEurRate = 0.85;

// Convert USD to EUR
const amountInEUR = Pricing.convertPrice(amountInUSD, usdToEurRate);
console.log(`$${amountInUSD} USD is €${amountInEUR} EUR.`);
