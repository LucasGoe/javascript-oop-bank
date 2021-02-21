
```
// Export your class here as module.exports = MyClass
class Account {
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.dailyLimit = 5000;
    }

    maxWithdrawalAmount() {
        return Math.min(this.balance + this.creditLimit, this.dailyLimit);
    }

    makeDeposit(amount) {
        if (amount > 0) {
                this.balance = this.balance + amount;
        }
    }

    makeWithdrawal(amount) {
        // if (amount < this.balance + this.creditLimit
        //     && amount <= this.dailyLimit) {
        // Edit if statement with maxWithDrawalAmount:
        if (amount <= this.maxWithdrawalAmount()) {
            console.log("??: ", this.maxWithdrawalAmount())
            this.balance = this.balance - amount;
            console.log(this.balance);
        }
    }
}

module.exports = Account;

*******************************
GEWONE VARIANT zonder te extenden:

class BusinessAccount {
    constructor(name, balance, creditLimit, sepaPermission) {
        // console.log("What is name?", name, balance, creditLimit, sepaPermission);
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.sepaPermission = sepaPermission;
        this.withDrawLimit = 20000
    }

    makeDeposit(amount) {
        // console.log("AMOUNT?", amount);
        if (amount > 0) {
            this.balance = this.balance + amount;
            // console.log(this.balance);
        }
        // return this.balance;
    }

    makeWithdrawal(amount) {
        // console.log("jefhgfgeqjwg", amount)
        if (amount > this.withDrawLimit) {
            return;
        }

        if (this.balance + this.creditLimit > amount){
            this.balance = this.balance - amount;
        }
        // console.log("BALANCE: ", this.balance)
        // return this.balance;
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
++++++++++++++++++++++++++++++++
EXTENDS VARIANT:

// Export your class here as module.exports = MyClass


const Account = require("./Account");
//
class BusinessAccount extends Account {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        console.log("SUPER OUTPUT:", name, balance, creditLimit);
        // this.name = name;
        // this.balance = balance;
        // this.creditLimit = creditLimit;
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



```







