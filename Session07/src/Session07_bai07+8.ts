enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}
abstract class Accounts {
    accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: Status;
    constructor(accountNumber: number, balance: number, status: Status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(money: number) {
        this.balance += money;
        const log = `Ban da nap ${money} thanh cong`
        console.log(`nap tien thanh cong`);
        this.history.push(log);

    }
    abstract withdraw(money: number): void;
    showHistory(): void {
        this.history.forEach(a => console.log(a));

    }
}
class SavingAccount extends Accounts {
    interesRate: number;
    constructor(accountNumber: number, balance: number, status: Status, interesRate: number) {
        super(accountNumber, balance, status)
        this.interesRate = interesRate;
    }
    withdraw(money: number): void {
        if (money < 0) {
            console.log(`so tien rut phai lon hon 0`);
            return;

        }
        if (money > this.balance) {
            console.log(`So du khong du de rut ${money}`);
        } else {
            this.balance -= money;  
            const log = `Ban da rut ${money} thanh cong`;
            this.history.push(log);
            console.log(log);
        }

    }
}
class CheckAccount extends Accounts{
    overdraftLimit:number;
     constructor(accountNumber: number, balance: number, status: Status, overdraftLimit:number) {
        super(accountNumber, balance, status)
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(money: number): void {
        if(money > this.balance + this.overdraftLimit){
            console.log(`ko the rut tien`);
            

        }else{
            this.balance -= money;
            const log = `ban da rut thanh cong ${money} tien`
            this.history.push(log);

        }
    }
}