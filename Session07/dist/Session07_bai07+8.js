"use strict";
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
class Accounts {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(money) {
        this.balance += money;
        const log = `Ban da nap ${money} thanh cong`;
        console.log(`nap tien thanh cong`);
        this.history.push(log);
    }
    showHistory() {
        this.history.forEach(a => console.log(a));
    }
}
class SavingAccount extends Accounts {
    interesRate;
    constructor(accountNumber, balance, status, interesRate) {
        super(accountNumber, balance, status);
        this.interesRate = interesRate;
    }
    withdraw(money) {
        if (money < 0) {
            console.log(`so tien rut phai lon hon 0`);
            return;
        }
        if (money > this.balance) {
            console.log(`So du khong du de rut ${money}`);
        }
        else {
            this.balance -= money;
            const log = `Ban da rut ${money} thanh cong`;
            this.history.push(log);
            console.log(log);
        }
    }
}
class CheckAccount extends Accounts {
    overdraftLimit;
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(money) {
        if (money > this.balance + this.overdraftLimit) {
            console.log(`ko the rut tien`);
        }
        else {
            this.balance -= money;
            const log = `ban da rut thanh cong ${money} tien`;
            this.history.push(log);
        }
    }
}
