const Customer = require('./models/customer');
const Bank = require('./models/Banks');
const CreditCard = require('./models/Products/creditCard');
const SavingsAccount = require('./models/Products/savingsAccount');


const bancoAgrario = new Bank('Banco Agrario');

const bancoAgrarioCustomer = new Customer(05, 'Wilder Chacón', 3218378817, 'wchacon@gmail.com', 'Bogotá');

bancoAgrario.addCustomer(bancoAgrarioCustomer);

const newCreditCard = new CreditCard(962, '21/01', 3000, 5000);
bancoAgrario.addCreditCardToCustomer(5, newCreditCard);

const newSavingsAccount = new SavingsAccount( 963, 80000);
bancoAgrario.addSavingsAccount(5, newSavingsAccount);

bancoAgrario.getAverageSavedByHomeCity('Bogotá');

bancoAgrario.getClientsWithExpiredCreditCards();
