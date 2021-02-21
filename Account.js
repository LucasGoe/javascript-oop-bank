// Export your class here as module.exports = MyClass
class Account {
    constructor(name, balance, creditLimit) {
        // console.log("What is name?", name);
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.withDrawLimit = 5000;
    }

    makeDeposit(amount) {
        // console.log("NEGATIVE? ", amount, amount < 0);
        if (amount > 0) {
                this.balance = this.balance + amount;
            }
        return this.balance;
    }

    makeWithdrawal(amount) {
        if (amount > this.withDrawLimit) {
            return;
        }

        if (this.balance + this.creditLimit - amount > 0) {
            this.balance = this.balance - amount;
        }
        return this.balance;
    }
}
module.exports = Account;








