function Bank(name) {

  this.name=name;
  
  let customerList = []

  function getCustomer(customerId) {
  
  const customerTo = customerList.find(customerObj => customerObj.id === customerId)
  return customerTo;
  
  }

  this.addCustomer = function (newCustomer) {

    if(!newCustomer.id)
  
    if(getCustomer(newCustomer.id)) {
      throw new Error('Customer id exists already');
    }
    

    if(!newCustomer.products){
      newCustomer.creditCard = [ ]
      newCustomer.savingsAccount = [ ]
    }
   
    customerList.push(newCustomer);
    console.log(`${newCustomer.name} has been added to Bank`);
    console.log(customerList)
  }

  this.addCreditCardToCustomer = function (customerId, newCreditCard){
    
    const customerToAddCredit = getCustomer(customerId);
    
    if(!customerToAddCredit){
      throw new Error('Customer id does not exists');
    } else {
      customerToAddCredit.creditCard.push(newCreditCard);
    }
    
    console.log(`Credit Card product was successfully added to ${customerToAddCredit.name} customer`);
    console.log(customerToAddCredit);
  }
 
  
  this.addSavingsAccount = function (customerId, newSavingsAccount){
    
    const customerToAddSavingsAccount = getCustomer(customerId)  
    
    if(!customerToAddSavingsAccount){
      throw new Error('Customer id does not exists');
    } else {
      customerToAddSavingsAccount.savingsAccount.push(newSavingsAccount);
    }
    
    console.log(`Savings Account product was successfully added to ${customerToAddSavingsAccount.name} customer`);
    console.log(customerToAddSavingsAccount);
  }

  this.getAverageSavedByHomeCity = function (cityToFilter) {
    
    let sumAmount = 0
    let count = 0
  
    for (let costumer of customerList) {
      if(costumer.homeCity === cityToFilter.toUpperCase()){
        for(let account of costumer.savingsAccount){
          sumAmount += account.amount;
          count ++;
        }
        const averageSaved = sumAmount/count;
        console.log(`The average amount saved by ${cityToFilter} is ${averageSaved}`);
      } else {
        console.log(`The ${cityToFilter} city is not registered`);
      }
    }
  }
  
 
  this.getClientsWithExpiredCreditCards = function () {
    
    let ClientsWithExpiredCreditCards = []
    const currentDate = new Date();
    const currentMont = currentDate.getMonth();
    const currentYear = parseInt(currentDate.getFullYear().toString().substr(-2));
   
    for (let customer of customerList) {
      for(let credit of customer.creditCard){
        const expirationYear = parseInt(credit.expirationDate.substr(0, 2));
        const expirationMont = parseInt(credit.expirationDate.substr(-2) - 1);
        if(expirationYear <= currentYear && expirationMont < currentMont){
          ClientsWithExpiredCreditCards.push(customer.name);
        }  
      }
    }
    console.log(`List of customers with expired credit cards:   ${ClientsWithExpiredCreditCards}`);
    return ClientsWithExpiredCreditCards;
  }


}

module.exports = Bank;