function CreditCard(id, expirationDate, currentDebt, maxDebt) {
  
  this.id = id; 
  this.expirationDate = expirationDate;
  this.currentDebt = currentDebt;
  this.maxDebt = maxDebt;

}

module.exports = CreditCard;

