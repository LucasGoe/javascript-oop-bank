// Export your class here as module.exports = MyClass
const Account = require("./Account");
//
class BusinessAccount extends Account {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        this.sepaPermission = sepaPermission;
        this.withDrawLimit = 20000;
    }

    sepaInvoice(amount) {
        // console.log("AMOUNT?", amount);
        const transactionCosts = amount * 0.01;
        // console.log("TRANSACTION COSTS:", transactionCosts);
        if (this.sepaPermission === true && amount > 0) {
            this.balance = this.balance + amount - transactionCosts;
            // console.log("BALANCE: ", this.balance);
        }
        return this.balance;
    }

}

module.exports = BusinessAccount;
