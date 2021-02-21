// Export your class here as module.exports = MyClass
const Account = require("./Account");
//
class BusinessAccount extends Account {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        this.sepaPermission = sepaPermission;
        this.dailyLimit = 20000;
    }

    sepaInvoice(amount) {
        const transactionCosts = amount * 0.01;
        if (this.sepaPermission === true && amount > 0) {
            this.balance = this.balance + amount - transactionCosts;
        }
        return this.balance;
    }
}

module.exports = BusinessAccount;
