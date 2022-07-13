function Customer (id, name, phone, email, homeCity, creditCard, savingsAccount) {
  this.id = id;
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.homeCity = homeCity.toUpperCase();
  this.creditCard = creditCard;
  this.savingsAccount = savingsAccount;

  // function creditCard (id, expirationDate, currentDebt, maxDebt) {
  // this.id = id; 
  // this.expirationDate = expirationDate;
  // this.currentDebt = currentDebt;
  // this.maxDebt = maxDebt;
  // }

  // function savingsAccount (id, amount) {
  // this.id = id; 
  // this.amount = amount;
  // }

//   this.addCreditCardToCustomer = function (newCreditCard){
//     const customerToAddCredit = getCustomer(newCreditCard.id);
//     console.log(customerToAddCredit)
    
//     if(!customerToAddCredit){
//       throw new Error('Customer id does not exists');
//     } else {
// //      const newCreditCard = new creditCard (id, expirationDate, currentDebt, maxDebt);
//       customerToAddCredit.creditCard.push(newCreditCard);
//     }
    
//     return customerList
//   }
// //  console.log(Customer.prototype.addCreditCardToCustomer(5, 01, "21/01", 3000, 5000))
  
  
//   this.addCreditSavingsAccount = function (customerId, id, amount){
//     const customerToAddSavingsAccount = getCustomer(customerId)
    
//     if(!customerToAddSavingsAccount){
//       throw new Error('Customer id does not exists');
//     } else {
//       const newSavingsAccount = new savingsAccount (id, amount);
//       customerToAddSavingsAccount.savingsAccount.push(newSavingsAccount);
//     }
    
//     return customerList;
//   }
//  console.log(Customer.prototype.addCreditSavingsAccount(5, 02, 5000))
//  console.log(Customer.prototype.addCreditSavingsAccount(5, 03, 6000))
  
  
// //  console.log(Customer.prototype.getClientsWithExpiredCreditCards())
  
}
module.exports = Customer;